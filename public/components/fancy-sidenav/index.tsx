import { useEffect, useState } from "preact/hooks";
import style from "./style.module.scss";

export default function FancySideNav() {
  const [showLinks, setShowLinks] = useState(false);
  const [isInActiveArea, setIsInActiveArea] = useState(false);
  const [navVisible, setNavVisible] = useState(false);

  function enterMouseArea() {
    setIsInActiveArea(true);
  }

  function leaveMouseArea() {
    setIsInActiveArea(false);
    setShowLinks(false);
  }

  function enterNavShow() {
    if (showLinks) return;
    setShowLinks(true);
  }

  function onDocumentScroll() {
    if (window.scrollY > 0) {
      setNavVisible(false);
      setShowLinks(false);
      setIsInActiveArea(false);
    } else {
      setNavVisible(true);
    }
  }

  useEffect(() => {
    document.addEventListener("scroll", onDocumentScroll);
    onDocumentScroll();
    return () => {
      document.removeEventListener("scroll", onDocumentScroll);
    };
  });
  return (
    <div
      class={`${style["nav-active-area"]} ${
        navVisible ? style["nav-active-area-visible"] : ""
      }`}
      onMouseEnter={enterMouseArea}
      onMouseLeave={leaveMouseArea}
    >
      <div
        class={`${style["nav-show-container"]} ${
          showLinks ? style["nav-show-container-active"] : ""
        }`}
        onMouseEnter={enterNavShow}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>
      <div class={`${style["nav-links"]} ${showLinks ? style["visible"] : ""}`}>
        <ul>
          <li>
            <a href="/projects">Projects</a>
          </li>
          {/* <li>
            <a href="https://blog.xapier.me">Blog</a>
          </li> */}
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
