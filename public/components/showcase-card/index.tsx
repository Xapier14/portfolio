import style from "./style.module.scss";
import "../common/card-style.scss";

interface ShowcaseCardProps {
  name: string;
  icon?: string | (() => JSX.Element);
  showcase?: string | (() => JSX.Element);
  children?: any;
}

export default function ShowcaseCard(props: ShowcaseCardProps) {
  const hasIcon = props.icon != null;
  const isIconJsxElement = typeof props.icon != "string";
  const hasShowcase = props.showcase != null;
  const isShowcaseJsxElement = typeof props.showcase != "string";
  return (
    <div class={`card active-glow ${style["showcase-card"]}`}>
      <div class="card-bg"></div>
      {hasShowcase ? (
        <div class={style["showcase-image-container"]}>
          {isShowcaseJsxElement ? (
            (props.showcase as () => JSX.Element)()
          ) : (
            <img src={props.showcase as string} />
          )}
        </div>
      ) : null}
      <div class={style["showcase-card-header"]}>
        {hasIcon ? (
          isIconJsxElement == true ? (
            (props.icon as () => JSX.Element)()
          ) : props.icon ? (
            <img src={props.icon as string} />
          ) : null
        ) : null}
        <h2>{props.name}</h2>
      </div>
      <div class={style["showcase-card-body"]}>{props.children}</div>
    </div>
  );
}
