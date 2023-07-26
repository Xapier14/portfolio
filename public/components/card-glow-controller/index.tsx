import { useEffect } from "preact/hooks";

export function CardGlowController() {
  function onMouseMove(e: MouseEvent) {
    const root = document.querySelector(":root") as HTMLElement;
    if (root) {
      root.style.setProperty("--mouse-x", `${e.clientX}px`);
      root.style.setProperty("--mouse-y", `${e.clientY}px`);
    }
  }
  useEffect(() => {
    window.addEventListener("mousemove", onMouseMove);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  });
  return <div></div>;
}
