// // import type { Metadata } from "next";
// // import PageHero from "@/components/PageHero";
// // import SectionHeading from "@/components/SectionHeading";
// // import ServiceCard from "@/components/ServiceCard";
// // import CtaBand from "@/components/CtaBand";
// // import ContactForm from "@/components/ContactForm";
// // import { services } from "@/lib/site";

// // export const metadata: Metadata = {
// //   title: "Services",
// //   description:
// //     "Crane rental, heavy equipment transport, vehicle recovery, general transport, oil field support and military works support in Abu Dhabi, UAE.",
// // };

// // export default function ServicesPage() {
// //   return (
// //     <>
// //       <PageHero
// //         eyebrow="Our Services"
// //         title="Lifting, Transport & Recovery Services"
// //         text="A complete range of heavy transport solutions delivered with certified operators and a maintained fleet."
// //         image="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=2000&q=80"
// //       />

// //       <section className="py-20 sm:py-24">
// //         <div className="container-x">
// //           <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
// //             {services.map((service) => (
// //               <ServiceCard key={service.slug} service={service} />
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       <section className="bg-ink-50 py-20 sm:py-24">
// //         <div className="container-x grid gap-14 lg:grid-cols-2 lg:items-start">
// //           <div>
// //             <SectionHeading
// //               eyebrow="Custom Requirements"
// //               title="Need Something Not Listed?"
// //               text="We handle project-specific lifting and transport requirements, including long-term contracts and dedicated equipment allocation. Send us the details and we will put together a solution."
// //             />

// //             <ul className="mt-8 space-y-4 text-sm text-ink-600">
// //               {[
// //                 "Contract lifting for long-term projects",
// //                 "Plant shutdown and turnaround support",
// //                 "Abnormal load permits and route planning",
// //                 "Dedicated equipment and operator allocation",
// //                 "Site-to-site equipment relocation",
// //                 "Emergency 24/7 recovery call-out",
// //               ].map((item) => (
// //                 <li key={item} className="flex items-start gap-3">
// //                   <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
// //                   {item}
// //                 </li>
// //               ))}
// //             </ul>
// //           </div>

// //           <div className="rounded-lg border border-ink-100 bg-white p-7 shadow-card sm:p-9">
// //             <h3 className="text-2xl text-ink-900">Request a Quotation</h3>
// //             <p className="mt-2 text-sm text-ink-500">
// //               Share your load details and we will respond with availability and
// //               rates.
// //             </p>
// //             <div className="mt-7">
// //               <ContactForm />
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       <CtaBand />
// //     </>
// //   );
// // }

// import type { Metadata } from "next";
// import { Package, Check } from "lucide-react";
// import PageHero from "@/components/PageHero";
// import SectionHeading from "@/components/SectionHeading";
// import ServiceCard from "@/components/ServiceCard";
// import CtaBand from "@/components/CtaBand";
// import ContactForm from "@/components/ContactForm";
// import { services, materials } from "@/lib/site";

// export const metadata: Metadata = {
//   title: "Services",
//   description:
//     "Heavy equipment rental, tipper trucks, low bed trailers, passenger buses, construction materials supply, vehicle recovery and oil field services in Abu Dhabi, UAE.",
// };

// export default function ServicesPage() {
//   return (
//     <>
//       <PageHero
//         eyebrow="Our Services"
//         title="Lifting, Transport, Materials & Recovery"
//         text="A complete range of transport solutions delivered with certified operators, a maintained fleet and ISO 9001:2015 quality management."
//         image="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=2000&q=80"
//       />

//       {/* Services grid */}
//       <section className="py-20 sm:py-24">
//         <div className="container-x">
//           <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//             {services.map((service) => (
//               <ServiceCard key={service.slug} service={service} />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Materials */}
//       <section className="bg-ink-50 py-20 sm:py-24">
//         <div className="container-x">
//           <SectionHeading
//             eyebrow="Materials Supply"
//             title="Construction Materials Delivered to Site"
//             text="We supply a comprehensive range of road and construction materials directly to contracting companies across the UAE."
//             align="center"
//           />

//           <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
//             {materials.map((material) => (
//               <div
//                 key={material}
//                 className="flex items-center gap-3 rounded-lg border border-ink-100 bg-white px-5 py-5 shadow-card"
//               >
//                 <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-brand-500 text-ink-900">
//                   <Package className="h-5 w-5" />
//                 </span>
//                 <span className="font-semibold text-ink-800">{material}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Custom requirements */}
//       <section className="py-20 sm:py-24">
//         <div className="container-x grid gap-14 lg:grid-cols-2 lg:items-start">
//           <div>
//             <SectionHeading
//               eyebrow="Custom Requirements"
//               title="Need Something Not Listed?"
//               text="We handle project-specific lifting and transport requirements, including long-term contracts and dedicated equipment allocation. Send us the details and we will put together a solution."
//             />

//             <ul className="mt-8 space-y-4 text-sm text-ink-600">
//               {[
//                 "Contract lifting for long-term projects",
//                 "Plant shutdown and turnaround support",
//                 "Abnormal load permits and route planning",
//                 "Dedicated equipment and operator allocation",
//                 "Site-to-site equipment relocation",
//                 "Emergency 24/7 recovery call-out",
//               ].map((item) => (
//                 <li key={item} className="flex items-start gap-3">
//                   <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
//                   {item}
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div className="rounded-lg border border-ink-100 bg-white p-7 shadow-card sm:p-9">
//             <h3 className="text-2xl text-ink-900">Request a Quotation</h3>
//             <p className="mt-2 text-sm text-ink-500">
//               Share your load details and we will respond with availability and
//               rates.
//             </p>
//             <div className="mt-7">
//               <ContactForm />
//             </div>
//           </div>
//         </div>
//       </section>

//       <CtaBand />
//     </>
//   );
// }

import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import CtaBand from "@/components/CtaBand";
import ContactForm from "@/components/ContactForm";
import { services, materials } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Heavy equipment rental, tipper trucks, low bed trailers, passenger buses, construction materials supply, vehicle recovery and oil field services in Abu Dhabi, UAE.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Lifting, Transport, Materials & Recovery"
        text="A complete range of transport solutions delivered with certified operators, a maintained fleet and ISO 9001:2015 quality management."
        image="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=2000&q=80"
      />

      {/* Services grid — image cards */}
      <section className="py-20 sm:py-24">
        <div className="container-x">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Materials grid — image tiles */}
      <section className="bg-ink-50 py-20 sm:py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="Materials Supply"
            title="Construction Materials Delivered to Site"
            text="We supply a comprehensive range of road and construction materials directly to contracting companies across the UAE."
            align="center"
          />

          <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {materials.map((m) => (
              <div
                key={m.name}
                className="group relative overflow-hidden rounded-lg border border-ink-100 shadow-card"
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

      {/* Custom requirements */}
      <section className="py-20 sm:py-24">
        <div className="container-x grid gap-14 lg:grid-cols-2 lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Custom Requirements"
              title="Need Something Not Listed?"
              text="We handle project-specific lifting and transport requirements, including long-term contracts and dedicated equipment allocation."
            />

            <ul className="mt-8 space-y-4 text-sm text-ink-600">
              {[
                "Contract lifting for long-term projects",
                "Plant shutdown and turnaround support",
                "Abnormal load permits and route planning",
                "Dedicated equipment and operator allocation",
                "Site-to-site equipment relocation",
                "Emergency 24/7 recovery call-out",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-lg border border-ink-100 bg-white p-7 shadow-card sm:p-9">
            <h3 className="text-2xl text-ink-900">Request a Quotation</h3>
            <p className="mt-2 text-sm text-ink-500">
              Share your load details and we will respond with availability and
              rates.
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
