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
            <form>
              <div class="form-group">
                <label for="name">Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div class="form-group">
                <label for="subject">Subject</label>
                <input type="text" id="subject" name="subject" required />
              </div>
              <div class="form-group">
                <label for="message">Message</label>
                <textarea id="message" name="message" required></textarea>
              </div>
              <div class="form-group">
                <button type="submit">Send</button>
              </div>
            </form>
          </ShowcaseCard>
        </div>
      </section>
    </>
  );
};

export default Contact;
