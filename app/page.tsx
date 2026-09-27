// // import Image from "next/image";

// // export default function Home() {
// //   return (
// //     <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
// //       <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
// //         <Image
// //           className="dark:invert h-5 w-[100px]"
// //           src="/next.svg"
// //           alt="Next.js logo"
// //           width={100}
// //           height={20}
// //           priority
// //         />
// //         <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
// //           <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
// //             To get started, edit the{" "}
// //             <code className="rounded bg-black/[.06] px-1.5 py-0.5 font-mono text-[0.9em] dark:bg-white/[.08]">
// //               page.tsx
// //             </code>{" "}
// //             file.
// //           </h1>
// //           <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
// //             Looking for a starting point or more instructions? Head over to{" "}
// //             <a
// //               href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
// //               className="font-medium text-zinc-950 dark:text-zinc-50"
// //             >
// //               Templates
// //             </a>{" "}
// //             or the{" "}
// //             <a
// //               href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
// //               className="font-medium text-zinc-950 dark:text-zinc-50"
// //             >
// //               Learning
// //             </a>{" "}
// //             center.
// //           </p>
// //         </div>
// //         <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
// //           <a
// //             className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
// //             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
// //             target="_blank"
// //             rel="noopener noreferrer"
// //           >
// //             <Image
// //               className="dark:invert h-[14px] w-4"
// //               src="/vercel.svg"
// //               alt="Vercel logomark"
// //               width={16}
// //               height={14}
// //             />
// //             Deploy Now
// //           </a>
// //           <a
// //             className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
// //             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
// //             target="_blank"
// //             rel="noopener noreferrer"
// //           >
// //             Documentation
// //           </a>
// //         </div>
// //       </main>
// //     </div>
// //   );
// // }
// import Image from "next/image";
// import Link from "next/link";
// import { ArrowRight, CheckCircle2 } from "lucide-react";
// import Hero from "@/components/Hero";
// import Stats from "@/components/Stats";
// import SectionHeading from "@/components/SectionHeading";
// import ServiceCard from "@/components/ServiceCard";
// import CtaBand from "@/components/CtaBand";
// import ContactForm from "@/components/ContactForm";
// import { services, whyUs, industries, process, site } from "@/lib/site";

// export default function HomePage() {
//   return (
//     <>
//       <Hero />
//       <Stats />

//       {/* Services */}
//       <section className="py-20 sm:py-24">
//         <div className="container-x">
//           <SectionHeading
//             eyebrow="What We Do"
//             title="Complete Lifting & Transport Solutions"
//             text="From a single mobile crane to full project logistics, we keep your site moving safely and on schedule."
//             align="center"
//           />

//           <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//             {services.map((service) => (
//               <ServiceCard key={service.slug} service={service} />
//             ))}
//           </div>

//           <div className="mt-12 text-center">
//             <Link href="/services" className="btn-dark">
//               View All Services <ArrowRight className="h-4 w-4" />
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* About / Why us */}
//       <section className="bg-ink-50 py-20 sm:py-24">
//         <div className="container-x grid items-center gap-14 lg:grid-cols-2">
//           <div className="relative">
//             <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
//               <Image
//                 src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=80"
//                 alt="Heavy crane operating on site"
//                 fill
//                 sizes="(max-width: 1024px) 100vw, 50vw"
//                 className="object-cover"
//               />
//             </div>
//             <div className="absolute -bottom-6 -right-4 hidden rounded-lg bg-brand-500 px-7 py-6 shadow-xl sm:block">
//               <p className="font-display text-4xl font-bold text-ink-900">
//                 18+
//               </p>
//               <p className="text-xs font-bold uppercase tracking-[0.16em] text-ink-800">
//                 Years of Service
//               </p>
//             </div>
//           </div>

//           <div>
//             <SectionHeading
//               eyebrow="About Us"
//               title="Abu Dhabi Based. Trusted Since 2007."
//             />
//             <p className="mt-5 text-base leading-relaxed text-ink-500">
//               Mohamed Salem Al Shamsi General Transport &amp; Recovery has been
//               providing reliable and efficient transportation solutions from Abu
//               Dhabi since 2007. We have extensive experience working in oil
//               field operations and Command of Military Works.
//             </p>
//             <p className="mt-4 text-base leading-relaxed text-ink-500">
//               Our mission is straightforward: provide our customers with safe,
//               timely and cost-effective service — every load, every time.
//             </p>

//             <ul className="mt-8 grid gap-4 sm:grid-cols-2">
//               {whyUs.slice(0, 4).map((item) => (
//                 <li key={item.title} className="flex gap-3">
//                   <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
//                   <div>
//                     <p className="font-semibold text-ink-900">{item.title}</p>
//                     <p className="mt-1 text-sm text-ink-500">{item.text}</p>
//                   </div>
//                 </li>
//               ))}
//             </ul>

//             <Link href="/about" className="btn-primary mt-9">
//               More About Us <ArrowRight className="h-4 w-4" />
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* Process */}
//       <section className="py-20 sm:py-24">
//         <div className="container-x">
//           <SectionHeading
//             eyebrow="How It Works"
//             title="From Enquiry to On-Site in Four Steps"
//             align="center"
//           />

//           <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
//             {process.map((item) => (
//               <div key={item.step} className="relative">
//                 <span className="font-display text-5xl font-bold text-brand-200">
//                   {item.step}
//                 </span>
//                 <h3 className="mt-3 text-lg text-ink-900">{item.title}</h3>
//                 <p className="mt-2 text-sm leading-relaxed text-ink-500">
//                   {item.text}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Industries */}
//       <section className="bg-ink-900 py-20 sm:py-24">
//         <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
//           <SectionHeading
//             light
//             eyebrow="Industries We Serve"
//             title="Trusted Across the Emirates"
//             text="Our fleet and crews are deployed across a wide range of sectors, from remote oil field sites to busy urban infrastructure projects."
//           />
//           <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
//             {industries.map((item) => (
//               <div
//                 key={item}
//                 className="rounded-md border border-white/10 bg-white/5 px-5 py-4 text-sm font-semibold uppercase tracking-wide text-ink-100 transition hover:border-brand-400/50 hover:text-brand-400"
//               >
//                 {item}
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <CtaBand />

//       {/* Contact */}
//       <section id="contact" className="py-20 sm:py-24">
//         <div className="container-x grid gap-14 lg:grid-cols-2">
//           <div>
//             <SectionHeading
//               eyebrow="Get In Touch"
//               title="Request a Quote or Book a Crane"
//               text="Tell us what you need to lift or move. Our team responds quickly with availability and pricing."
//             />

//             <dl className="mt-9 space-y-5 text-sm">
//               <div>
//                 <dt className="font-semibold uppercase tracking-wider text-ink-400">
//                   Address
//                 </dt>
//                 <dd className="mt-1 text-ink-800">{site.address.full}</dd>
//               </div>
//               <div>
//                 <dt className="font-semibold uppercase tracking-wider text-ink-400">
//                   Phone
//                 </dt>
//                 <dd className="mt-1 flex flex-col gap-1">
//                   <a
//                     href={site.phonePrimaryHref}
//                     className="text-ink-800 hover:text-brand-700"
//                   >
//                     {site.phonePrimary}
//                   </a>
//                   <a
//                     href={site.phoneSecondaryHref}
//                     className="text-ink-800 hover:text-brand-700"
//                   >
//                     {site.phoneSecondary}
//                   </a>
//                 </dd>
//               </div>
//               <div>
//                 <dt className="font-semibold uppercase tracking-wider text-ink-400">
//                   Email
//                 </dt>
//                 <dd className="mt-1">
//                   <a
//                     href={site.emailHref}
//                     className="break-all text-ink-800 hover:text-brand-700"
//                   >
//                     {site.email}
//                   </a>
//                 </dd>
//               </div>
//               <div>
//                 <dt className="font-semibold uppercase tracking-wider text-ink-400">
//                   Hours
//                 </dt>
//                 <dd className="mt-1 text-ink-800">{site.hours}</dd>
//               </div>
//             </dl>

//             <div className="mt-9 overflow-hidden rounded-lg border border-ink-100">
//               <iframe
//                 title="Our location in Musaffah, Abu Dhabi"
//                 src={site.mapEmbed}
//                 width="100%"
//                 height="260"
//                 loading="lazy"
//                 referrerPolicy="no-referrer-when-downgrade"
//                 className="block w-full"
//               />
//             </div>
//           </div>

//           <div className="rounded-lg border border-ink-100 bg-white p-7 shadow-card sm:p-9">
//             <h3 className="text-2xl text-ink-900">Send an Enquiry</h3>
//             <p className="mt-2 text-sm text-ink-500">
//               Fields marked with * are required.
//             </p>
//             <div className="mt-7">
//               <ContactForm />
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Phone } from "lucide-react";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import CtaBand from "@/components/CtaBand";
import ContactForm from "@/components/ContactForm";
import {
  services,
  whyUs,
  industries,
  process,
  site,
  mobileCranes,
} from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />

      {/* Services */}
      <section className="py-20 sm:py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="What We Do"
            title="Complete Lifting & Transport Solutions"
            text="From a single mobile crane to full project logistics, we keep your site moving safely and on schedule."
            align="center"
          />

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/services" className="btn-dark">
              View All Services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Mobile Cranes intro section ─────────────────────── */}
      <section className="bg-ink-950 py-20 text-white sm:py-24">
        <div className="container-x grid gap-14 lg:grid-cols-2 lg:items-center">
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src="/assets/cranes/crane2.jpg"
                alt=" mobile crane in operation"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-4 hidden rounded-lg bg-brand-500 px-7 py-6 shadow-xl sm:block">
              <p className="font-display text-4xl font-bold text-ink-100 ">
                75–700
              </p>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-ink-100 ">
                Ton Capacity
              </p>
            </div>
          </div>

          <div>
            <span className="eyebrow-light">Mobile Crane Fleet</span>
            <h2 className="mt-3 text-3xl leading-[1.1] text-white sm:text-4xl lg:text-[42px]">
              Mobile Cranes from 75 to 700 Ton
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-300">
              Our mobile crane fleet covers every lifting requirement — from
              compact 75 ton units for urban construction and HVAC
              installations, up to 700 ton heavy-lift capacity for oil field and
              offshore projects.
            </p>

            <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {mobileCranes.map((crane) => (
                <li
                  key={crane.slug}
                  className="rounded-md border border-white/10 bg-white/5 px-4 py-3 text-center"
                >
                  <p className="font-display text-lg font-bold text-brand-400">
                    {crane.tonnage}
                  </p>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-ink-300">
                    Ton
                  </p>
                </li>
              ))}
            </ul>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/mobile-cranes" className="btn-primary text-ink-100 ">
                View Mobile Crane Fleet
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a href={site.phonePrimaryHref} className="btn-outline">
                <Phone className="h-4 w-4" /> Book a Crane
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* ─────────────────────────────────────────────────── */}

      {/* About / Why us */}
      <section className="bg-ink-50 py-20 sm:py-24">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2">
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src="/assets/cranes/crane3.jpg"
                alt="Heavy crane operating on site"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 hidden rounded-lg bg-brand-500 px-7 py-6 shadow-xl sm:block">
              <p className="font-display text-4xl font-bold text-ink-100 ">
                18+
              </p>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-ink-100 ">
                Years of Service
              </p>
            </div>
          </div>

          <div>
            <SectionHeading
              eyebrow="About Us"
              title="Abu Dhabi Based. Trusted Since 2007."
            />
            <p className="mt-5 text-base leading-relaxed text-ink-500">
              Mohamed Salem Al Shamsi General Transport &amp; Recovery has been
              providing reliable and efficient transportation solutions from Abu
              Dhabi since 2007. We have extensive experience working in oil
              field operations and Command of Military Works.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink-500">
              Our mission is straightforward: provide our customers with safe,
              timely and cost-effective service — every load, every time.
            </p>

            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {whyUs.slice(0, 4).map((item) => (
                <li key={item.title} className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                  <div>
                    <p className="font-semibold text-ink-900">{item.title}</p>
                    <p className="mt-1 text-sm text-ink-500">{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>

            <Link href="/about" className="btn-primary mt-9 text-ink-100 ">
              More About Us <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 sm:py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="How It Works"
            title="From Enquiry to On-Site in Four Steps"
            align="center"
          />

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((item) => (
              <div key={item.step} className="relative">
                <span className="font-display text-5xl font-bold text-brand-200">
                  {item.step}
                </span>
                <h3 className="mt-3 text-lg text-ink-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries — image grid */}
      <section className="bg-ink-900 py-20 sm:py-24">
        <div className="container-x">
          <SectionHeading
            light
            eyebrow="Industries We Serve"
            title="Trusted Across the Emirates"
            text="Our fleet and crews are deployed across a wide range of sectors, from remote oil field sites to busy urban infrastructure projects."
            align="center"
          />

          <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {industries.map((item) => (
              <div
                key={item.name}
                className="group relative overflow-hidden rounded-lg border border-white/10"
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover opacity-70 transition duration-700 group-hover:scale-110 group-hover:opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/40 to-transparent" />
                </div>
                <p className="absolute bottom-0 left-0 right-0 p-4 font-display text-sm font-bold uppercase tracking-wide text-white sm:text-base">
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />

      {/* Contact */}
      <section id="contact" className="py-20 sm:py-24">
        <div className="container-x grid gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Get In Touch"
              title="Request a Quote or Book a Crane"
              text="Tell us what you need to lift or move. Our team responds quickly with availability and pricing."
            />

            <dl className="mt-9 space-y-5 text-sm">
              <div>
                <dt className="font-semibold uppercase tracking-wider text-ink-400">
                  Address
                </dt>
                <dd className="mt-1 text-ink-800">{site.address.full}</dd>
              </div>
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
                  Hours
                </dt>
                <dd className="mt-1 text-ink-800">{site.hours}</dd>
              </div>
            </dl>

            <div className="mt-9 overflow-hidden rounded-lg border border-ink-100">
              <iframe
                title="Our location in Musaffah, Abu Dhabi"
                src={site.mapEmbed}
                width="100%"
                height="260"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block w-full"
              />
            </div>
          </div>

          <div className="rounded-lg border border-ink-100 bg-white p-7 shadow-card sm:p-9">
            <h3 className="text-2xl text-ink-900">Send an Enquiry</h3>
            <p className="mt-2 text-sm text-ink-500">
              Fields marked with * are required.
            </p>
            <div className="mt-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
