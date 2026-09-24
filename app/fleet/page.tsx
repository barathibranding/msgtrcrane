// // import type { Metadata } from "next";
// // import Image from "next/image";
// // import Link from "next/link";
// // import { ArrowRight, Truck } from "lucide-react";
// // import PageHero from "@/components/PageHero";
// // import SectionHeading from "@/components/SectionHeading";
// // import CtaBand from "@/components/CtaBand";
// // import { fleet, site } from "@/lib/site";

// // export const metadata: Metadata = {
// //   title: "Our Fleet",
// //   description:
// //     "Mobile cranes from 25 to 500 ton, lowbed and flatbed trailers, recovery trucks and manlifts available for hire in Abu Dhabi, UAE.",
// // };

// // const gallery = [
// //   "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
// //   "https://images.unsplash.com/photo-1590496793929-36417d3117de?auto=format&fit=crop&w=1200&q=80",
// //   "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80",
// //   "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
// // ];

// // export default function FleetPage() {
// //   return (
// //     <>
// //       <PageHero
// //         eyebrow="Our Fleet"
// //         title="Well-Maintained Equipment, Ready to Mobilise"
// //         text="Cranes, trailers, recovery trucks and support equipment available for short-term hire, long-term contracts and emergency call-out."
// //         image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80"
// //       />

// //       <section className="py-20 sm:py-24">
// //         <div className="container-x">
// //           <SectionHeading
// //             eyebrow="Equipment Range"
// //             title="What We Have Available"
// //             text="Capacities shown are indicative. Contact us with your exact requirement for confirmed availability."
// //             align="center"
// //           />

// //           <div className="mt-14 overflow-hidden rounded-lg border border-ink-100 shadow-card">
// //             <table className="w-full text-left text-sm">
// //               <thead className="bg-ink-900 text-white">
// //                 <tr>
// //                   <th className="px-6 py-4 font-display text-xs font-bold uppercase tracking-[0.16em]">
// //                     Equipment
// //                   </th>
// //                   <th className="px-6 py-4 font-display text-xs font-bold uppercase tracking-[0.16em]">
// //                     Capacity
// //                   </th>
// //                   <th className="hidden px-6 py-4 font-display text-xs font-bold uppercase tracking-[0.16em] md:table-cell">
// //                     Typical Use
// //                   </th>
// //                 </tr>
// //               </thead>
// //               <tbody className="divide-y divide-ink-100 bg-white">
// //                 {fleet.map((item) => (
// //                   <tr key={item.name} className="transition hover:bg-ink-50">
// //                     <td className="px-6 py-5">
// //                       <span className="flex items-center gap-3 font-semibold text-ink-900">
// //                         <Truck className="h-4 w-4 shrink-0 text-brand-600" />
// //                         {item.name}
// //                       </span>
// //                       <span className="mt-1 block text-xs text-ink-500 md:hidden">
// //                         {item.use}
// //                       </span>
// //                     </td>
// //                     <td className="whitespace-nowrap px-6 py-5 font-semibold text-brand-700">
// //                       {item.capacity}
// //                     </td>
// //                     <td className="hidden px-6 py-5 text-ink-500 md:table-cell">
// //                       {item.use}
// //                     </td>
// //                   </tr>
// //                 ))}
// //               </tbody>
// //             </table>
// //           </div>

// //           <p className="mt-6 text-center text-sm text-ink-500">
// //             Need a specific capacity or attachment?{" "}
// //             <a
// //               href={site.phonePrimaryHref}
// //               className="font-semibold text-brand-700 hover:underline"
// //             >
// //               Call {site.phonePrimary}
// //             </a>
// //           </p>
// //         </div>
// //       </section>

// //       <section className="bg-ink-50 py-20 sm:py-24">
// //         <div className="container-x">
// //           <SectionHeading
// //             eyebrow="Gallery"
// //             title="On Site & On the Road"
// //             align="center"
// //           />
// //           <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
// //             {gallery.map((src, i) => (
// //               <div
// //                 key={src}
// //                 className={`relative overflow-hidden rounded-lg ${i % 2 === 1 ? "lg:mt-8" : ""}`}
// //               >
// //                 <div className="relative aspect-[4/5]">
// //                   <Image
// //                     src={src}
// //                     alt="Company fleet and equipment"
// //                     fill
// //                     sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
// //                     className="object-cover transition duration-500 hover:scale-105"
// //                   />
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       <CtaBand />
// //     </>
// //   );
// // }

// import type { Metadata } from "next";
// import Image from "next/image";
// import { Truck, Award } from "lucide-react";
// import PageHero from "@/components/PageHero";
// import SectionHeading from "@/components/SectionHeading";
// import CtaBand from "@/components/CtaBand";
// import { fleet, materials, site } from "@/lib/site";

// export const metadata: Metadata = {
//   title: "Our Fleet",
//   description:
//     "Mobile cranes (Kato), wheel loaders, boom loaders, 3-axle tipper trucks, low bed trailers, passenger buses and recovery trucks available for hire in Abu Dhabi, UAE.",
// };

// const gallery = [
//   "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
//   "https://images.unsplash.com/photo-1590496793929-36417d3117de?auto=format&fit=crop&w=1200&q=80",
//   "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80",
//   "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
// ];

// export default function FleetPage() {
//   return (
//     <>
//       <PageHero
//         eyebrow="Our Fleet"
//         title="Well-Maintained Equipment, Ready to Mobilise"
//         text="Cranes, wheel loaders, boom loaders, tipper trucks, low beds, buses and recovery vehicles available for short-term hire, long-term contracts and emergency call-out."
//         image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80"
//       />

//       {/* Fleet table */}
//       <section className="py-20 sm:py-24">
//         <div className="container-x">
//           <SectionHeading
//             eyebrow="Equipment Range"
//             title="What We Have Available"
//             text="Capacities shown are indicative. Contact us with your exact requirement for confirmed availability."
//             align="center"
//           />

//           <div className="mt-14 overflow-hidden rounded-lg border border-ink-100 shadow-card">
//             <table className="w-full text-left text-sm">
//               <thead className="bg-ink-900 text-white">
//                 <tr>
//                   <th className="px-6 py-4 font-display text-xs font-bold uppercase tracking-[0.16em]">
//                     Equipment
//                   </th>
//                   <th className="px-6 py-4 font-display text-xs font-bold uppercase tracking-[0.16em]">
//                     Capacity / Type
//                   </th>
//                   <th className="hidden px-6 py-4 font-display text-xs font-bold uppercase tracking-[0.16em] md:table-cell">
//                     Typical Use
//                   </th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-ink-100 bg-white">
//                 {fleet.map((item) => (
//                   <tr key={item.name} className="transition hover:bg-ink-50">
//                     <td className="px-6 py-5">
//                       <span className="flex items-center gap-3 font-semibold text-ink-900">
//                         <Truck className="h-4 w-4 shrink-0 text-brand-600" />
//                         {item.name}
//                       </span>
//                       <span className="mt-1 block text-xs text-ink-500 md:hidden">
//                         {item.use}
//                       </span>
//                     </td>
//                     <td className="whitespace-nowrap px-6 py-5 font-semibold text-brand-700">
//                       {item.capacity}
//                     </td>
//                     <td className="hidden px-6 py-5 text-ink-500 md:table-cell">
//                       {item.use}
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>

//           <p className="mt-6 text-center text-sm text-ink-500">
//             Need a specific capacity or attachment?{" "}
//             <a
//               href={site.phonePrimaryHref}
//               className="font-semibold text-brand-700 hover:underline"
//             >
//               Call {site.phonePrimary}
//             </a>
//           </p>
//         </div>
//       </section>

//       {/* Materials supply */}
//       <section className="bg-ink-50 py-20 sm:py-24">
//         <div className="container-x">
//           <SectionHeading
//             eyebrow="Materials Supply"
//             title="Materials We Deliver"
//             text="Our tipper fleet delivers these materials directly to your site."
//             align="center"
//           />
//           <div className="mt-12 flex flex-wrap justify-center gap-3">
//             {materials.map((material) => (
//               <span
//                 key={material}
//                 className="rounded-full border border-ink-200 bg-white px-6 py-3 text-sm font-semibold uppercase tracking-wide text-ink-700"
//               >
//                 {material}
//               </span>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ISO banner */}
//       <section className="py-16">
//         <div className="container-x">
//           <div className="flex flex-col items-center gap-5 rounded-lg border border-brand-200 bg-brand-50 p-8 text-center sm:flex-row sm:justify-center sm:text-left">
//             <Award className="h-10 w-10 shrink-0 text-brand-600" />
//             <div>
//               <p className="font-display text-lg font-bold uppercase tracking-wide text-ink-900">
//                 ISO 9001:2015 Certified
//               </p>
//               <p className="mt-1 text-sm text-ink-600">
//                 Certificate No. {site.license.isoCertNo} — issued by Quality
//                 Registrar Systems (QRS). Originally registered 10 June 2013.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Gallery */}
//       <section className="bg-ink-50 py-20 sm:py-24">
//         <div className="container-x">
//           <SectionHeading
//             eyebrow="Gallery"
//             title="On Site & On the Road"
//             align="center"
//           />
//           <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
//             {gallery.map((src, i) => (
//               <div
//                 key={src}
//                 className={`relative overflow-hidden rounded-lg ${i % 2 === 1 ? "lg:mt-8" : ""}`}
//               >
//                 <div className="relative aspect-[4/5]">
//                   <Image
//                     src={src}
//                     alt="Company fleet and equipment"
//                     fill
//                     sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
//                     className="object-cover transition duration-500 hover:scale-105"
//                   />
//                 </div>
//               </div>
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
import { Award } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import FleetCard from "@/components/FleetCard";
import CtaBand from "@/components/CtaBand";
import { fleet, materials, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Fleet",
  description:
    "Mobile cranes (Kato), wheel loaders, boom loaders, 3-axle tipper trucks, low bed trailers, passenger buses and recovery trucks available for hire in Abu Dhabi, UAE.",
};

export default function FleetPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Fleet"
        title="Well-Maintained Equipment, Ready to Mobilise"
        text="Cranes, wheel loaders, boom loaders, tipper trucks, low beds, buses and recovery vehicles available for short-term hire, long-term contracts and emergency call-out."
        image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80"
      />

      {/* Fleet cards */}
      <section className="py-20 sm:py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="Equipment Range"
            title="What We Have Available"
            text="Capacities shown are indicative. Contact us with your exact requirement for confirmed availability."
            align="center"
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {fleet.map((item) => (
              <FleetCard key={item.name} item={item} />
            ))}
          </div>

          <p className="mt-12 text-center text-sm text-ink-500">
            Need a specific capacity or attachment?{" "}
            <a
              href={site.phonePrimaryHref}
              className="font-semibold text-brand-700 hover:underline"
            >
              Call {site.phonePrimary}
            </a>
          </p>
        </div>
      </section>

      {/* Materials with images */}
      <section className="bg-ink-50 py-20 sm:py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="Materials Supply"
            title="Materials We Deliver"
            text="Our tipper fleet delivers these materials directly to your site."
            align="center"
          />

          <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {materials.map((m) => (
              <div
                key={m.name}
                className="group relative overflow-hidden rounded-lg border border-ink-100 bg-white shadow-card"
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={m.image}
                    alt={m.name}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-transparent to-transparent" />
                </div>
                <p className="absolute bottom-0 left-0 right-0 p-4 font-display text-sm font-bold uppercase tracking-wide text-white">
                  {m.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ISO banner */}
      <section className="py-16">
        <div className="container-x">
          <div className="flex flex-col items-center gap-5 rounded-lg border border-brand-200 bg-brand-50 p-8 text-center sm:flex-row sm:justify-center sm:text-left">
            <Award className="h-10 w-10 shrink-0 text-brand-600" />
            <div>
              <p className="font-display text-lg font-bold uppercase tracking-wide text-ink-900">
                ISO 9001:2015 Certified
              </p>
              <p className="mt-1 text-sm text-ink-600">
                Certificate No. {site.license.isoCertNo} — issued by Quality
                Registrar Systems (QRS). Originally registered 10 June 2013.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
