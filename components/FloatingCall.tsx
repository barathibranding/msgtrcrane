import { Phone } from "lucide-react";
import { site } from "@/lib/site";

export default function FloatingCall() {
  return (
    <a
      href={site.phonePrimaryHref}
      aria-label="Call us now"
      className="fixed bottom-5 left-5 z-40 inline-flex items-center gap-2 rounded-full bg-brand-500 px-5 py-3.5 font-semibold text-ink-100 shadow-xl shadow-brand-500/30 transition hover:bg-brand-400 sm:hidden"
    >
      <Phone className="h-5 w-5" />
      Call
    </a>
  );
}
