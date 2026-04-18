const { onRequest } = require('firebase-functions/v2/https')
const { defineSecret } = require('firebase-functions/params')
const logger = require('firebase-functions/logger')
const admin = require('firebase-admin')
const twilio = require('twilio')

admin.initializeApp()

const db = admin.firestore()
const twilioAccountSid = defineSecret('TWILIO_ACCOUNT_SID')
const twilioAuthToken = defineSecret('TWILIO_AUTH_TOKEN')
const twilioWhatsAppFrom = defineSecret('TWILIO_WHATSAPP_FROM')
const notifyWhatsAppTo = defineSecret('NOTIFY_WHATSAPP_TO')

exports.sendLeadWhatsApp = onRequest(
  {
    region: 'asia-south1',
    cors: true,
    secrets: [
      twilioAccountSid,
      twilioAuthToken,
      twilioWhatsAppFrom,
      notifyWhatsAppTo,
    ],
  },
  async (req, res) => {
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method not allowed' })
    }

    const {
      leadId,
      fullName,
      phoneNumber,
      city,
      loanType,
      loanAmount,
      employmentType,
    } = req.body || {}

    if (
      !fullName ||
      !phoneNumber ||
      !city ||
      !loanType ||
      !loanAmount ||
      !employmentType
    ) {
      return res.status(400).json({ error: 'Missing required lead fields' })
    }

    const messageBody = [
      'New Lead Received:',
      `Name: ${fullName}`,
      `Phone: ${phoneNumber}`,
      `City: ${city}`,
      `Loan Type: ${loanType}`,
      `Loan Amount: \u20B9${loanAmount}`,
      `Employment: ${employmentType}`,
    ].join('\n')

    try {
      const client = twilio(
        twilioAccountSid.value(),
        twilioAuthToken.value()
      )

      const message = await client.messages.create({
        from: twilioWhatsAppFrom.value(),
        to: notifyWhatsAppTo.value(),
        body: messageBody,
      })

      if (leadId) {
        await db.collection('leads').doc(leadId).set(
          {
            whatsappNotification: {
              status: 'sent',
              sid: message.sid,
              sentAt: admin.firestore.FieldValue.serverTimestamp(),
            },
          },
          { merge: true }
        )
      }

      return res.status(200).json({
        success: true,
        sid: message.sid,
      })
    } catch (error) {
      logger.error('Failed to send WhatsApp notification', error)

      if (leadId) {
        await db.collection('leads').doc(leadId).set(
          {
            whatsappNotification: {
              status: 'failed',
              error: error.message,
              attemptedAt: admin.firestore.FieldValue.serverTimestamp(),
            },
          },
          { merge: true }
        )
      }

      return res.status(500).json({
        error: 'Unable to send WhatsApp notification',
      })
    }
  }
)
