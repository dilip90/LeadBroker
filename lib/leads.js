import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from './firebase'

const twilioWebhookUrl = process.env.NEXT_PUBLIC_TWILIO_WEBHOOK_URL

export async function saveLead(leadData) {
  const docRef = await addDoc(collection(db, 'leads'), {
    ...leadData,
    createdAt: serverTimestamp(),
    status: 'new',
    source: 'website',
  })

  return docRef.id
}

export async function notifyLeadOnWhatsApp(payload) {
  if (!twilioWebhookUrl) {
    throw new Error('Missing NEXT_PUBLIC_TWILIO_WEBHOOK_URL')
  }

  const response = await fetch(twilioWebhookUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })

  if (!response.ok) {
    let errorMessage = 'Failed to send WhatsApp notification'

    try {
      const errorData = await response.json()
      errorMessage = errorData.error || errorMessage
    } catch (error) {
      // Fallback to the default message when the response is not JSON.
    }

    throw new Error(errorMessage)
  }

  return response.json()
}
