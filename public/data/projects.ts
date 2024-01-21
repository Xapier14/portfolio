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
  seeAlso?: string[];
  dateAddedUtc?: string;
  technologies?: string[];
}

const projects = (projectsDataSource as unknown as Project[]).sort((p1, p2) => {
  return Date.parse(p2.dateAddedUtc) - Date.parse(p1.dateAddedUtc);
});
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
