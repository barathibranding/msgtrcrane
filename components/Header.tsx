"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";
import { nav, site } from "@/lib/site";
import Image from "next/image";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Top utility bar */}
      <div className="hidden bg-ink-950 text-ink-200 md:block">
        <div className="container-x flex items-center justify-between py-2 text-xs">
          <div className="flex items-center gap-6">
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5 text-brand-400" />
              {site.address.full}
            </span>
            <a
              href={site.emailHref}
              className="inline-flex items-center gap-2 hover:text-brand-400"
            >
              <Mail className="h-3.5 w-3.5 text-brand-400" />
              {site.email}
            </a>
          </div>
          <div className="flex items-center gap-5">
            <span className="text-ink-400">{site.hours}</span>
            <a
              href={site.phoneSecondaryHref}
              className="font-semibold hover:text-brand-400"
            >
              {site.phoneSecondary}
            </a>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-ink-100 bg-white/95 backdrop-blur">
        <div className="container-x flex h-[80px] items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/assets/logobg.png"
              alt="Mohamed Salem Al Shamsi"
              width={44}
              height={44}
              className="h-10 w-20 shrink-0 rounded-md object-cover sm:h-14 sm:w-28 md:h-20 md:w-40"
            />
            <span className="leading-tight">
              <span className="block font-display text-[15px] font-bold uppercase tracking-wide text-ink-900 sm:text-base">
                Mohamed Salem Al Shamsi
              </span>
              <span className="block text-[10px] font-semibold uppercase tracking-[0.14em] text-ink-400 sm:text-[11px]">
                General Transport &amp; Recovery
              </span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex">
            {nav.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-md px-4 py-2 text-sm font-semibold uppercase tracking-wide transition ${
                    active
                      ? "text-brand-600"
                      : "text-ink-600 hover:text-ink-900"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={site.phonePrimaryHref}
              className="btn-primary hidden !px-5 !py-3 sm:inline-flex"
            >
              <Phone className="h-4 w-4 text-ink-100 " />
              <span className="hidden xl:inline text-ink-100 ">
                {site.phonePrimary}
              </span>
              <span className="xl:hidden text-ink-100 ">Call Now</span>
            </a>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="grid h-11 w-11 place-items-center rounded-md border border-ink-200 text-ink-800 lg:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-ink-950/60"
            onClick={() => setOpen(false)}
          />
          <nav className="absolute right-0 top-0 h-full w-[86%] max-w-sm overflow-y-auto bg-white p-6 pt-24 shadow-2xl">
            <ul className="space-y-1">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`block rounded-md px-4 py-3 font-display text-lg font-semibold uppercase tracking-wide ${
                      pathname === item.href
                        ? "bg-brand-50 text-brand-700"
                        : "text-ink-800"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-8 space-y-3 border-t border-ink-100 pt-6 text-sm">
              <a
                href={site.phonePrimaryHref}
                className="flex items-center gap-3 text-ink-800"
              >
                <Phone className="h-4 w-4 text-brand-600" /> {site.phonePrimary}
              </a>
              <a
                href={site.phoneSecondaryHref}
                className="flex items-center gap-3 text-ink-800"
              >
                <Phone className="h-4 w-4 text-brand-600" />{" "}
                {site.phoneSecondary}
              </a>
              <a
                href={site.emailHref}
                className="flex items-center gap-3 break-all text-ink-800"
              >
                <Mail className="h-4 w-4 text-brand-600" /> {site.email}
              </a>
              <p className="flex items-start gap-3 text-ink-500">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />{" "}
                {site.address.full}
              </p>
            </div>

            <a href={site.whatsappHref} className="btn-primary mt-6 w-full">
              WhatsApp Enquiry
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
