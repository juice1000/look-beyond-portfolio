import React, { useEffect, useState } from "react";
import { useWindowSize } from "../hooks/useWindowSize";

const VoiceAgent = () => {
  const [expanded, setExpanded] = useState(false);
  const [clickCounter, setClickCounter] = useState(0);
  const { width } = useWindowSize();
  const isMobile = width < 768;
  const agentId = import.meta.env.VITE_ELEVENLABS_AGENT_ID;
  const WIDGET_SRC = "https://elevenlabs.io/convai-widget/index.js";

  const activateVoiceAgent = () => {
    if (isMobile && clickCounter < 1) {
      // if the user has clicked once, we want to expand the widget
      setExpanded(!expanded);
      setClickCounter((prev) => prev + 1);
    }
  };
  useEffect(() => {
    // if we've already injected the widget script, skip
    if (!document.querySelector(`script[src="${WIDGET_SRC}"]`)) {
      const script = document.createElement("script");
      script.src = WIDGET_SRC;
      script.async = true;
      document.body.appendChild(script);
    }
    // no cleanup—leave the script & element definition in place
  }, []);

  return (
    <elevenlabs-convai
      agent-id={agentId}
      action-text="Having a Tech Problem?"
      start-call-text="Ask our AI Agent"
      variant={isMobile && expanded ? "compact" : "default"}
      expandable="mobile"
      onClick={activateVoiceAgent}
    />
  );
};

export default VoiceAgent;
