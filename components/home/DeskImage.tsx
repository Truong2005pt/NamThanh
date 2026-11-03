/** Laptop picture with the app on its screen: the light render in the light theme, the dark render in the dark theme. */
export function DeskImage() {
  return (
    <div className="sk-desk" role="img" aria-label="Ứng dụng ERACEX trên máy tính xách tay">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="lt" src="/home/laptop-light.webp" alt="" loading="lazy" draggable={false} />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="dk" src="/home/laptop-dark.webp" alt="" loading="lazy" draggable={false} />
    </div>
  );
}
