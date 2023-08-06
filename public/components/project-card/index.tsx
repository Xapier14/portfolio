import { GitHubIcon } from "../icons";

import style from "./style.module.scss";
import "../common/card-style.scss";

interface ProjectCardProps {
  name: string;
  link?: string;
  github?: string;
  demo?: string;
  icon?: string | (() => JSX.Element);
  feature?: string | (() => JSX.Element);
  featureProps?: any;
  children?: any;
}

export default function ProjectCard(props: ProjectCardProps) {
  const hasIcon = props.icon != null;
  const isIconJsxElement = typeof props.icon != "string";
  const hasFeature = props.feature != null;
  const isFeatureJsxElement = typeof props.feature != "string";
  const hasFeatureProps = props.featureProps != null;
  const hasGitHub = props.github != null;
  const hasLink = props.link != null;
  const hasDemo = props.demo != null;

  return (
    <div class={`card active-glow ${style["project-card"]}`}>
      <div class="card-bg"></div>
      {hasFeature ? (
        <div class={style["project-image-container"]}>
          {isFeatureJsxElement ? (
            hasFeatureProps ? (
              (props.feature as (props: any) => JSX.Element)(props.featureProps)
            ) : (
              (props.feature as () => JSX.Element)()
            )
          ) : (
            <img src={props.feature as string} />
          )}
        </div>
      ) : null}
      <div class={style["project-card-header"]}>
        {hasIcon ? (
          isIconJsxElement == true ? (
            (props.icon as () => JSX.Element)()
          ) : props.icon ? (
            <img src={props.icon as string} />
          ) : null
        ) : null}
        <h2>{props.name}</h2>
      </div>
      <div class={style["project-card-body"]}>
        <div class={style["project-card-body-description"]}>
          {props.children}
        </div>
        <div class={style["project-card-body-actions"]}>
          <div class={style["left"]}>
            {hasGitHub ? (
              <a href={props.github} target="_blank">
                <GitHubIcon />
              </a>
            ) : null}
          </div>
          <div class={style["right"]}>
            {hasLink ? <a href={props.link}>View Project Page</a> : null}
            {hasDemo ? (
              <a href={props.demo} target="_blank">
                View Demo
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
