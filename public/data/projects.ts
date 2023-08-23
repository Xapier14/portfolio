import { JSXInternal } from "preact/src/jsx";
import projectsDataSource from "./projects.json";

import {
  CloudIcon,
  CopyIconMini,
  DataIcon,
  DevIcon,
  MobileIcon,
  ServerIcon,
  WebIcon,
} from "../components/icons";

interface Project {
  name: string;
  id: string;
  type: "web" | "mobile" | "desktop" | "cloud";
  feature: string;
  description?: string;
  demo?: string;
  github?: string;
  screenshots?: string[];
<<<<<<< HEAD
  seeAlso?: string[];
  technologies?: string[];
=======
>>>>>>> 97063cc2a61ce0cd1c2d61656bb8e821d966f3ab
}

const projects = projectsDataSource as unknown as Project[];
function getIcon(icon: string): () => JSXInternal.Element | null {
  switch (icon) {
    case "web":
      return WebIcon;
    case "mobile":
      return MobileIcon;
    case "desktop":
      return DevIcon;
    case "cloud":
      return CloudIcon;
    default:
      return null;
  }
}

export { projects, getIcon };
