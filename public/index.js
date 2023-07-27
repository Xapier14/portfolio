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

const About = lazy(() => import("./pages/about/index.tsx"));

export function App() {
  return (
    <LocationProvider>
      <CardGlowController />
      <GlowDropController />
      <NavBar />
      <div id="content">
        <ErrorBoundary>
          <Router>
            <Home path="/" />
            {/* <Projects path="/projects" /> */}
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
