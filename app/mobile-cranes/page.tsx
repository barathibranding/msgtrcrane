import type { Metadata } from "next";
import Link from "next/link";
import { Phone, CheckCircle2, Award, Clock } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import MobileCraneCard from "@/components/MobileCraneCard";
import CtaBand from "@/components/CtaBand";
import ContactForm from "@/components/ContactForm";
import { mobileCranes, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Mobile Crane Rental — 75 to 700 Ton",
  description:
    "Mobile crane rental in Abu Dhabi from 75 ton to 700 ton.  cranes with certified operators for construction, oil field and heavy industrial lifting projects.",
};

const highlights = [
  {
    title: "Certified Operators",
    text: "Every crane is supplied with a licensed, experienced operator.",
  },
  {
    title: "Third-Party Certified",
    text: "All equipment carries valid third-party inspection certificates.",
  },
  {
    title: "24/7 Availability",
    text: "Emergency call-out for urgent lifts and breakdowns.",
  },
  {
    title: "Full Range",
    text: "From 75 ton compact lifts to 700 ton heavy-lift capacity.",
  },
];

export default function MobileCranesPage() {
  return (
    <>
      <PageHero
        eyebrow="Mobile Crane Rental"
        title="75 to 700 Ton Mobile Cranes"
        text="Our  mobile crane fleet covers every lifting requirement — from urban construction and HVAC installations to heavy oil field and industrial projects across the UAE."
        image="https://images.unsplash.com/photo-1590496793929-36417d3117de?auto=format&fit=crop&w=2000&q=80"
      />

      {/* Intro + highlights */}
      <section className="py-20 sm:py-24">
        <div className="container-x grid gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Mobile Crane Hire"
              title="The Right Crane for Every Job"
              text="Whether you need a compact 75 ton unit for a tight urban site or a 700 ton heavy-lift crane for an offshore module, we have the equipment, operators and certifications to deliver safely and on schedule."
            />
            <p className="mt-5 text-base leading-relaxed text-ink-500">
              All cranes are supplied with certified operators, valid
              third-party inspection certificates, and full insurance coverage.
              Available for daily hire, weekly contracts, or long-term project
              allocation.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="btn-primary text-ink-100 ">
                Request a Quote
              </Link>
              <a href={site.phonePrimaryHref} className="btn-dark">
                <Phone className="h-4 w-4" /> {site.phonePrimary}
              </a>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="rounded-lg border border-ink-100 bg-white p-6 shadow-card"
              >
                <CheckCircle2 className="h-6 w-6 text-brand-600" />
                <h3 className="mt-4 text-base text-ink-900">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-500">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Crane cards */}
      <section className="bg-ink-50 py-20 sm:py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="Our Fleet"
            title="Mobile Crane Capacities"
            text="Choose a tonnage below to see full specifications. Contact us for confirmed availability on your required date."
            align="center"
          />

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {mobileCranes.map((crane) => (
              <MobileCraneCard key={crane.slug} crane={crane} />
            ))}
          </div>
        </div>
      </section>

      {/* Why our cranes */}
      <section className="py-20 sm:py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="Why Our Cranes"
            title="Standards You Can Rely On"
            align="center"
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            <div className="rounded-lg border border-ink-100 bg-white p-7 text-center shadow-card">
              <Award className="mx-auto h-9 w-9 text-brand-600" />
              <h3 className="mt-5 text-lg text-ink-900">ISO 9001:2015</h3>
              <p className="mt-2 text-sm text-ink-500">
                Quality management certified by Quality Registrar Systems (QRS).
              </p>
            </div>
            <div className="rounded-lg border border-ink-100 bg-white p-7 text-center shadow-card">
              <CheckCircle2 className="mx-auto h-9 w-9 text-brand-600" />
              <h3 className="mt-5 text-lg text-ink-900">
                Third-Party Certified
              </h3>
              <p className="mt-2 text-sm text-ink-500">
                Every crane carries valid third-party inspection certification.
              </p>
            </div>
            <div className="rounded-lg border border-ink-100 bg-white p-7 text-center shadow-card">
              <Clock className="mx-auto h-9 w-9 text-brand-600" />
              <h3 className="mt-5 text-lg text-ink-900">24/7 Dispatch</h3>
              <p className="mt-2 text-sm text-ink-500">
                Round-the-clock availability for emergency and urgent lifts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-ink-50 py-20 sm:py-24">
        <div className="container-x grid gap-14 lg:grid-cols-2 lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Book a Crane"
              title="Get Availability & Pricing"
              text="Tell us the tonnage, lift height, load weight and site location. Our team will confirm availability and send a competitive quote."
            />

            <dl className="mt-9 space-y-5 text-sm">
              <div>
                <dt className="font-semibold uppercase tracking-wider text-ink-400">
                  Phone
                </dt>
                <dd className="mt-1 flex flex-col gap-1">
                  <a
                    href={site.phonePrimaryHref}
                    className="text-ink-800 hover:text-brand-700"
                  >
                    {site.phonePrimary}
                  </a>
                  <a
                    href={site.phoneSecondaryHref}
                    className="text-ink-800 hover:text-brand-700"
                  >
                    {site.phoneSecondary}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-semibold uppercase tracking-wider text-ink-400">
                  Email
                </dt>
                <dd className="mt-1">
                  <a
                    href={site.emailHref}
                    className="break-all text-ink-800 hover:text-brand-700"
                  >
                    {site.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-semibold uppercase tracking-wider text-ink-400">
                  Coverage
                </dt>
                <dd className="mt-1 text-ink-800">
                  Abu Dhabi &amp; nationwide UAE
                </dd>
              </div>
            </dl>
          </div>

          <div className="rounded-lg border border-ink-100 bg-white p-7 shadow-card sm:p-9">
            <h3 className="text-2xl text-ink-900">Crane Enquiry</h3>
            <p className="mt-2 text-sm text-ink-500">
              Mention the tonnage you need in the job details.
            </p>
            <div className="mt-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
