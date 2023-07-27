const animations = [
  {
    animId: `glow1`,
    initial: `
        position: absolute;
        left: 0;
        top: 0;
        width: max(60vw, 60vh);
        filter: blur(max(10vw, 10vh));
        animation: glow1 170s linear infinite;
  
        aspect-ratio: 1 / 1;
        z-index: -1;
        background-color: transparent;
        `,
    frames: `
        0% {
          width: max(60vw, 60vh);
          filter: blur(max(10vw, 10vh));
          transform: translate3d(-40vw, -10vh, 0) rotate(0deg);
        }
        38% {
          width: max(45vw, 45vh);
          filter: blur(max(8vw, 8vh));
          transform: translate3d(50vw, 0vh, 0) rotate(45deg);
        }
        50% {
          width: max(30vw, 30vh);
          filter: blur(max(10vw, 10vh));
          transform: translate3d(68vw, 5vh, 0) rotate(180deg);
        }
        90% {
          width: max(35vw, 35vh);
          filter: blur(max(12vw, 12vh));
          transform: translate3d(-10vw, -5vh, 0) rotate(270deg);
        }
        100% {
          width: max(60vw, 60vh);
          filter: blur(max(10vw, 10vh));
          transform: translate3d(-40vw, -10vh, 0) rotate(360deg);
        }
        `,
  },
  {
    animId: `glow2`,
    initial: `
        position: absolute;
        left: 0;
        top: 0;
        width: max(40vw, 40vh);
        filter: blur(max(6vw, 6vh));
        animation: glow2 180s linear infinite;
  
        aspect-ratio: 1 / 1;
        z-index: -1;
        background-color: transparent;
        `,
    frames: `
        0% {
          width: max(40vw, 40vh);
          filter: blur(max(6vw, 6vh));
          transform: translate3d(70vw, -10vh, 0) rotate(0deg);
        }
        38% {
          width: max(30vw, 30vh);
          filter: blur(max(7vw, 7vh));
          transform: translate3d(5vw, 5vh, 0) rotate(45deg);
        }
        50% {
          width: max(25vw, 25vh);
          filter: blur(max(5vw, 5vh));
          transform: translate3d(60vw, 40vh, 0) rotate(90deg);
        }
        73% {
          width: max(30vw, 30vh);
          filter: blur(max(6vw, 6vh));
          transform: translate3d(10vw, 10vh, 0) rotate(270deg);
        }
        100% {
          width: max(40vw, 40vh);
          filter: blur(max(6vw, 6vh));
          transform: translate3d(70vw, -10vh, 0) rotate(360deg);
        }
        `,
  },
  {
    animId: `glow3`,
    initial: `
        position: absolute;
        left: 0;
        top: 0;
        width: max(50vw, 50vh);
        filter: blur(max(8vw, 8vh));
        animation: glow3 150s linear infinite;
  
        aspect-ratio: 1 / 1;
        z-index: -1;
        background-color: transparent;
        `,
    frames: `
        0% {
          width: max(50vw, 50vh);
          filter: blur(max(8vw, 8vh));
          transform: translate3d(25vw, 50vh, 0) rotate(0deg);
        }
        25% {
          width: max(40vw, 40vh);
          filter: blur(max(6vw, 6vh));
          transform: translate3d(70vw, 40vh, 0) rotate(45deg);
        }
        40% {
          width: max(35vw, 35vh);
          filter: blur(max(5vw, 5vh));
          transform: translate3d(40vw, 20vh, 0) rotate(90deg);
        }
        67% {
          width: max(45vw, 45vh);
          filter: blur(max(8vw, 8vh));
          transform: translate3d(15vw, 40vh, 0) rotate(180deg);
        }
        85% {
          width: max(40vw, 40vh);
          filter: blur(max(10vw, 10vh));
          transform: translate3d(40vw, 20vh, 0) rotate(270deg);
        }
        100% {
          width: max(50vw, 50vh);
          filter: blur(max(8vw, 8vh));
          transform: translate3d(25vw, 50vh, 0) rotate(360deg);
        }
        `,
  },
  {
    animId: `glow4`,
    initial: `
        position: absolute;
        left: 0;
        top: 0;
        width: max(50vw, 50vh);
        filter: blur(max(8vw, 8vh));
        animation: glow3 120s linear infinite;
  
        aspect-ratio: 1 / 1;
        z-index: -1;
        background-color: transparent;
        `,
    frames: `
        0% {
          width: max(50vw, 50vh);
          filter: blur(max(8vw, 8vh));
          transform: translate3d(10vw, 30vh, 0) rotate(0deg);
        }
        15% {
          width: max(20vw, 20vh);
          filter: blur(max(5vw, 5vh));
          transform: translate3d(18vw, 20vh, 0) rotate(45deg);
        }
        40% {
          width: max(50vw, 50vh);
          filter: blur(max(12vw, 12vh));
          transform: translate3d(30vw, 40vh, 0) rotate(90deg);
        }
        67% {
          width: max(35vw, 35vh);
          filter: blur(max(6vw, 6vh));
          transform: translate3d(40vw, 70vh, 0) rotate(180deg);
        }
        85% {
          width: max(40vw, 40vh);
          filter: blur(max(7vw, 7vh));
          transform: translate3d(30vw, 50vh, 0) rotate(270deg);
        }
        100% {
          width: max(50vw, 50vh);
          filter: blur(max(8vw, 8vh));
          transform: translate3d(10vw, 30vh, 0) rotate(360deg);
        }
        `,
  },
];

var styleElement = null;

var addKeyFrames = null;
// if (CSS && CSS.supports && CSS.supports("animation: name")) {
// we can safely assume that the browser supports unprefixed version.
addKeyFrames = function (name: string, frames: string) {
  var pos = styleElement.sheet.cssRules.length;
  styleElement.sheet.insertRule("@keyframes " + name + "{" + frames + "}", pos);
};
// } else {
//   addKeyFrames = function (name, frames) {
//     // Ugly and terrible, but users with this terrible of a browser
//     // *cough* IE *cough* don't deserve a fast site
//     var str = name + "{" + frames + "}",
//       pos = styleElement.sheet.cssRules.length;
//     styleElement.sheet.insertRule("@-webkit-keyframes " + str, pos);
//     styleElement.sheet.insertRule("@keyframes " + str, pos + 1);
//   };
// }
function addIdStyle(id: string, style: string, animName: string) {
  var pos = styleElement.sheet.cssRules.length;
  styleElement.sheet.insertRule(
    "#" +
      id +
      "{" +
      style +
      `;animation: ${animName} 60s ease-in-out infinite;` +
      "}",
    pos
  );
}

const init = (
  count: number,
  globs: string[]
): { glob: string; anim: string }[] => {
  if (count == 0) {
    return [];
  }
  if (styleElement) document.head.removeChild(styleElement);
  styleElement = document.createElement("style");
  document.head.appendChild(styleElement);
  var pickedGlobs: { glob: string; anim: string }[] = [];

  var pickFromAnimations = [...animations];
  var pickFromGlobs = [...globs];

  for (var i = 0; i < count; i++) {
    if (pickFromAnimations.length == 0) break;
    var pickedAnimationIndex = Math.floor(
      Math.random() * pickFromAnimations.length
    );
    var anim = pickFromAnimations[pickedAnimationIndex];
    pickFromAnimations.splice(pickedAnimationIndex, 1);
    var pickedGlobIndex = Math.floor(Math.random() * pickFromGlobs.length);
    var glob = pickFromGlobs[pickedGlobIndex];
    pickFromGlobs.splice(pickedGlobIndex, 1);
    addKeyFrames("glow-anim-" + (i + 1), anim.frames);
    addIdStyle("glow-drop-" + (i + 1), anim.initial, "glow-anim-" + (i + 1));
    pickedGlobs.push({
      glob: glob,
      anim: anim.animId,
    });
  }
  return pickedGlobs;
};

const unmount = () => {
  styleElement?.remove();
};

export { init, unmount };
