import { useEffect } from "preact/hooks";

export function CardGlowController() {
  const isPrerender = typeof window === "undefined";
  var root = null;
  if (!isPrerender) {
    root = document.querySelector(":root") as HTMLElement;
    root.style.setProperty("--mouse-x", `-1000px`);
    root.style.setProperty("--mouse-y", `-1000px`);
  }

  function onMouseMove(e: MouseEvent) {
    if (root) {
      root.style.setProperty("--mouse-x", `${e.clientX}px`);
      root.style.setProperty("--mouse-y", `${e.clientY}px`);
    } else {
      root = document.querySelector(":root") as HTMLElement;
    }
  }
  useEffect(() => {
    if (isPrerender) return;
    // if mobile
    if (window.innerWidth <= 768) {
      return;
    }

    window.addEventListener("mousemove", onMouseMove);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  });
  return <div></div>;
}
