import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import type { MobileCraneItem } from "@/lib/site";

export default function MobileCraneCard({ crane }: { crane: MobileCraneItem }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-ink-100 bg-white shadow-card transition duration-300 hover:-translate-y-1 hover:border-brand-300">
      {/* Image with tonnage badge */}
      <div className="relative aspect-[16/10] overflow-hidden bg-ink-100">
        <Image
          src={crane.image}
          alt={crane.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-ink-950/10 to-transparent" />
        <span className="absolute right-4 top-4 rounded-md bg-brand-500 px-3 py-1.5 font-display text-sm font-bold uppercase tracking-wider text-ink-100  shadow-lg">
          {crane.tonnage} Ton
        </span>
        <span className="absolute bottom-0 left-0 right-0 p-5 font-display text-lg font-bold uppercase tracking-wide text-white drop-shadow-lg">
          {crane.title}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-semibold uppercase tracking-wider text-brand-700">
          {crane.model}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-ink-500">
          {crane.description}
        </p>

        <dl className="mt-5 grid grid-cols-2 gap-3 border-t border-ink-100 pt-5">
          {crane.specs.map((spec) => (
            <div key={spec.label}>
              <dt className="text-[11px] font-semibold uppercase tracking-wider text-ink-400">
                {spec.label}
              </dt>
              <dd className="mt-0.5 text-sm font-semibold text-ink-800">
                {spec.value}
              </dd>
            </div>
          ))}
        </dl>

        <p className="mt-5 flex items-start gap-2 text-xs leading-relaxed text-ink-500">
          <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-600" />
          <span>
            <span className="font-semibold text-ink-700">Best for: </span>
            {crane.bestFor}
          </span>
        </p>

        <Link
          href="/contact"
          className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-wider text-brand-700 transition group-hover:gap-3"
        >
          Book This Crane <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}
