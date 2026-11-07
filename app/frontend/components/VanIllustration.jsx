// utilitaire dessiné maison, en attendant la vraie photo du Kangoo
export default function VanIllustration({ label }) {
  const bubbles = [
    { x: 92, y: 236, r: 7, d: 0 },
    { x: 128, y: 262, r: 4, d: 1.2 },
    { x: 540, y: 250, r: 9, d: 0.6 },
    { x: 590, y: 212, r: 5, d: 1.8 },
    { x: 350, y: 300, r: 6, d: 2.4 },
    { x: 470, y: 286, r: 4, d: 3 },
    { x: 60, y: 180, r: 5, d: 2 },
    { x: 610, y: 150, r: 6, d: 1.5 },
  ]

  return (
    <svg className="van" viewBox="0 0 660 340" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="van-body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="1" stopColor="#e6eef4" />
        </linearGradient>
        <linearGradient id="van-glass" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#4fc6e0" stopOpacity="0.9" />
          <stop offset="1" stopColor="#16304a" />
        </linearGradient>
      </defs>

      <g className="van__water">
        <path
          d="M0 300 Q 80 280 160 300 T 320 300 T 480 300 T 640 300 T 800 300 V 340 H 0 Z"
          fill="#1aa7c9"
          opacity="0.28"
        />
        <path
          d="M-160 310 Q -80 292 0 310 T 160 310 T 320 310 T 480 310 T 640 310 V 340 H -160 Z"
          fill="#1aa7c9"
          opacity="0.35"
        />
      </g>

      <ellipse cx="330" cy="292" rx="250" ry="12" fill="#06111c" opacity="0.45" />

      <g className="van__body">
        <path
          d="M78 262 V 196 Q 78 170 104 164 L 176 152 L 226 94 Q 236 82 254 82 H 560 Q 586 82 586 108 V 262 Z"
          fill="url(#van-body)"
        />
        <path d="M78 214 H 586 V 234 H 78 Z" fill="#1aa7c9" />
        <path d="M184 158 L 228 102 Q 234 96 244 96 H 262 V 158 Z" fill="url(#van-glass)" />
        <rect x="276" y="96" width="92" height="62" rx="6" fill="url(#van-glass)" />
        <rect x="382" y="96" width="124" height="62" rx="6" fill="url(#van-glass)" />
        <rect x="372" y="96" width="4" height="118" fill="#cfdbe4" />
        <rect x="520" y="96" width="4" height="118" fill="#cfdbe4" />
        <path d="M80 196 H 104 V 212 H 80 Z" fill="#ffe9a6" />
        <rect x="78" y="250" width="508" height="12" fill="#cfdbe4" />
        <rect x="586" y="190" width="10" height="24" fill="#d94f4f" />
        {label && (
          <text x="330" y="196" textAnchor="middle" fontSize="20" fontWeight="800" fill="#0b1b2b">
            {label}
          </text>
        )}
      </g>

      <g className="van__wheels">
        <circle cx="170" cy="262" r="38" fill="#0b1b2b" />
        <circle cx="170" cy="262" r="20" fill="#cfdbe4" />
        <circle cx="170" cy="262" r="7" fill="#5c6b7a" />
        <circle cx="500" cy="262" r="38" fill="#0b1b2b" />
        <circle cx="500" cy="262" r="20" fill="#cfdbe4" />
        <circle cx="500" cy="262" r="7" fill="#5c6b7a" />
      </g>

      <g className="van__bubbles">
        {bubbles.map((bubble, index) => (
          <circle
            key={index}
            className="van__bubble"
            cx={bubble.x}
            cy={bubble.y}
            r={bubble.r}
            style={{ animationDelay: `${bubble.d}s` }}
          />
        ))}
      </g>
    </svg>
  )
}
