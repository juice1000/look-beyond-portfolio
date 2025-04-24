import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Projects from "./components/projects";
import Contact from "./components/contact";
// import routes from "tempo-routes";
import NotFound from "./pages/NotFound";
import Calendar from "./components/calendar";
import VoiceAgent from "./components/voiceagent";

function App() {
  return (
    <Suspense fallback={<span className="loader"></span>}>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)} */}
        <Calendar />
        <VoiceAgent />
      </>
    </Suspense>
  );
}

export default App;
