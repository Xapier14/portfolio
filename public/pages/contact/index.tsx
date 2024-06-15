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
              Do you have a project in mind? Or do you just want to say hi?
              <br/>
              Feel free to leave a message below or send me an email at   <a href={`mailto:${emailAddress}`}>{emailAddress}</a>.
            </p>
          </ShowcaseCard>
        </div>
      </section>
    </>
  );
};

export default Contact;
