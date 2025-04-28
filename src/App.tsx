import { Suspense } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Projects from "./components/projects";
import Contact from "./components/contact";
import routes from "tempo-routes";
import NotFound from "./pages/NotFound";
import Calendar from "./components/calendar";
import VoiceAgent from "./components/voiceagent";
import AIReadiness from "./components/AIReadiness";
import OurProcess from "./components/OurProcess";
import OurProjects from "./components/OurProjects";
import PricingEngagement from "./components/PricingEngagement";
import Workshops from "./components/Workshops";

function App() {
  return (
    <Suspense fallback={<span className="loader"></span>}>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/how-we-work" element={<Projects />} />
          <Route path="/how-we-work/ai-readiness" element={<AIReadiness />} />
          <Route path="/how-we-work/our-process" element={<OurProcess />} />
          <Route path="/how-we-work/our-projects" element={<OurProjects />} />
          <Route
            path="/how-we-work/pricing-engagement"
            element={<PricingEngagement />}
          />
          <Route path="/how-we-work/workshops" element={<Workshops />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
        <Calendar />
        <VoiceAgent />
      </>
    </Suspense>
  );
}

export default App;
