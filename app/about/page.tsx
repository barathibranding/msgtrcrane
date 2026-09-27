// import type { Metadata } from "next";
// import Image from "next/image";
// import Link from "next/link";
// import { ArrowRight, CheckCircle2 } from "lucide-react";
// import PageHero from "@/components/PageHero";
// import SectionHeading from "@/components/SectionHeading";
// import Stats from "@/components/Stats";
// import CtaBand from "@/components/CtaBand";
// import { site, whyUs, industries } from "@/lib/site";

// export const metadata: Metadata = {
//   title: "About Us",
//   description:
//     "Abu Dhabi based transport and recovery company operating since 2007, with oil field and Command of Military Works experience.",
// };

// export default function AboutPage() {
//   return (
//     <>
//       <PageHero
//         eyebrow="About Our Company"
//         title="Reliable Transport & Lifting Since 2007"
//         text="Mohamed Salem Al Shamsi General Transport & Recovery is an Abu Dhabi based transportation services company serving the UAE for nearly two decades."
//         image="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=2000&q=80"
//       />

//       <section className="py-20 sm:py-24">
//         <div className="container-x grid items-start gap-14 lg:grid-cols-2">
//           <div>
//             <SectionHeading
//               eyebrow="Who We Are"
//               title="Built on Discipline, Safety and Delivery"
//             />
//             <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-500">
//               <p>
//                 Since 2007 we have provided reliable and efficient
//                 transportation solutions from our base in Musaffah Industrial 5,
//                 Abu Dhabi. Our fleet covers mobile and heavy cranes, lowbed and
//                 flatbed trailers, recovery trucks and support equipment.
//               </p>
//               <p>
//                 We have extensive experience working in oil field operations and
//                 Command of Military Works — environments that demand strict
//                 safety discipline, punctuality and confidentiality.
//               </p>
//               <p>
//                 Our mission is to provide our customers with safe, timely and
//                 cost-effective service, supported by certified operators and a
//                 well-maintained fleet.
//               </p>
//             </div>

//             <p className="mt-8 border-l-4 border-brand-500 pl-5 font-display text-xl font-semibold uppercase tracking-wide text-ink-900">
//               &ldquo;{site.tagline}&rdquo;
//             </p>

//             <Link href="/contact" className="btn-primary mt-9">
//               Work With Us <ArrowRight className="h-4 w-4" />
//             </Link>
//           </div>

//           <div className="grid gap-5 sm:grid-cols-2">
//             <div className="relative aspect-[3/4] overflow-hidden rounded-lg sm:mt-10">
//               <Image
//                 src="https://images.unsplash.com/photo-1590496793929-36417d3117de?auto=format&fit=crop&w=1000&q=80"
//                 alt="Crane lifting operations"
//                 fill
//                 sizes="(max-width: 1024px) 50vw, 25vw"
//                 className="object-cover"
//               />
//             </div>
//             <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
//               <Image
//                 src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80"
//                 alt="Heavy transport truck"
//                 fill
//                 sizes="(max-width: 1024px) 50vw, 25vw"
//                 className="object-cover"
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       <Stats />

//       <section className="py-20 sm:py-24">
//         <div className="container-x">
//           <SectionHeading
//             eyebrow="Why Choose Us"
//             title="Reasons Clients Keep Coming Back"
//             align="center"
//           />

//           <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//             {whyUs.map((item) => (
//               <div
//                 key={item.title}
//                 className="rounded-lg border border-ink-100 bg-white p-7 shadow-card"
//               >
//                 <CheckCircle2 className="h-7 w-7 text-brand-600" />
//                 <h3 className="mt-5 text-lg text-ink-900">{item.title}</h3>
//                 <p className="mt-2 text-sm leading-relaxed text-ink-500">
//                   {item.text}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section className="bg-ink-50 py-20 sm:py-24">
//         <div className="container-x">
//           <SectionHeading
//             eyebrow="Sectors"
//             title="Industries We Support"
//             text="Our equipment and crews are deployed across the following sectors throughout the UAE."
//             align="center"
//           />
//           <div className="mt-12 flex flex-wrap justify-center gap-3">
//             {industries.map((item) => (
//               <span
//                 key={item}
//                 className="rounded-full border border-ink-200 bg-white px-6 py-3 text-sm font-semibold uppercase tracking-wide text-ink-700"
//               >
//                 {item}
//               </span>
//             ))}
//           </div>
//         </div>
//       </section>

//       <CtaBand />
//     </>
//   );
// }

// import type { Metadata } from "next";
// import Image from "next/image";
// import Link from "next/link";
// import { ArrowRight, CheckCircle2, Award, Users, Target } from "lucide-react";
// import PageHero from "@/components/PageHero";
// import SectionHeading from "@/components/SectionHeading";
// import Stats from "@/components/Stats";
// import CtaBand from "@/components/CtaBand";
// import {
//   site,
//   whyUs,
//   industries,
//   principles,
//   clients,
//   certifications,
//   vision,
// } from "@/lib/site";

// export const metadata: Metadata = {
//   title: "About Us",
//   description:
//     "ISO 9001:2015 certified Abu Dhabi transport and recovery company operating since 2007. Heavy equipment rental, tippers, low beds, buses, materials and oil field services.",
// };

// const commercialActivities = [
//   "Transport of materials — assembly light trucks",
//   "Towing and transporting of broken down cars without repair",
//   "Lifting and loading machines and equipment renting",
//   "Transport of materials — assembly heavy trucks",
//   "Heavy machines and equipment renting",
//   "Onshore and offshore oil and gas fields and facilities services",
//   "Passengers transportation via rented buses",
// ];

// export default function AboutPage() {
//   return (
//     <>
//       <PageHero
//         eyebrow="About Our Company"
//         title="Reliable Transport & Lifting Since 2007"
//         text="Mohamed Salem Al Shamsi General Transport & Recovery is an Abu Dhabi based transportation services company serving the UAE for nearly two decades."
//         image="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=2000&q=80"
//       />

//       {/* Who we are */}
//       <section className="py-20 sm:py-24">
//         <div className="container-x grid items-start gap-14 lg:grid-cols-2">
//           <div>
//             <SectionHeading
//               eyebrow="Who We Are"
//               title="Built on Discipline, Safety and Delivery"
//             />
//             <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-500">
//               <p>
//                 Since {site.establishedDate}, we have provided reliable and
//                 efficient transportation solutions from our base in Musaffah
//                 Industrial 5, Abu Dhabi. Our fleet covers mobile cranes, wheel
//                 loaders, boom loaders, tipper trucks, low bed trailers,
//                 passenger buses and recovery vehicles.
//               </p>
//               <p>
//                 We have extensive experience working in oil field operations and
//                 Command of Military Works — environments that demand strict
//                 safety discipline, punctuality and confidentiality. Our
//                 operations are licensed by Abu Dhabi DED and the Ministry of
//                 Energy &amp; Infrastructure, and certified to ISO 9001:2015.
//               </p>
//               <p>
//                 Our mission is to provide our customers with safe, timely and
//                 cost-effective service, supported by certified operators and a
//                 well-maintained fleet.
//               </p>
//             </div>

//             <p className="mt-8 border-l-4 border-brand-500 pl-5 font-display text-xl font-semibold uppercase tracking-wide text-ink-900">
//               &ldquo;{site.tagline}&rdquo;
//             </p>

//             <Link href="/contact" className="btn-primary mt-9">
//               Work With Us <ArrowRight className="h-4 w-4" />
//             </Link>
//           </div>

//           <div className="grid gap-5 sm:grid-cols-2">
//             <div className="relative aspect-[3/4] overflow-hidden rounded-lg sm:mt-10">
//               <Image
//                 src="https://images.unsplash.com/photo-1590496793929-36417d3117de?auto=format&fit=crop&w=1000&q=80"
//                 alt="Crane lifting operations"
//                 fill
//                 sizes="(max-width: 1024px) 50vw, 25vw"
//                 className="object-cover"
//               />
//             </div>
//             <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
//               <Image
//                 src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80"
//                 alt="Heavy transport truck"
//                 fill
//                 sizes="(max-width: 1024px) 50vw, 25vw"
//                 className="object-cover"
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       <Stats />

//       {/* Vision */}
//       <section className="py-20 sm:py-24">
//         <div className="container-x">
//           <div className="mx-auto max-w-4xl rounded-lg border border-ink-100 bg-white p-9 shadow-card sm:p-12">
//             <div className="flex items-center gap-3">
//               <Target className="h-7 w-7 text-brand-600" />
//               <span className="eyebrow">Our Vision</span>
//             </div>
//             <p className="mt-6 text-lg leading-relaxed text-ink-700 sm:text-xl">
//               {vision}
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Principles */}
//       <section className="bg-ink-50 py-20 sm:py-24">
//         <div className="container-x">
//           <SectionHeading
//             eyebrow="Our Principles"
//             title="The Standards We Operate By"
//             text="Safety is always our top priority. These principles guide every job we take on."
//             align="center"
//           />

//           <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//             {principles.map((item) => (
//               <div
//                 key={item.title}
//                 className="rounded-lg border border-ink-100 bg-white p-7 shadow-card"
//               >
//                 <CheckCircle2 className="h-7 w-7 text-brand-600" />
//                 <h3 className="mt-5 text-lg text-ink-900">{item.title}</h3>
//                 <p className="mt-2 text-sm leading-relaxed text-ink-500">
//                   {item.text}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Why us */}
//       <section className="py-20 sm:py-24">
//         <div className="container-x">
//           <SectionHeading
//             eyebrow="Why Choose Us"
//             title="Reasons Clients Keep Coming Back"
//             align="center"
//           />
//           <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//             {whyUs.map((item) => (
//               <div
//                 key={item.title}
//                 className="rounded-lg border border-ink-100 bg-white p-7 shadow-card"
//               >
//                 <CheckCircle2 className="h-7 w-7 text-brand-600" />
//                 <h3 className="mt-5 text-lg text-ink-900">{item.title}</h3>
//                 <p className="mt-2 text-sm leading-relaxed text-ink-500">
//                   {item.text}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Licensed activities */}
//       <section className="bg-ink-900 py-20 sm:py-24">
//         <div className="container-x grid gap-12 lg:grid-cols-2 lg:items-start">
//           <SectionHeading
//             light
//             eyebrow="Licensed Activities"
//             title="Approved Commercial Activities"
//             text={`Authorised by Abu Dhabi Department of Economic Development under Commercial License ${site.license.commercial}.`}
//           />
//           <ul className="space-y-3">
//             {commercialActivities.map((item) => (
//               <li
//                 key={item}
//                 className="flex items-start gap-3 rounded-md border border-white/10 bg-white/5 px-5 py-4 text-sm text-ink-100"
//               >
//                 <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
//                 {item}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </section>

//       {/* Certifications */}
//       <section className="py-20 sm:py-24">
//         <div className="container-x">
//           <SectionHeading
//             eyebrow="Certifications & Accreditations"
//             title="Licensed, Certified, Trusted"
//             align="center"
//           />
//           <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
//             {certifications.map((c) => (
//               <div
//                 key={c.label}
//                 className="rounded-lg border border-ink-100 bg-white p-7 text-center shadow-card"
//               >
//                 <Award className="mx-auto h-9 w-9 text-brand-600" />
//                 <p className="mt-5 font-display text-base font-bold uppercase tracking-wide text-ink-900">
//                   {c.label}
//                 </p>
//                 <p className="mt-2 text-xs text-ink-500">{c.detail}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Clients */}
//       <section className="bg-ink-50 py-20 sm:py-24">
//         <div className="container-x">
//           <SectionHeading
//             eyebrow="Our Clients"
//             title="Trusted By Leading Companies"
//             text="A selection of the contractors, factories and engineering firms we serve across the UAE."
//             align="center"
//           />
//           <div className="mt-14 flex flex-wrap justify-center gap-3">
//             {clients.map((client) => (
//               <span
//                 key={client}
//                 className="inline-flex items-center gap-2 rounded-full border border-ink-200 bg-white px-5 py-2.5 text-sm font-medium text-ink-700"
//               >
//                 <Users className="h-3.5 w-3.5 text-brand-600" />
//                 {client}
//               </span>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Industries */}
//       <section className="py-20 sm:py-24">
//         <div className="container-x">
//           <SectionHeading
//             eyebrow="Sectors"
//             title="Industries We Support"
//             text="Our equipment and crews are deployed across the following sectors throughout the UAE."
//             align="center"
//           />
//           <div className="mt-12 flex flex-wrap justify-center gap-3">
//             {industries.map((item) => (
//               <span
//                 key={item}
//                 className="rounded-full border border-ink-200 bg-white px-6 py-3 text-sm font-semibold uppercase tracking-wide text-ink-700"
//               >
//                 {item}
//               </span>
//             ))}
//           </div>
//         </div>
//       </section>

//       <CtaBand />
//     </>
//   );
// }

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Award, Users, Target } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Stats from "@/components/Stats";
import CtaBand from "@/components/CtaBand";
import {
  site,
  whyUs,
  industries,
  principles,
  clients,
  certifications,
  vision,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "ISO 9001:2015 certified Abu Dhabi transport and recovery company operating since 2007. Heavy equipment rental, tippers, low beds, buses, materials and oil field services.",
};

const commercialActivities = [
  "Transport of materials — assembly light trucks",
  "Towing and transporting of broken down cars without repair",
  "Lifting and loading machines and equipment renting",
  "Transport of materials — assembly heavy trucks",
  "Heavy machines and equipment renting",
  "Onshore and offshore oil and gas fields and facilities services",
  "Passengers transportation via rented buses",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Our Company"
        title="Reliable Transport & Lifting Since 2007"
        text="Mohamed Salem Al Shamsi General Transport & Recovery is an Abu Dhabi based transportation services company serving the UAE for nearly two decades."
        image="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=2000&q=80"
      />

      {/* Who we are */}
      <section className="py-20 sm:py-24">
        <div className="container-x grid items-start gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Who We Are"
              title="Built on Discipline, Safety and Delivery"
            />
            <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-500">
              <p>
                Since {site.establishedDate}, we have provided reliable and
                efficient transportation solutions from our base in Musaffah
                Industrial 5, Abu Dhabi. Our fleet covers mobile cranes, wheel
                loaders, boom loaders, tipper trucks, low bed trailers,
                passenger buses and recovery vehicles.
              </p>
              <p>
                We have extensive experience working in oil field operations and
                Command of Military Works — environments that demand strict
                safety discipline, punctuality and confidentiality. Our
                operations are licensed by Abu Dhabi DED and the Ministry of
                Energy &amp; Infrastructure, and certified to ISO 9001:2015.
              </p>
              <p>
                Our mission is to provide our customers with safe, timely and
                cost-effective service, supported by certified operators and a
                well-maintained fleet.
              </p>
            </div>

            <p className="mt-8 border-l-4 border-brand-500 pl-5 font-display text-xl font-semibold uppercase tracking-wide text-ink-900">
              &ldquo;{site.tagline}&rdquo;
            </p>

            <Link href="/contact" className="btn-primary text-ink-100  mt-9">
              Work With Us <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div className="relative aspect-[3/4] overflow-hidden rounded-lg sm:mt-10">
              <Image
                src="/assets/crane1.png"
                alt="Crane lifting operations"
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
              <Image
                src="/assets/truck.jpg"
                alt="Heavy transport truck"
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <Stats />

      {/* Vision */}
      <section className="py-20 sm:py-24">
        <div className="container-x">
          <div className="mx-auto max-w-4xl rounded-lg border border-ink-100 bg-white p-9 shadow-card sm:p-12">
            <div className="flex items-center gap-3">
              <Target className="h-7 w-7 text-brand-600" />
              <span className="eyebrow">Our Vision</span>
            </div>
            <p className="mt-6 text-lg leading-relaxed text-ink-700 sm:text-xl">
              {vision}
            </p>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="bg-ink-50 py-20 sm:py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="Our Principles"
            title="The Standards We Operate By"
            text="Safety is always our top priority. These principles guide every job we take on."
            align="center"
          />

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {principles.map((item) => (
              <div
                key={item.title}
                className="rounded-lg border border-ink-100 bg-white p-7 shadow-card"
              >
                <CheckCircle2 className="h-7 w-7 text-brand-600" />
                <h3 className="mt-5 text-lg text-ink-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-20 sm:py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Reasons Clients Keep Coming Back"
            align="center"
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {whyUs.map((item) => (
              <div
                key={item.title}
                className="rounded-lg border border-ink-100 bg-white p-7 shadow-card"
              >
                <CheckCircle2 className="h-7 w-7 text-brand-600" />
                <h3 className="mt-5 text-lg text-ink-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Licensed activities */}
      <section className="bg-ink-900 py-20 sm:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:items-start">
          <SectionHeading
            light
            eyebrow="Licensed Activities"
            title="Approved Commercial Activities"
            text={`Authorised by Abu Dhabi Department of Economic Development under Commercial License ${site.license.commercial}.`}
          />
          <ul className="space-y-3">
            {commercialActivities.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-md border border-white/10 bg-white/5 px-5 py-4 text-sm text-ink-100"
              >
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 sm:py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="Certifications & Accreditations"
            title="Licensed, Certified, Trusted"
            align="center"
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {certifications.map((c) => (
              <div
                key={c.label}
                className="rounded-lg border border-ink-100 bg-white p-7 text-center shadow-card"
              >
                <Award className="mx-auto h-9 w-9 text-brand-600" />
                <p className="mt-5 font-display text-base font-bold uppercase tracking-wide text-ink-900">
                  {c.label}
                </p>
                <p className="mt-2 text-xs text-ink-500">{c.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="bg-ink-50 py-20 sm:py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="Our Clients"
            title="Trusted By Leading Companies"
            text="A selection of the contractors, factories and engineering firms we serve across the UAE."
            align="center"
          />
          <div className="mt-14 flex flex-wrap justify-center gap-3">
            {clients.map((client) => (
              <span
                key={client}
                className="inline-flex items-center gap-2 rounded-full border border-ink-200 bg-white px-5 py-2.5 text-sm font-medium text-ink-700"
              >
                <Users className="h-3.5 w-3.5 text-brand-600" />
                {client}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Industries — now image grid */}
      <section className="py-20 sm:py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="Sectors"
            title="Industries We Support"
            text="Our equipment and crews are deployed across the following sectors throughout the UAE."
            align="center"
          />
          <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {industries.map((item) => (
              <div
                key={item.name}
                className="group relative overflow-hidden rounded-lg border border-ink-100 shadow-card"
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-ink-950/20 to-transparent" />
                </div>
                <p className="absolute bottom-0 left-0 right-0 p-4 font-display text-sm font-bold uppercase tracking-wide text-white">
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
