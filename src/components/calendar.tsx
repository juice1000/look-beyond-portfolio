import { getCalApi } from "@calcom/embed-react";

import { useEffect } from "react";
import { useWindowSize } from "../hooks/useWindowSize";

const calendarButtonColor = "#2563eb";

export default function Calendar() {
  const { width } = useWindowSize();
  const isMobile = width < 768;

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });
      if (!isMobile) {
        cal("floatingButton", {
          calLink: "look-beyond/30min",
          config: {
            layout: "month_view",
            useSlotsViewOnSmallScreen: "true",
          },
          buttonColor: calendarButtonColor,
          buttonPosition: "bottom-left",
          buttonText: "Let's Chat!",
        });
      } else {
        const calElement = document.querySelector("cal-floating-button");
        calElement && document.body.removeChild(calElement);
      }

      cal("ui", {
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, [isMobile]);

  if (isMobile) {
    return (
      <button
        data-cal-namespace="30min"
        data-cal-link="look-beyond/30min"
        data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
        className="fixed bottom-[32px] left-4 z-50 flex h-[62px] items-center gap-3 rounded-full border border-[#3b82f6] bg-[#0b1426] px-6 py-4 text-[#dbeafe] shadow-[0_12px_32px_rgba(37,99,235,0.32)] transition-colors hover:bg-[#10203a] focus:ring-4 focus:ring-blue-400 focus:ring-opacity-50 active:scale-95"
      >
        <div className="flex items-center justify-center">
          <svg
            className="h-6 w-6"
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
        <span className="whitespace-nowrap text-sm font-semibold">
          Let's Chat!
        </span>
      </button>
    );
  }

  return null;
}
