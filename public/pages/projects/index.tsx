import styles from "./index.module.scss";
import titleStyles from "./title-path.module.scss";

import { projects, getIcon } from "../../data/projects";
import { platformTags, technologyTags } from "../../data/tags";
import ProjectCard from "../../components/project-card";
import CardContainer from "../../components/card-container";
import ChipContainer from "../../components/chip-container";
import Chip from "../../components/chip";
import SimpleCard from "../../components/simple-card";
import { useEffect, useState } from "preact/hooks";
import { DownIcon } from "../../components/icons";
import DropDown from "../../components/drop-down";
import { UpIcon } from "../../components/icons/UpIcon";

const projectDataItems = projects.map((project) => {
  const icon = getIcon(project.type);

  return (
    <ProjectCard
      key={project.id}
      name={project.name}
      icon={icon}
      feature={project.feature}
      isClickable={true}
      clickRoute={`/projects/${project.id}`}
      isThin={true}
    ></ProjectCard>
  );
});

const Projects = () => {
  const [activePlatformTags, setActivePlatformTags] = useState<string[]>([]);
  const [activeTechnologyTags, setActiveTechnologyTags] = useState<string[]>(
    []
  );
  const [shownProjects, setShownProjects] = useState(projects);
  const [showPlatforms, setShowPlatforms] = useState(false);
  const [showTechnologies, setShowTechnologies] = useState(false);

  const updateShownProjects = (
    aPlatformTags: string[] | undefined,
    aTechnologyTags: string[] | undefined
  ) => {
    console.log("Platform tags: " + aPlatformTags);
    console.log("Technology tags: " + aTechnologyTags);
    const newShownProjects = projects.filter((project) => {
      if (aPlatformTags.length > 0) {
        if (project.type != aPlatformTags[0]) {
          return false;
        }
      }
      if (aTechnologyTags.length > 0) {
        if (
          !aTechnologyTags.some((tag) => project.technologies.includes(tag))
        ) {
          return false;
        }
      }
      return true;
    });
    console.log(newShownProjects);
    setShownProjects(newShownProjects);
  };

  return (
    <section class={styles.projects}>
      <div class={titleStyles["title-header"]}>
        <div class={titleStyles["route-path-container"]}>
          <span>
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
          </span>
        </div>
        <SimpleCard class={styles["filter-card"]}>
          <span class={styles["filter-card-title"]}>Filter By:</span>
          <div
            class={`${styles["filter-container"]} ${styles["filter-platform"]}`}
          >
            <button
              class={`${styles["filter-collapsible"]}`}
              onClick={() => {
                setShowPlatforms(!showPlatforms);
              }}
            >
              <span>Platform</span>
              {showPlatforms ? (
                <>
                  <UpIcon class={styles["filter-close"]} />
                </>
              ) : (
                <>
                  <DownIcon />
                </>
              )}
            </button>
            <ChipContainer
              class={`${styles["filter-chips"]} ${
                showPlatforms ? styles["filter-chips-visible"] : ""
              }`}
              chips={platformTags}
              singleSelect={true}
              onChipChange={(newTags) => {
                console.log("New platform tags: " + newTags.length);
                setActivePlatformTags(newTags);
                updateShownProjects(newTags, activeTechnologyTags);
              }}
            />
          </div>
          <div
            class={`${styles["filter-container"]} ${styles["filter-technology"]}`}
          >
            <button
              class={styles["filter-collapsible"]}
              onClick={() => {
                setShowTechnologies(!showTechnologies);
              }}
            >
              <span>Technology</span>
              {showTechnologies ? (
                <>
                  <UpIcon class={styles["filter-close"]} />
                </>
              ) : (
                <>
                  <DownIcon />
                </>
              )}
            </button>
            <ChipContainer
              class={`${styles["filter-chips"]} ${
                showTechnologies ? styles["filter-chips-visible"] : ""
              }`}
              chips={technologyTags}
              onChipChange={(newTags) => {
                console.log("New technology tags: " + newTags.length);
                setActiveTechnologyTags(newTags);
                updateShownProjects(activePlatformTags, newTags);
              }}
            />
          </div>
        </SimpleCard>
      </div>
      <CardContainer
        grid={shownProjects.length > 0 ? "2" : undefined}
        class={styles["projects-container"]}
      >
        {shownProjects.length > 0 ? (
          shownProjects.map((project) => {
            const icon = getIcon(project.type);
            return (
              <ProjectCard
                key={project.id}
                name={project.name}
                icon={icon}
                feature={project.feature}
                isClickable={true}
                clickRoute={`/projects/${project.id}`}
                isThin={true}
              >
                <ChipContainer
                  class={styles["project-chip-container"]}
                  noSelect={true}
                  chips={project.technologies.map((tech) => {
                    {
                      return {
                        label: technologyTags.find((t) => t.value == tech)
                          .label,
                        value: tech,
                      };
                    }
                  })}
                />
              </ProjectCard>
            );
          })
        ) : (
          <span>No projects found.</span>
        )}
      </CardContainer>
    </section>
  );
};

export default Projects;
