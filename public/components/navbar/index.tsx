import { useEffect, useState } from "preact/hooks";
import style from "./style.module.scss";
import "../common/card-style.scss";
import { useLocation } from "preact-iso";

export function NavBar() {
  var [autoHide, setAutoHide] = useState(false);
  const location = useLocation();
  var [path, setPath] = useState("");

  const onScroll = () => {
    var navbar = document.getElementsByClassName(style["navbar"])[0];
    if (navbar) {
      const autoHideNow = path == "/";
      setAutoHide(autoHideNow);
      console.log(`autoHide from scroll is ${autoHideNow}`);
      // console.log(`[scroll] path`);
      // console.log(path);
      if (!autoHideNow) {
        navbar.classList.remove(style["hidden"]);
        return;
      }
      if (window.scrollY > 0) {
        navbar.classList.remove(style["hidden"]);
      } else {
        console.log("hidden by scroll");
        navbar.classList.add(style["hidden"]);
      }
    }
  };

  useEffect(() => {
    console.log("locationHook trigger");
    console.log(location);
    setPath(location.path);
    console.log(`path updated: ${location.path}`);
  }, [location]);

  useEffect(() => {
    console.log("pathHook trigger");
    const autoHideNow = path == "/";
    setAutoHide(autoHideNow);

    window.removeEventListener("scroll", onScroll);
    if (!autoHideNow) {
      window.addEventListener("scroll", onScroll);
    }

    var navbar = document.getElementsByClassName(style["navbar"])[0];
    if (navbar != null && !autoHideNow) {
      console.log("unhiding navbar");
      navbar.classList.remove(style["hidden"]);
    }
  }, [path]);

  useEffect(() => {
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      var navbar = document.getElementsByClassName(style["navbar"])[0];
      const autoHideNow = path == "/";
      setAutoHide(autoHideNow);

      window.removeEventListener("scroll", onScroll);

      if (navbar != null && !autoHideNow) {
        console.log("unhiding navbar");
        navbar.classList.remove(style["hidden"]);
      }
    };
  });

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
