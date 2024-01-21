import styles from "./index.module.scss";

import { projects, getIcon } from "../../data/projects";
import ProjectCard from "../../components/project-card";
import CardContainer from "../../components/card-container";

const projectDataItems = projects.map((project) => {
  const icon = getIcon(project.type);
  return (
    <ProjectCard
      key={project.id}
      name={project.name}
      icon={icon}
      feature={project.feature}
      isClickable={true}
      isThin={true}
    >
      description
    </ProjectCard>
  );
});

const Projects = () => (
  <section class={styles.projects}>
    <h1>Projects List</h1>
    <CardContainer grid="2">{projectDataItems}</CardContainer>
  </section>
);

export default Projects;
