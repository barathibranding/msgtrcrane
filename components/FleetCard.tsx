import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { FleetItem } from "@/lib/site";

export default function FleetCard({ item }: { item: FleetItem }) {
  return (
    <article className="group overflow-hidden rounded-lg border border-ink-100 bg-white shadow-card transition duration-300 hover:-translate-y-1 hover:border-brand-300">
      <div className="relative aspect-[4/3] overflow-hidden bg-ink-100">
        <Image
          src={item.image}
          alt={item.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition duration-700 group-hover:scale-110"
        />
        <span className="absolute right-4 top-4 rounded-md bg-brand-500 px-3 py-1.5 font-display text-xs font-bold uppercase tracking-wider text-ink-900 shadow-lg">
          {item.capacity}
        </span>
      </div>

      <div className="p-6">
        <h3 className="text-lg text-ink-900">{item.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-500">{item.use}</p>

        <Link
          href="/contact"
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-wider text-brand-700 transition group-hover:gap-3"
        >
          Enquire <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}
