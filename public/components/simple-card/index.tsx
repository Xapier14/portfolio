import { v5 as uuidv5, v5 } from "uuid";

import "../common/card-style.scss";
import { useEffect, useState } from "preact/hooks";

interface SimpleCardProps {
  class?: string;
  children?: any;
  style?: string;
}

export default function SimpleCard(props: SimpleCardProps) {
  const className = props.class ?? "";
  return (
    <div class={`card active-glow ${className}`} style={props.style}>
      <div class="card-bg"></div>
      {props.children}
    </div>
  );
}
