import { getCalApi } from "@calcom/embed-react";

import { useEffect } from "react";
import { useWindowSize } from "../hooks/useWindowSize";

type CalendarProps = {
  isDarkMode: boolean;
};

const calendarButtonColor = {
  dark: "#2563eb",
  light: "#1d4ed8",
};

export default function Calendar({ isDarkMode }: CalendarProps) {
  const { width } = useWindowSize();
  const isMobile = width < 768;

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });
      document.querySelector("cal-floating-button")?.remove();

      if (!isMobile) {
        cal("floatingButton", {
          calLink: "look-beyond/30min",
          config: {
            layout: "month_view",
            useSlotsViewOnSmallScreen: "true",
          },
          buttonColor: isDarkMode
            ? calendarButtonColor.dark
            : calendarButtonColor.light,
          buttonPosition: "bottom-left",
          buttonText: "Let's Chat!",
        });
      }

      cal("ui", {
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, [isDarkMode, isMobile]);

  if (isMobile) {
    return (
      <button
        data-cal-namespace="30min"
        data-cal-link="look-beyond/30min"
        data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
        className="fixed bottom-[32px] left-4 z-50 flex h-[62px] items-center gap-3 rounded-full border border-blue-600 bg-white px-6 py-4 text-blue-900 shadow-[0_12px_32px_rgba(37,99,235,0.18)] transition-colors hover:bg-blue-50 focus:ring-4 focus:ring-blue-400 focus:ring-opacity-50 active:scale-95 dark:border-[#3b82f6] dark:bg-[#0b1426] dark:text-[#dbeafe] dark:shadow-[0_12px_32px_rgba(37,99,235,0.32)] dark:hover:bg-[#10203a]"
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
