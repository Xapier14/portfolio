import style from "./style.module.scss";

interface TechListItemProps {
  name?: string;
  icon?: string | (() => JSX.Element);
  children?: string;
  id?: string;
  class?: string;
  imageId?: string;
}

export default function TechListItem(props: TechListItemProps) {
  const isIconJsxElement = typeof props.icon != "string";
  return (
    <li class={`${style["tech-list-item"]} ${props.class ?? ""}`} id={props.id}>
      {props.icon ? (
        isIconJsxElement == true ? (
          (props.icon as () => JSX.Element)()
        ) : props.icon ? (
          <img
            src={props.icon as string}
            class={style["tech-list-item-icon"]}
            id={props.imageId}
          />
        ) : null
      ) : null}
      {props.name ?? props.children ? (
        <h3>{props.name ?? props.children}</h3>
      ) : undefined}
    </li>
  );
}
