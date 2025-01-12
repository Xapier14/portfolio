import titleStyles from "./title-path.module.scss";
import styles from "./detail.module.scss";
import { projects, getIcon, Project } from "../../data/projects";
import { useState } from "preact/hooks";
import { GitHubIcon } from "../../components/icons";

export function ProjectsDetail(query: any) {
  const id = query.id;
  const project = projects.find((p) => p.id === id);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <section class={titleStyles.projects}>
      <div class={titleStyles["title-header"]}>
        <div class={titleStyles["route-path-container"]}>
          <a href={"/projects"}>
            <div class={titleStyles["accent"]}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 6.878V6a2.25 2.25 0 0 1 2.25-2.25h7.5A2.25 2.25 0 0 1 18 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 0 0 4.5 9v.878m13.5-3A2.25 2.25 0 0 1 19.5 9v.878m0 0a2.246 2.246 0 0 0-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0 1 21 12v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6c0-.98.626-1.813 1.5-2.122"
                />
              </svg>
            </div>
            Projects
          </a>
          <span>/</span>
          <span>{project.name}</span>
        </div>
      </div>
      <div class={styles["gallery-container"]}>
        {/* Gallery */}
        <div class={`card active-glow ${styles["gallery-main-image"]}`}>
          {project.screenshots.length === 0 && (
            <div class={styles["gallery-image"]}>
              <span>No screenshot available.</span>
            </div>
          )}
          {project.screenshots.length !== 0 && (
            <img
              class={styles["gallery-image"]}
              src={project.screenshots[currentImageIndex]}
            />
          )}
          <div class="card-bg" />
        </div>
        <div style="overflow: auto;">
          {project.screenshots.length !== 0 && (
            <div class={styles["gallery-thumbnails"]}>
              {project.screenshots?.map((image, index) => (
                <button
                  type="button"
                  class={`card active-glow ${styles["gallery-thumbnail"]} ${
                    currentImageIndex === index
                      ? styles["gallery-thumbnail-active"]
                      : ""
                  }`}
                  onClick={() => setCurrentImageIndex(index)}
                >
                  <img
                    style="object-fit: cover;"
                    class={styles["gallery-image"]}
                    src={image}
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
      <div class={`card active-glow ${styles["header-container"]}`}>
        <div class="card-bg" />
        <div class={styles["actions"]}>
          <div class={styles["left"]}>
            {project.github !== undefined ? (
              <a href={project.github} target="_blank">
                <GitHubIcon />
              </a>
            ) : null}
          </div>
          <div class={styles["right"]}>
            {project.demo !== undefined ? (
              <a href={project.demo} target="_blank">
                View Demo
              </a>
            ) : null}
          </div>
        </div>
        <span>{project.name}</span>
      </div>
      <div class={`card active-glow ${styles["description-container"]}`}>
        <div class="card-bg" />
        {/* Description */}
        <p class={styles.description}>
          {project.description ?? "No description available."}
        </p>
      </div>
    </section>
  );
}

export default ProjectsDetail;
