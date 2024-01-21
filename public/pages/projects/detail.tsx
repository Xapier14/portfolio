import styles from "./detail.module.scss";

const ProjectsDetail = ({ id }) => (
  <section class={styles.projects}>
    <h1>Projects</h1>
    <pre>{id}</pre>
  </section>
);

export default ProjectsDetail;
