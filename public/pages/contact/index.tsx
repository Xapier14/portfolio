import styles from "./index.module.scss";
import ShowcaseCard from "../../components/showcase-card";

const emailAddress = "lance@xapier.me";

const Contact = () => {
  return (
    <>
      <section class={styles.contact}>
        <div class={styles.container}>
          <ShowcaseCard name="Contact" class={styles["contact-card"]}>
            <p>
              This page is under construction.
              <br />
              Feel free to reach out to me via{" "}
              <a href="https://www.linkedin.com/in/lancecrisang/">LinkedIn</a>.
            </p>
          </ShowcaseCard>
        </div>
      </section>
    </>
  );
};

export default Contact;
