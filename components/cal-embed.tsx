"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    Cal?: any;
  }
}

export function CalEmbed() {
  useEffect(() => {
    // Cal.com embed script
    (function (C: any, A: string, L: string) {
      let p = function (a: any, ar: any) {
        a.q.push(ar);
      };
      let d = C.document;
      C.Cal =
        C.Cal ||
        function () {
          let cal = C.Cal;
          let ar = arguments;
          if (!cal.loaded) {
            cal.ns = {};
            cal.q = cal.q || [];
            d.head.appendChild(d.createElement("script")).src = A;
            cal.loaded = true;
          }
          if (ar[0] === L) {
            const api = function () {
              p(api, arguments);
            };
            const namespace = ar[1];
            (api as any).q = (api as any).q || [];
            if (typeof namespace === "string") {
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace], ar);
              p(cal, ["initNamespace", namespace]);
            } else p(cal, ar);
            return;
          }
          p(cal, ar);
        };
    })(window, "https://app.cal.com/embed/embed.js", "init");

    window.Cal?.("init", "democall", { origin: "https://app.cal.com" });
    window.Cal?.ns?.democall?.("ui", {
      hideEventTypeDetails: false,
      layout: "month_view",
    });
  }, []);

  return null;
}

// Cal.com button props to add to any button that should trigger the calendar
export const calButtonProps = {
  "data-cal-link": "paulo-dichone-9qa44c/democall",
  "data-cal-namespace": "democall",
  "data-cal-config": '{"layout":"month_view"}',
};
