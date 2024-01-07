import {
  LocationProvider,
  Router,
  Route,
  lazy,
  ErrorBoundary,
  hydrate,
  prerender as ssr,
} from "preact-iso";

import { GlowDropController } from "./components/glowdrop/index.tsx";
import { NavBar } from "./components/navbar/index.tsx";

import Home from "./pages/home/index.tsx";
import NotFound from "./pages/_404.tsx";
import { CardGlowController } from "./components/card-glow-controller/index.tsx";

const Projects = lazy(() => import("./pages/projects/index.tsx"));
const ProjectsDetail = lazy(() => import("./pages/projects/detail.tsx"));
const Contact = lazy(() => import("./pages/contact/index.tsx"));

export function App() {
  return (
    <LocationProvider>
      <CardGlowController />
      <GlowDropController numberOfGlobsForMobile={0} />
      <NavBar />
      <div id="content">
        <ErrorBoundary>
          <Router>
            <Route path="/" component={Home} />
            <Route path="/projects" component={Projects} />
            <Route path="/projects/:id" component={ProjectsDetail} />
            <Route path="/contact" component={Contact} />
            <Route default component={NotFound} />
          </Router>
        </ErrorBoundary>
      </div>
    </LocationProvider>
  );
}

hydrate(<App />);

export async function prerender(data) {
  return await ssr(<App {...data} />);
}
