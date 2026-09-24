import Image from "next/image";
import Link from "next/link";
import { Phone, ArrowRight, ShieldCheck } from "lucide-react";
import { site } from "@/lib/site";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-ink-950">
      <Image
        src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=2000&q=80"
        alt="Crane lifting on a construction site in Abu Dhabi"
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/85 to-ink-950/40" />

      <div className="container-x relative py-24 sm:py-32 lg:py-40">
        <div className="max-w-3xl animate-fade-up">
          <span className="eyebrow-light">
            <ShieldCheck className="h-4 w-4" />
            Established {site.established} • Abu Dhabi, UAE
          </span>

          <h1 className="mt-5 text-4xl leading-[1.05] text-white sm:text-5xl lg:text-6xl">
            Heavy Lifting &amp; Transport
            <span className="block text-brand-400">You Can Rely On.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-200">
            Crane rental, heavy equipment transport, vehicle recovery and
            general transport across Abu Dhabi and the UAE — backed by oil field
            and Command of Military Works experience.
          </p>

          <p className="mt-4 font-display text-lg font-semibold uppercase tracking-wider text-brand-400">
            &ldquo;{site.tagline}&rdquo;
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact" className="btn-primary">
              Request a Quote
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a href={site.phonePrimaryHref} className="btn-outline">
              <Phone className="h-4 w-4" />
              {site.phonePrimary}
            </a>
          </div>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="relative border-t border-white/10 bg-ink-950/80 backdrop-blur">
        <div className="container-x grid grid-cols-2 gap-6 py-6 text-center lg:grid-cols-4">
          {[
            "25 – 500 Ton Cranes",
            "Lowbed & Flatbed Trailers",
            "24/7 Recovery Service",
            "Certified Operators",
          ].map((item) => (
            <p
              key={item}
              className="font-display text-sm font-semibold uppercase tracking-wider text-ink-200"
            >
              {item}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
