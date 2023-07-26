import style from "./style.module.scss";

interface CardContainerProps {
  children: any;
  class?: string;
  id?: string;
}

export default function CardContainer(props: CardContainerProps) {
  return (
    <div
      class={`${style["card-container"]} ${props.class ?? ""}`}
      id={props.id}
    >
      {props.children}
    </div>
  );
}
