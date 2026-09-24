// import Link from "next/link";
// import { Phone, Mail, MapPin, Clock } from "lucide-react";
// import { nav, services, site } from "@/lib/site";

// export default function Footer() {
//   const year = new Date().getFullYear();

//   return (
//     <footer className="bg-ink-950 text-ink-300">
//       <div className="container-x grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
//         {/* Brand */}
//         <div className="lg:col-span-1">
//           <div className="flex items-center gap-3">
//             <span className="grid h-11 w-11 place-items-center rounded-md bg-brand-500 font-display text-lg font-bold text-ink-900">
//               MS
//             </span>
//             <span className="font-display text-base font-bold uppercase leading-tight tracking-wide text-white">
//               Mohamed Salem
//               <br />
//               Al Shamsi
//             </span>
//           </div>

//           <p dir="rtl" className="mt-5 text-sm leading-relaxed text-ink-400">
//             {site.arabicName}
//           </p>
//           <p className="mt-4 text-sm font-semibold uppercase tracking-wider text-brand-400">
//             &ldquo;{site.tagline}&rdquo;
//           </p>
//         </div>

//         {/* Quick links */}
//         <div>
//           <h4 className="font-display text-sm font-bold uppercase tracking-[0.16em] text-white">
//             Quick Links
//           </h4>
//           <ul className="mt-5 space-y-3 text-sm">
//             {nav.map((item) => (
//               <li key={item.href}>
//                 <Link
//                   href={item.href}
//                   className="transition hover:text-brand-400"
//                 >
//                   {item.label}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Services */}
//         <div>
//           <h4 className="font-display text-sm font-bold uppercase tracking-[0.16em] text-white">
//             Our Services
//           </h4>
//           <ul className="mt-5 space-y-3 text-sm">
//             {services.map((s) => (
//               <li key={s.slug}>
//                 <Link
//                   href="/services"
//                   className="transition hover:text-brand-400"
//                 >
//                   {s.title}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Contact */}
//         <div>
//           <h4 className="font-display text-sm font-bold uppercase tracking-[0.16em] text-white">
//             Get In Touch
//           </h4>
//           <ul className="mt-5 space-y-4 text-sm">
//             <li className="flex gap-3">
//               <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
//               <span>{site.address.full}</span>
//             </li>
//             <li className="flex gap-3">
//               <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
//               <span className="flex flex-col gap-1">
//                 <a
//                   href={site.phonePrimaryHref}
//                   className="hover:text-brand-400"
//                 >
//                   {site.phonePrimary}
//                 </a>
//                 <a
//                   href={site.phoneSecondaryHref}
//                   className="hover:text-brand-400"
//                 >
//                   {site.phoneSecondary}
//                 </a>
//               </span>
//             </li>
//             <li className="flex gap-3">
//               <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
//               <a
//                 href={site.emailHref}
//                 className="break-all hover:text-brand-400"
//               >
//                 {site.email}
//               </a>
//             </li>
//             <li className="flex gap-3">
//               <Clock className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
//               <span>{site.hours}</span>
//             </li>
//           </ul>
//         </div>
//       </div>

//       <div className="border-t border-white/10">
//         <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-xs text-ink-400 md:flex-row">
//           <p>
//             &copy; {year} {site.legalName}. All rights reserved.
//           </p>
//           <p>Abu Dhabi • United Arab Emirates</p>
//         </div>
//       </div>
//     </footer>
//   );
// }

import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Globe } from "lucide-react";
import { nav, services, site } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink-950 text-ink-300">
      <div className="container-x grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-md bg-brand-500 font-display text-lg font-bold text-ink-900">
              MS
            </span>
            <span className="font-display text-base font-bold uppercase leading-tight tracking-wide text-white">
              Mohamed Salem
              <br />
              Al Shamsi
            </span>
          </div>

          <p dir="rtl" className="mt-5 text-sm leading-relaxed text-ink-400">
            {site.arabicName}
          </p>
          <p className="mt-4 text-sm font-semibold uppercase tracking-wider text-brand-400">
            &ldquo;{site.tagline}&rdquo;
          </p>
          <p className="mt-4 inline-flex items-center gap-2 rounded-md border border-white/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-400">
            {site.license.iso} Certified
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-[0.16em] text-white">
            Quick Links
          </h4>
          <ul className="mt-5 space-y-3 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="transition hover:text-brand-400"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-[0.16em] text-white">
            Our Services
          </h4>
          <ul className="mt-5 space-y-3 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  href="/services"
                  className="transition hover:text-brand-400"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-[0.16em] text-white">
            Get In Touch
          </h4>
          <ul className="mt-5 space-y-4 text-sm">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
              <span>{site.address.full}</span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
              <span className="flex flex-col gap-1">
                <a
                  href={site.phonePrimaryHref}
                  className="hover:text-brand-400"
                >
                  {site.phonePrimary}
                </a>
                <a
                  href={site.phoneSecondaryHref}
                  className="hover:text-brand-400"
                >
                  {site.phoneSecondary}
                </a>
              </span>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
              <a
                href={site.emailHref}
                className="break-all hover:text-brand-400"
              >
                {site.email}
              </a>
            </li>
            <li className="flex gap-3">
              <Globe className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
              <span>{site.website}</span>
            </li>
            <li className="flex gap-3">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
              <span>{site.hours}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-xs text-ink-400 md:flex-row">
          <p>
            &copy; {year} {site.legalName}. All rights reserved.
          </p>
          <p>Commercial License {site.license.commercial} • Abu Dhabi, UAE</p>
        </div>
      </div>
    </footer>
  );
}
