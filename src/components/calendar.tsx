// npm install @calcom/embed-react

import { getCalApi } from "@calcom/embed-react";

import { useEffect, useState } from "react";
import { useWindowSize } from "../hooks/useWindowSize";

export default function Calendar() {
  const { width } = useWindowSize();
  const isMobile = width < 768;
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });
      if (!isMobile) {
        cal("floatingButton", {
          calLink: "look-beyond/30min",
          config: { layout: "month_view" },
          buttonText: "Let's Chat!",
          buttonPosition: "bottom-left",
        });
      } else {
        const calElement = document.querySelector("cal-floating-button");
        calElement && document.body.removeChild(calElement);
      }

      cal("ui", { hideEventTypeDetails: isMobile, layout: "month_view" });
    })();
  }, [width]);

  if (isMobile) {
    return (
      <button
        data-cal-namespace="30min"
        data-cal-link="look-beyond/30min"
        data-cal-config='{"layout":"month_view"}'
        className="fixed z-50 bottom-[32px] left-4 flex h-[62px] items-center 
            rounded-full bg-black px-6 py-4
            focus:ring-4 focus:ring-gray-600 focus:ring-opacity-50 
            active:scale-95"
      >
        <div className="flex items-center justify-center">
          <svg
            className="h-7 w-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </div>
      </button>
    );
  }
  return <></>;
}
