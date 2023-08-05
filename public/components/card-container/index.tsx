import style from "./style.module.scss";

interface CardContainerProps {
  children: any;
  class?: string;
  id?: string;
  grid?: boolean;
}

export default function CardContainer(props: CardContainerProps) {
  return (
    <div
      class={` ${props.grid == true ? style["grid-mode"] : ""} ${
        style["card-container"]
      } ${props.class ?? ""}`}
      id={props.id}
    >
      {props.children}
    </div>
  );
}
