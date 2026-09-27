import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { site } from "@/lib/site";

export default function CtaBand() {
  return (
    <section className="bg-brand-500">
      <div className="container-x flex flex-col items-center justify-between gap-6 py-12 text-center lg:flex-row lg:text-left">
        <div>
          <h2 className="text-2xl text-ink-100 sm:text-3xl">
            Need a crane or heavy transport today?
          </h2>
          <p className="mt-2 font-medium text-ink-100/80 ">
            Our dispatch team is available 24/7 for emergency recovery and
            urgent lifting jobs.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <a href={site.phonePrimaryHref} className="btn-dark">
            <Phone className="h-4 w-4" />
            {site.phonePrimary}
          </a>
          <Link
            href="/contact"
            className="btn border-2 border-ink-100/25 text-ink-100 hover:border-ink-900 hover:bg-ink-900 hover:text-white"
          >
            Get a Quote
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
