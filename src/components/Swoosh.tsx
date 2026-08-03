/** Signature swoosh — the header gradient sweep used in hero and banners. */
export default function Swoosh() {
  return (
    <svg className="swoosh" viewBox="0 0 1200 340" preserveAspectRatio="none" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="swooshGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#0D3B66" />
          <stop offset="0.55" stopColor="#12518D" />
          <stop offset="1" stopColor="#1D7FC1" />
        </linearGradient>
      </defs>
      <path d="M0,0 H1200 V364 Q590,-16 0,28 Z" fill="#fff" />
      <path d="M0,0 H1200 V332 Q600,-40 0,14 Z" fill="url(#swooshGrad)" />
    </svg>
  );
}
