import { useEffect } from "preact/hooks";
import style from "./style.module.scss";
import "../common/card-style.scss";
import { useLocation } from "preact-iso";

export function NavBar() {
  var autoHide = false;
  const location = useLocation();
  useEffect(() => {
    let path = location.url;
    autoHide = path == "/";
    console.log(`NavBar Auto-Hide: ${autoHide}`);
    var navbar = document.getElementsByClassName(style["navbar"])[0];
    if (navbar && !autoHide) {
      navbar.classList.remove(style["hidden"]);
      return;
    }
    // scroll event listener
    window.addEventListener("scroll", () => {
      if (navbar) {
        let path = location.url;
        autoHide = path == "/";
        if (!autoHide) {
          navbar.classList.remove(style["hidden"]);
          return;
        }
        if (window.scrollY > 0) {
          navbar.classList.remove(style["hidden"]);
        } else {
          navbar.classList.add(style["hidden"]);
        }
      }
    });
  }, [location]);
  return (
    <>
      <header
        class={`${style["navbar"]} ${style["hidden"]} ${
          autoHide ? style["interactive"] : ""
        } active-glow`}
      >
        <div class="general-bg"></div>
        <div class={style["navbar-logo"]}>
          <a href="/">
            <h1>Lance Crisang</h1>
          </a>
        </div>
        <nav class={style["navbar-buttons"]}>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/projects">Projects</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
