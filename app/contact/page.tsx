import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Mohamed Salem Al Shamsi General Transport & Recovery in Musaffah Industrial 5, Abu Dhabi. Call +971 50 411 6093 or +971 2 644 8282.",
};

const cards = [
  {
    icon: Phone,
    title: "Call Us",
    lines: [site.phonePrimary, site.phoneSecondary],
    hrefs: [site.phonePrimaryHref, site.phoneSecondaryHref],
  },
  {
    icon: Mail,
    title: "Email Us",
    lines: [site.email],
    hrefs: [site.emailHref],
  },
  {
    icon: MapPin,
    title: "Visit Us",
    lines: [
      site.address.line1,
      `${site.address.city}, ${site.address.country}`,
    ],
  },
  {
    icon: Clock,
    title: "Working Hours",
    lines: ["Open 24 hours", "7 days a week"],
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Let Us Handle the Heavy Lifting"
        text="Reach out for quotations, availability or emergency recovery. Our team is available around the clock."
        image="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=2000&q=80"
      />

      <section className="py-20 sm:py-24">
        <div className="container-x">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {cards.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className="rounded-lg border border-ink-100 bg-white p-6 shadow-card"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-md bg-ink-900 text-brand-400">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-base text-ink-900">{card.title}</h3>
                  <div className="mt-2 space-y-1 text-sm text-ink-500">
                    {card.lines.map((line, i) =>
                      card.hrefs?.[i] ? (
                        <a
                          key={line}
                          href={card.hrefs[i]}
                          className="block break-all hover:text-brand-700"
                        >
                          {line}
                        </a>
                      ) : (
                        <p key={line}>{line}</p>
                      ),
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:items-start">
            <div className="rounded-lg border border-ink-100 bg-white p-7 shadow-card sm:p-9">
              <h2 className="text-2xl text-ink-900">Send Us a Message</h2>
              <p className="mt-2 text-sm text-ink-500">
                Provide as much detail as possible so we can quote accurately.
              </p>
              <div className="mt-7">
                <ContactForm />
              </div>
            </div>

            <div>
              <div className="overflow-hidden rounded-lg border border-ink-100 shadow-card">
                <iframe
                  title="Location map — Musaffah Industrial 5, Abu Dhabi"
                  src={site.mapEmbed}
                  width="100%"
                  height="380"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="block w-full"
                />
              </div>

              <a
                href={site.whatsappHref}
                className="mt-5 flex items-center justify-between gap-4 rounded-lg bg-green-600 px-6 py-5 text-white transition hover:bg-green-700"
              >
                <span className="flex items-center gap-3">
                  <MessageCircle className="h-6 w-6" />
                  <span>
                    <span className="block font-display text-base font-bold uppercase tracking-wide">
                      WhatsApp Us
                    </span>
                    <span className="block text-sm text-green-50">
                      Fastest way to get a quote
                    </span>
                  </span>
                </span>
                <span className="font-semibold">{site.phonePrimary}</span>
              </a>

              <div className="mt-5 rounded-lg bg-ink-900 p-6 text-white">
                <h3 className="text-lg text-white">Emergency Recovery</h3>
                <p className="mt-2 text-sm text-ink-300">
                  Broken down or involved in an accident? Call our 24/7 dispatch
                  line and we will send the nearest recovery unit.
                </p>
                <a
                  href={site.phonePrimaryHref}
                  className="btn-primary mt-5 w-full"
                >
                  <Phone className="h-4 w-4" /> {site.phonePrimary}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
