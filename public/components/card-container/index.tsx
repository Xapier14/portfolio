import style from "./style.module.scss";

interface CardContainerProps {
  children: any;
  class?: string;
  id?: string;
  grid?: string;
}

export default function CardContainer(props: CardContainerProps) {
  return (
    <div
      class={` ${
        props.grid != undefined ? style["grid-mode-" + props.grid] : ""
      } ${style["card-container"]} ${props.class ?? ""}`}
      id={props.id}
    >
      {props.children}
    </div>
  );
}
