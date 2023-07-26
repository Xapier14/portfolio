import { v5 as uuidv5, v5 } from "uuid";

import "../common/card-style.scss";
import { useEffect, useState } from "preact/hooks";

interface SimpleCardProps {
  children: any;
}

export default function SimpleCard(props: SimpleCardProps) {
  const [id, setId] = useState<string>(uuidv5("SimpleCard", v5.URL));
  const [x, setX] = useState<number>(0);
  const [y, setY] = useState<number>(0);

  function onMouseMove(e: MouseEvent) {
    // get mouse coordinate relative to this card
    var card = document.getElementById(id);
    if (card) {
      var rect = card.getBoundingClientRect();
      var x = e.clientX - rect.left;
      var y = e.clientY - rect.top;
      setX(x);
      setY(y);
    }
  }

  useEffect(() => {
    // add mouse move event listener
    window.addEventListener("mousemove", onMouseMove);
    return () => {
      // remove mouse move event listener
      window.removeEventListener("mousemove", onMouseMove);
    };
  });

  return (
    <div class="card" id={id}>
      {props.children}
    </div>
  );
}
