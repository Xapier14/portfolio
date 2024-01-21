import SimpleCard from "../../components/simple-card";
import CardContainer from "../../components/card-container";
import ShowcaseCard from "../../components/showcase-card";
import TechList from "../../components/tech-list";
import TechListItem from "../../components/tech-list-item";
import ProjectCard from "../../components/project-card";
import Footer from "../../components/footer";

import style from "./style.module.scss";

import { projects, getIcon } from "../../data/projects";

import {
  CloudIcon,
  CopyIconMini,
  DataIcon,
  DevIcon,
  MobileIcon,
  ServerIcon,
  WebIcon,
} from "../../components/icons";
import FancySideNav from "../../components/fancy-sidenav";
export function Home() {
  const copyToClipboardAsync = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  // get latest 3 projects
  const projectDataItems = projects.copyWithin(3, 0).map((project) => {
    const icon = getIcon(project.type);
    return (
      <ProjectCard
        key={project.id}
        name={project.name}
        icon={icon}
        infoLink={`projects/${project.id}`}
        feature={project.feature}
        github={project.github}
        demo={project.demo}
      ></ProjectCard>
    );
  });

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
        <FancySideNav />
      </section>
      <section id="about" class={style["about"]}>
        <h1>My Services</h1>
        <CardContainer grid="2">
          <ShowcaseCard name="Full-Stack Development">
            <p>
              I build web applications running on the cloud for a variety of use
              cases. Responsive and mobile-friendly, these applications can run
              on a variety of devices of different sizes. From e-commerce,
              dashboards, and other web applications, I can build them for you.
            </p>
          </ShowcaseCard>
          <ShowcaseCard name="Static Websites">
            <p>
              I can build portfolio websites, showcase websites, and other
              static websites for your personal or business needs. Suitable for
              landing pages, blogs, portfolios such as photography, and more.
            </p>
          </ShowcaseCard>
          <ShowcaseCard name="Desktop Applications">
            <p>
              I build custom desktop applications ranging from Point-of-Sales
              systems to personal tools. I can integrate third-party APIs and
              services to your application to make it more powerful and useful
              depending on your needs.
            </p>
          </ShowcaseCard>
        </CardContainer>
        {/* <SimpleCard>
          <p>
            I'm Lance Daniel Crisang, a Computer Science student studying at
            Batangas State University. I have a fascination with writing code
            and exploring new technologies. I consider myself to be a full-stack
            developer, but I'm more inclined to the backend side of things. I'm
            also interested in DevOps and Cloud Computing with preliminary
            experience with AWS, Azure, and GCP.
          </p>
        </SimpleCard> */}
      </section>
      <section id="tech" class={style["tech"]}>
        <h1>My Tech Stack</h1>
        <CardContainer class="grid-list-container">
          <ShowcaseCard icon={WebIcon} name="Frontend">
            <TechList>
              <TechListItem>HTML5</TechListItem>
              <TechListItem>CSS3</TechListItem>
              <TechListItem>SASS/SCSS</TechListItem>
              <TechListItem>React</TechListItem>
              <TechListItem>Preact</TechListItem>
              <TechListItem>Angular</TechListItem>
            </TechList>
          </ShowcaseCard>
          <ShowcaseCard name="Backend" icon={ServerIcon}>
            <TechList singleColumn={true}>
              <TechListItem>Firebase</TechListItem>
              <TechListItem>Express.JS</TechListItem>
              <TechListItem>ASP.NET Core</TechListItem>
            </TechList>
          </ShowcaseCard>
          <ShowcaseCard name="Database" icon={DataIcon}>
            <TechList>
              <TechListItem>PostgreSQL</TechListItem>
              <TechListItem>MongoDB</TechListItem>
              <TechListItem>SQLite</TechListItem>
              <TechListItem>SQL Server</TechListItem>
            </TechList>
          </ShowcaseCard>
          <ShowcaseCard name="Mobile" icon={MobileIcon}>
            <TechList singleColumn={true}>
              <TechListItem>React Native</TechListItem>
              <TechListItem>Flutter</TechListItem>
              <TechListItem>Ionic</TechListItem>
            </TechList>
          </ShowcaseCard>
          <ShowcaseCard name="DevOps" icon={DevIcon}>
            <TechList singleColumn={true}>
              <TechListItem>Git</TechListItem>
              <TechListItem>Docker</TechListItem>
              <TechListItem>GitHub Actions</TechListItem>
            </TechList>
          </ShowcaseCard>
          <ShowcaseCard name="Cloud" icon={CloudIcon}>
            <TechList singleColumn={true}>
              <TechListItem>Amazon Web Services</TechListItem>
              <TechListItem>Microsoft Azure</TechListItem>
              <TechListItem>Google Cloud Platform</TechListItem>
            </TechList>
          </ShowcaseCard>
        </CardContainer>
      </section>
      <section id="projects" class={style["projects"]}>
        <h1>My Recent Projects</h1>
        <CardContainer grid="1">{projectDataItems}</CardContainer>
      </section>
      <Footer />
    </>
  );
}

export default Home;
