import React, { useEffect } from "react";

const VoiceAgentSection = () => {
  const agentId = import.meta.env.VITE_ELEVENLABS_AGENT_ID;
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://elevenlabs.io/convai-widget/index.js";
    script.async = true;
    script.type = "text/javascript";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <>
      <elevenlabs-convai
        agent-id={agentId}
        action-text="Having a Tech Problem?"
        start-call-text="Ask our AI Agent"
      ></elevenlabs-convai>
    </>
  );
};
export default VoiceAgentSection;
