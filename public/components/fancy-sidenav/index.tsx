import { useEffect, useState } from "preact/hooks";
import style from "./style.module.scss";

export default function FancySideNav() {
  const [relativeMousePosition, setRelativeMousePosition] = useState([0, 0]);
  const [navHidden, setNavHidden] = useState(false);

  function updateMousePosition(ev: MouseEvent) {
    setRelativeMousePosition([ev.clientX, ev.clientY]);
  }

  function onDocumentScroll() {
    console.log(window.scrollY);
    if (window.scrollY > 0) {
      setNavHidden(true);
    } else {
      setNavHidden(false);
    }
  }

  useEffect(() => {
    document.addEventListener("scroll", onDocumentScroll);

    return () => {
      document.removeEventListener("scroll", onDocumentScroll);
    };
  });

  return (
    <div
      class={`${style["nav-active-area"]} ${navHidden ? style["hidden"] : ""}`}
      onPointerMove={updateMousePosition}
    >
      <div class={style["nav-container"]}></div>
    </div>
  );
}
