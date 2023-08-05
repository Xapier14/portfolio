import { init, unmount } from "./glowdrop";
import { Fragment, h } from "preact";
import { useEffect, useState } from "preact/hooks";

import style from "./style.module.scss";

// TODO: replace glob7.svg

interface GlowDropControllerProps {
  numberOfGlobs?: number;
  numberOfGlobsForMobile?: number;
}

const numberOfGlobs = 6;
const numberOfGlobsForMobile = 3;

export function GlowDropController(props: GlowDropControllerProps) {
  var [pickedGlobs, setPickedGlobs] = useState([]);
  var isMobile =
    typeof window !== "undefined" ? window.innerWidth < 768 : false;

  useEffect(() => {
    console.log("GlowDrop mounted");
    const globs = [
      "/assets/globs/glob1.svg",
      "/assets/globs/glob2.svg",
      "/assets/globs/glob3.svg",
      "/assets/globs/glob4.svg",
      "/assets/globs/glob5.svg",
      "/assets/globs/glob6.svg",
      "/assets/globs/glob7.svg",
      "/assets/globs/glob8.svg",
    ];
    const n = isMobile
      ? props.numberOfGlobsForMobile ?? numberOfGlobsForMobile
      : props.numberOfGlobs ?? numberOfGlobs;
    console.log("isMobile: " + isMobile);
    setPickedGlobs(init(n, globs));
    return () => {
      unmount();
      console.log("GlowDrop unmounted");
    };
  }, []);

  return (
    <>
      <div
        class={`${style["glow-drop-container"]} ${
          pickedGlobs.length == 0 ? style["glow-drop-disabled"] : ""
        }`}
      >
        {pickedGlobs.map((glob, i) => (
          <img
            src={glob.glob}
            id={"glow-drop-" + (i + 1)}
            className={`glob DEBUG-${glob.anim}`}
          />
        ))}
      </div>
    </>
  );
}
