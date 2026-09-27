// "use client";

// import { useEffect } from "react";
// import { Crisp } from "crisp-sdk-web";

// const CRISP_WEBSITE_ID = "bea2b178-8316-47df-a0bc-c94b46ca5d26";

// export default function CrispChat() {
//   useEffect(() => {
//     Crisp.configure(CRISP_WEBSITE_ID);

//     // Optional: hide the default Crisp bubble on mobile if you want
//     // to use your own FloatingCall button instead.
//     // Crisp.chat.hide();
//   }, []);

//   return null;
// }

"use client";

import { useEffect, useState } from "react";
import { Crisp } from "crisp-sdk-web";
import { MessageCircle, X } from "lucide-react";

const CRISP_WEBSITE_ID = "bea2b178-8316-47df-a0bc-c94b46ca5d26";
const DISMISS_KEY = "crisp-teaser-dismissed";

export default function CrispChat() {
  const [mounted, setMounted] = useState(false);
  const [showLabel, setShowLabel] = useState(false);

  // 1. Configure Crisp (client only)
  useEffect(() => {
    setMounted(true);
    Crisp.configure(CRISP_WEBSITE_ID);

    // Hide our teaser whenever the chat is opened (from any trigger)
    Crisp.chat.onChatOpened(() => {
      setShowLabel(false);
      localStorage.setItem(DISMISS_KEY, String(Date.now()));
    });
  }, []);

  // 2. Show the teaser with timing + respect prior dismissals
  useEffect(() => {
    if (!mounted) return;

    // Respect dismissal for 24 hours
    const stored = localStorage.getItem(DISMISS_KEY);
    if (stored) {
      const hoursSince = (Date.now() - parseInt(stored, 10)) / 36e5;
      if (hoursSince < 24) return;
    }

    const showTimer = setTimeout(() => setShowLabel(true), 3000);
    const hideTimer = setTimeout(() => {
      setShowLabel(false);
    }, 18000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, [mounted]);

  const openChat = () => {
    Crisp.chat.open();
    setShowLabel(false);
    localStorage.setItem(DISMISS_KEY, String(Date.now()));
  };

  const dismiss = (e: React.MouseEvent | React.KeyboardEvent) => {
    e.stopPropagation();
    setShowLabel(false);
    localStorage.setItem(DISMISS_KEY, String(Date.now()));
  };

  if (!mounted) return null;

  return (
    <div
      className={`fixed bottom-[92px] right-4 z-40 w-[220px] transition-all duration-500 ease-out sm:right-5 sm:w-[260px] ${
        showLabel
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0"
      }`}
      aria-hidden={!showLabel}
    >
      <button
        type="button"
        onClick={openChat}
        aria-label="Open live chat"
        className="group relative block w-full rounded-2xl rounded-br-md bg-white p-4 text-left shadow-[0_10px_40px_-8px_rgba(7,12,22,0.35)] ring-1 ring-ink-100 transition hover:-translate-y-0.5 hover:shadow-[0_14px_44px_-8px_rgba(7,12,22,0.45)]"
      >
        <div className="flex items-start gap-3">
          {/* Brand avatar with online pulse */}
          <span className="relative mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-full bg-brand-500 text-ink-900">
            <MessageCircle className="h-4 w-4" />
            <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-white bg-green-500" />
          </span>

          <div className="min-w-0 flex-1 pr-4">
            <p className="font-display text-[13px] font-bold uppercase tracking-wide text-ink-900">
              Try Live Chat
            </p>
            <p className="mt-0.5 text-[11px] leading-snug text-ink-500">
              Need a crane quote? We reply in minutes.
            </p>
          </div>
        </div>

        {/* Dismiss button */}
        <span
          role="button"
          tabIndex={0}
          onClick={dismiss}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") dismiss(e);
          }}
          aria-label="Dismiss message"
          className="absolute right-1.5 top-1.5 grid h-5 w-5 place-items-center rounded-full text-ink-300 transition hover:bg-ink-100 hover:text-ink-600"
        >
          <X className="h-3 w-3" />
        </span>

        {/* Tail pointing down toward the Crisp icon */}
        <span
          aria-hidden="true"
          className="absolute -bottom-[7px] right-6 h-3.5 w-3.5 rotate-45 rounded-[2px] bg-white ring-1 ring-ink-100"
          style={{ clipPath: "polygon(100% 0, 100% 100%, 0 100%)" }}
        />
      </button>
    </div>
  );
}
