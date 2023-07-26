import { ComponentChildren } from "preact";

import style from "./style.module.scss";

interface TechListProps {
  children?: ComponentChildren;
}

export default function TechList(props: TechListProps) {
  return <ul class={style["tech-list"]}>{props.children}</ul>;
}
