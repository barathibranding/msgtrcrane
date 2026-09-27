"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, ArrowRight, ShieldCheck } from "lucide-react";
import { site } from "@/lib/site";

const slides = [
  {
    src: "/assets/cranes/crane1.jpg",
    alt: "Mobile crane lifting on a construction site",
    tag: "75 – 700 Ton Mobile Cranes",
  },
  {
    src: "/assets/crane1.png",
    alt: "Heavy crane on an industrial site in Abu Dhabi",
    tag: "Heavy Equipment Rental",
  },
  {
    src: "/assets/cranes/crane3.jpg",
    alt: "Tipper trucks ready for material transport",
    tag: "Tipper & Dumper Trucks",
  },
  {
    src: "/assets/truck.jpg",
    alt: "Lowbed trailer transporting heavy machinery",
    tag: "Low Bed & Trailer Transport",
  },
  {
    src: "/assets/wheelloaders.jpg",
    alt: "Recovery truck for 24/7 vehicle recovery",
    tag: "24/7 Vehicle Recovery",
  },
];

const ROTATE_MS = 5000; // 5 seconds per slide

export default function Hero() {
  const [current, setCurrent] = useState(0);

  // Auto-rotate
  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, ROTATE_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative isolate overflow-hidden bg-ink-950">
      {/* Background image slider */}
      <div className="absolute inset-0">
        {slides.map((slide, i) => (
          <div
            key={slide.src}
            className={`absolute inset-0 transition-opacity duration-[1200ms] ease-in-out ${
              i === current ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden={i !== current}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={i === 0}
              sizes="100vw"
              className={`object-cover transition-transform duration-[7000ms] ease-out ${
                i === current ? "scale-110" : "scale-100"
              }`}
            />
          </div>
        ))}
        {/* Dark gradient overlay for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/85 to-ink-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="container-x relative py-20 sm:py-28 lg:py-40">
        <div className="max-w-3xl animate-fade-up">
          <span className="eyebrow-light">
            <ShieldCheck className="h-4 w-4" />
            Established {site.established} • Abu Dhabi, UAE
          </span>

          <h1 className="mt-5 text-3xl leading-[1.08] text-white sm:text-5xl lg:text-6xl">
            Heavy Lifting &amp; Transport
            <span className="block text-brand-400">You Can Rely On.</span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-200 sm:mt-6 sm:text-lg">
            Crane rental, heavy equipment transport, vehicle recovery and
            general transport across Abu Dhabi and the UAE — backed by oil field
            and Command of Military Works experience.
          </p>

          <p className="mt-4 font-display text-base font-semibold uppercase tracking-wider text-brand-400 sm:text-lg">
            &ldquo;{site.tagline}&rdquo;
          </p>

          {/* Rotating tag showing current slide topic */}
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-500" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-ink-100 sm:text-sm">
              {slides[current].tag}
            </span>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row">
            <Link
              href="/contact"
              className="btn-primary w-full sm:w-auto text-ink-100 "
            >
              Request a Quote
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={site.phonePrimaryHref}
              className="btn-outline w-full sm:w-auto"
            >
              <Phone className="h-4 w-4" />
              <span className="hidden xs:inline">{site.phonePrimary}</span>
              <span className="xs:hidden">Call Now</span>
            </a>
          </div>
        </div>
      </div>

      {/* Slide indicators (dots) — top right on desktop, centered under content on mobile */}
      <div className="absolute right-5 top-1/2 hidden -translate-y-1/2 flex-col gap-2.5 lg:flex">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              i === current
                ? "h-8 bg-brand-500"
                : "w-2.5 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

      {/* Progress bar for current slide */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/10">
        <div
          key={current}
          className="h-full bg-brand-500"
          style={{
            animation: `progress ${ROTATE_MS}ms linear forwards`,
          }}
        />
      </div>

      {/* Bottom info strip */}
      <div className="relative border-t border-white/10 bg-ink-950/85 backdrop-blur">
        <div className="container-x grid grid-cols-2 gap-4 py-5 text-center sm:gap-6 sm:py-6 lg:grid-cols-4">
          {[
            "75 – 700 Ton Cranes",
            "Lowbed & Flatbed Trailers",
            "24/7 Recovery Service",
            "Certified Operators",
          ].map((item) => (
            <p
              key={item}
              className="font-display text-[11px] font-semibold uppercase tracking-wider text-ink-200 sm:text-sm"
            >
              {item}
            </p>
          ))}
        </div>
      </div>

      {/* Mobile slide dots — visible only on small screens */}
      <div className="absolute bottom-[70px] left-0 right-0 flex justify-center gap-2 lg:hidden">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === current ? "w-8 bg-brand-500" : "w-1.5 bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
