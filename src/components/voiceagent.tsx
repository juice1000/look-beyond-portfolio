import React, { useEffect } from "react";

const VoiceAgent = () => {
  const agentId = import.meta.env.VITE_ELEVENLABS_AGENT_ID;
  const WIDGET_SRC = "https://elevenlabs.io/convai-widget/index.js";

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
    />
  );
};

export default VoiceAgent;
