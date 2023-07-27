import SimpleCard from "../../components/simple-card";
import CardContainer from "../../components/card-container";
import TechCard from "../../components/tech-card";
import TechList from "../../components/tech-list";
import TechListItem from "../../components/tech-list-item";
import Footer from "../../components/footer";

import style from "./style.module.scss";

import {
  CloudIcon,
  CopyIconMini,
  DataIcon,
  DevIcon,
  MobileIcon,
  ServerIcon,
  WebIcon,
} from "../../components/icons";

export function Home() {
  const copyToClipboardAsync = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <>
      <section class={style["landing"]}>
        <div class={style["landing-photo"]}>
          <img src="assets/user.png" alt="" />
        </div>
        <div class={style["landing-info"]}>
          <div class={style["landing-name"]}>
            <h1>Hi, I'm Lance Crisang.</h1>
            <div class={style["landing-aliases"]}>
              <span>Also known as:</span>
              <ul>
                <li>
                  <button onClick={() => copyToClipboardAsync("@xapier")}>
                    <CopyIconMini />
                    @xapier
                  </button>
                </li>
                <li>
                  <button onClick={() => copyToClipboardAsync("@xapier14")}>
                    <CopyIconMini />
                    @xapier14
                  </button>
                </li>
                <li>
                  <button onClick={() => copyToClipboardAsync("@lanceskiii")}>
                    <CopyIconMini />
                    @lanceskiii
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div class={style["landing-description"]}>
            <span>
              I'm a student and a software developer based in The Philippines.
            </span>
          </div>
        </div>
      </section>
      <section id="about" class={style["about"]}>
        <SimpleCard>
          <h1>About Me</h1>
          <p>
            I'm Lance Daniel Crisang, a Computer Science student studying at
            Batangas State University. I have a fascination with writing code
            and exploring new technologies. I consider myself to be a full-stack
            developer, but I'm more inclined to the backend side of things. I'm
            also interested in DevOps and Cloud Computing with preliminary
            experience with AWS, Azure, and GCP.
          </p>
        </SimpleCard>
      </section>
      <section id="tech" class={style["tech"]}>
        <h1>My Tech Stack</h1>
        <CardContainer class="tech-card-container">
          <TechCard icon={WebIcon} name="Frontend">
            <TechList>
              <TechListItem>HTML5</TechListItem>
              <TechListItem>CSS3</TechListItem>
              <TechListItem>SASS/SCSS</TechListItem>
              <TechListItem>React</TechListItem>
              <TechListItem>Preact</TechListItem>
              <TechListItem>Angular</TechListItem>
            </TechList>
          </TechCard>
          <TechCard name="Backend" icon={ServerIcon}>
            <TechList singleColumn={true}>
              <TechListItem>Firebase</TechListItem>
              <TechListItem>Express.JS</TechListItem>
              <TechListItem>ASP.NET Core</TechListItem>
            </TechList>
          </TechCard>
          <TechCard name="Database" icon={DataIcon}>
            <TechList>
              <TechListItem>PostgreSQL</TechListItem>
              <TechListItem>MongoDB</TechListItem>
              <TechListItem>SQLite</TechListItem>
              <TechListItem>SQL Server</TechListItem>
            </TechList>
          </TechCard>
          <TechCard name="Mobile" icon={MobileIcon}>
            <TechList singleColumn={true}>
              <TechListItem>React Native</TechListItem>
              <TechListItem>Flutter</TechListItem>
              <TechListItem>Ionic</TechListItem>
            </TechList>
          </TechCard>
          <TechCard name="DevOps" icon={DevIcon}>
            <TechList singleColumn={true}>
              <TechListItem>Git</TechListItem>
              <TechListItem>Docker</TechListItem>
              <TechListItem>GitHub Actions</TechListItem>
            </TechList>
          </TechCard>
          <TechCard name="Cloud" icon={CloudIcon}>
            <TechList singleColumn={true}>
              <TechListItem>Amazon Web Services</TechListItem>
              <TechListItem>Microsoft Azure</TechListItem>
              <TechListItem>Google Cloud Platform</TechListItem>
            </TechList>
          </TechCard>
        </CardContainer>
      </section>
      <Footer />
    </>
  );
}

export default Home;
