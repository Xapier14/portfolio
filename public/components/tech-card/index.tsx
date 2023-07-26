import style from "./style.module.scss";
import "../common/card-style.scss";

interface TechCardProps {
  name: string;
  icon?: string | (() => JSX.Element);
  children: any;
}

export default function TechCard(props: TechCardProps) {
  const isIconJsxElement = typeof props.icon != "string";
  return (
    <div class={`card ${style["tech-card"]}`}>
      <div class={style["tech-card-header"]}>
        {props.icon ? (
          isIconJsxElement == true ? (
            (props.icon as () => JSX.Element)()
          ) : props.icon ? (
            <img src={props.icon as string} />
          ) : null
        ) : null}
        <h2>{props.name}</h2>
      </div>
      <div class={style["tech-card-body"]}>{props.children}</div>
    </div>
  );
}
