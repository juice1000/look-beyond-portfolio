import React from "react";
import { Language } from "../lib/i18n";
import { getLandingPageContent } from "../data/landingPage";
import { AuroraBackground } from "./Home/HeroSection";
import StorySlideshow from "./StorySlideshow";
import PracticeVisual from "./PracticeVisuals";
import { getPracticeStory, PracticeVisualId } from "../data/practiceStory";

const Practice = ({ language }: { language: Language }) => {
  const content = getLandingPageContent(language);
  const story = getPracticeStory(language, content);

  return (
    <div className="min-h-screen bg-transparent dark:bg-[#060b18] text-[#0f1e35] dark:text-slate-100">
      <div className="fixed inset-0 -z-10 dark:hidden">
        <AuroraBackground isDarkMode={false} />
      </div>
      <main className="pt-20">
        <StorySlideshow
          acts={story.acts}
          slides={story.slides}
          labels={story.labels}
          renderVisual={(id) => (
            <PracticeVisual
              id={id as PracticeVisualId}
              language={language}
              content={content}
            />
          )}
        />
      </main>
    </div>
  );
};

export default Practice;
