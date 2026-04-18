export default function Logo({ className = "w-8 h-8" }) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Shield background */}
      <path
        d="M100 20L140 40V100C140 140 100 170 100 170C100 170 60 140 60 100V40L100 20Z"
        fill="#2563eb"
        stroke="#2563eb"
        strokeWidth="2"
      />
      
      {/* Upward arrow inside shield */}
      <path
        d="M100 80L90 100H95V130H105V100H110L100 80Z"
        fill="white"
      />
      
      {/* Dollar sign */}
      <circle cx="100" cy="60" r="8" fill="white" opacity="0.3" />
    </svg>
  )
}