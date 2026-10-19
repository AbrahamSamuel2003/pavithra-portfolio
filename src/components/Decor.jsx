// Decorative SVGs: burgundy leaf branch, sparkle star, little planet, check mark.

const LEAF = 'M0 0 C14 -22 52 -26 78 0 C52 26 14 22 0 0 Z'

// [x, y, rotation, scale] along the stem
const LEAVES = [
  [30, 268, -100, 0.8],
  [44, 248, -5, 0.75],
  [66, 226, -105, 0.95],
  [82, 200, -10, 0.9],
  [104, 176, -108, 1.05],
  [118, 148, -12, 1],
  [140, 122, -110, 0.95],
  [152, 94, -15, 0.85],
  [172, 70, -112, 0.8],
  [184, 44, -20, 0.65],
  [198, 22, -75, 0.6],
]

export function LeafBranch({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 280 300" fill="none" aria-hidden="true" focusable="false">
      <path
        d="M16 296 C64 230 120 156 204 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {LEAVES.map(([x, y, r, s], i) => (
        <g key={i} transform={`translate(${x} ${y}) rotate(${r}) scale(${s})`}>
          <path d={LEAF} fill="currentColor" />
          <path d="M4 0 L70 0" stroke="var(--cream)" strokeWidth="1.4" strokeLinecap="round" opacity=".7" />
        </g>
      ))}
    </svg>
  )
}

export function Sparkle({ className = '', style }) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        d="M12 0C12.8 7.5 16.5 11.2 24 12C16.5 12.8 12.8 16.5 12 24C11.2 16.5 7.5 12.8 0 12C7.5 11.2 11.2 7.5 12 0Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function Planet({ className = '', style }) {
  return (
    <svg className={className} style={style} viewBox="0 0 48 48" fill="none" aria-hidden="true" focusable="false">
      <circle cx="24" cy="24" r="9" fill="currentColor" />
      <ellipse cx="24" cy="24" rx="20" ry="6" transform="rotate(-24 24 24)" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  )
}

export function CheckMark({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 52 52" fill="none" aria-hidden="true" focusable="false">
      <circle className="check-ring" cx="26" cy="26" r="23" stroke="currentColor" strokeWidth="2.5" />
      <path className="check-tick" d="M15 27 L23 35 L38 18" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function Squiggle({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 90 60" fill="none" aria-hidden="true" focusable="false">
      <path d="M4 8 C30 2 60 14 66 40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M56 36 L66 42 L72 30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
