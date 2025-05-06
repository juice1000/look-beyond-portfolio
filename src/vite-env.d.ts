/// <reference types="vite/client" />

declare namespace JSX {
  interface IntrinsicElements {
    "elevenlabs-convai": {
      "agent-id"?: string;
      "action-text"?: string;
      "start-call-text"?: string;
      variant?: string;
      onClick: () => void;
      expandable?: string;
      "data-voice-id"?: string;
    };
  }
}
