import { ComponentChildren } from "preact";

import style from "./style.module.scss";

interface TechListProps {
  children?: ComponentChildren;
  id?: string;
  class?: string;
  singleColumn?: boolean;
}

export default function TechList(props: TechListProps) {
  return (
    <ul
      class={`${style["tech-list"]} ${props.class ?? ""} ${
        props.singleColumn == true ? style["single-column"] : ""
      }`}
      id={props.id}
    >
      {props.children}
    </ul>
  );
}
