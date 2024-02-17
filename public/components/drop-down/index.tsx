import style from "./style.module.scss";
import DropDownItem from "../drop-down-item";
import { JSXInternal } from "preact/src/jsx";

interface DropDownProps {
  children?: JSXInternal.Element[] | JSXInternal.Element;
  class?: string;
  id?: string;
}

export default function DropDown(props: DropDownProps) {
  return (
    <div class={`${style["drop-down"]} ${props.class ?? ""}`} id={props.id}>
      {props.children}
    </div>
  );
}
