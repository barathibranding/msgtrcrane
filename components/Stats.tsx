import { stats } from "@/lib/site";

export default function Stats() {
  return (
    <section className="border-b border-ink-100 bg-ink-50">
      <div className="container-x grid grid-cols-2 gap-8 py-12 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <p className="font-display text-4xl font-bold text-brand-600 sm:text-5xl">
              {s.value}
            </p>
            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-ink-500">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
