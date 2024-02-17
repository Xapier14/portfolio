import style from "./style.module.scss";

interface DropDownItemProps {
  class?: string;
  id?: string;
  value: string;
  name?: string;
}

export default function DropDownItem(props: DropDownItemProps) {
  return (
    <div
      class={`${style["drop-down-item"]} ${props.class ?? ""}`}
      id={props.id}
    >
      {props.value}
    </div>
  );
}
