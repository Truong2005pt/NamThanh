/** ERACEX mark: three slanted bars, geometry traced from the supplied black/white logo artwork. */
export default function Logo({ size = 28, color = "currentColor", className }: { size?: number; color?: string; className?: string }) {
  return (
    <svg viewBox="0 0 801 488" width={size} height={(size * 488) / 801} className={className} role="img" aria-label="ERACEX" fill={color}>
      <polygon points="238,0 801,0 695,140 131,140" />
      <polygon points="172,174 553,174 448,313 65,313" />
      <polygon points="106,347 725,347 620,488 0,488" />
    </svg>
  );
}
