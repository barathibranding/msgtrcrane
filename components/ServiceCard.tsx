// // import Link from "next/link";
// // import {
// //   Construction,
// //   Truck,
// //   Wrench,
// //   Container,
// //   Fuel,
// //   HardHat,
// //   Check,
// //   ArrowRight,
// // } from "lucide-react";
// // import type { ServiceItem } from "@/lib/site";

// // const iconMap = {
// //   crane: Construction,
// //   truck: Truck,
// //   wrench: Wrench,
// //   container: Container,
// //   fuel: Fuel,
// //   hardhat: HardHat,
// // };

// // export default function ServiceCard({ service }: { service: ServiceItem }) {
// //   const Icon = iconMap[service.icon];

// //   return (
// //     <article className="group relative flex h-full flex-col rounded-lg border border-ink-100 bg-white p-7 shadow-card transition duration-300 hover:-translate-y-1 hover:border-brand-300">
// //       <span className="grid h-14 w-14 place-items-center rounded-md bg-ink-900 text-brand-400 transition group-hover:bg-brand-500 group-hover:text-ink-900">
// //         <Icon className="h-7 w-7" />
// //       </span>

// //       <h3 className="mt-6 text-xl text-ink-900">{service.title}</h3>
// //       <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-500">
// //         {service.description}
// //       </p>

// //       <ul className="mt-5 space-y-2">
// //         {service.points.map((p) => (
// //           <li key={p} className="flex items-start gap-2 text-sm text-ink-600">
// //             <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
// //             {p}
// //           </li>
// //         ))}
// //       </ul>

// //       <Link
// //         href="/contact"
// //         className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-wider text-brand-700 transition group-hover:gap-3"
// //       >
// //         Enquire Now <ArrowRight className="h-4 w-4" />
// //       </Link>
// //     </article>
// //   );
// // }

// import Link from "next/link";
// import {
//   Construction,
//   Truck,
//   Wrench,
//   Container,
//   Fuel,
//   Bus,
//   Package,
//   Check,
//   ArrowRight,
// } from "lucide-react";
// import type { ServiceItem } from "@/lib/site";

// const iconMap = {
//   crane: Construction,
//   truck: Truck,
//   wrench: Wrench,
//   container: Container,
//   fuel: Fuel,
//   bus: Bus,
//   package: Package,
// };

// export default function ServiceCard({ service }: { service: ServiceItem }) {
//   const Icon = iconMap[service.icon];

//   return (
//     <article className="group relative flex h-full flex-col rounded-lg border border-ink-100 bg-white p-7 shadow-card transition duration-300 hover:-translate-y-1 hover:border-brand-300">
//       <span className="grid h-14 w-14 place-items-center rounded-md bg-ink-900 text-brand-400 transition group-hover:bg-brand-500 group-hover:text-ink-900">
//         <Icon className="h-7 w-7" />
//       </span>

//       <h3 className="mt-6 text-xl text-ink-900">{service.title}</h3>
//       <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-500">
//         {service.description}
//       </p>

//       <ul className="mt-5 space-y-2">
//         {service.points.map((p) => (
//           <li key={p} className="flex items-start gap-2 text-sm text-ink-600">
//             <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
//             {p}
//           </li>
//         ))}
//       </ul>

//       <Link
//         href="/contact"
//         className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-wider text-brand-700 transition group-hover:gap-3"
//       >
//         Enquire Now <ArrowRight className="h-4 w-4" />
//       </Link>
//     </article>
//   );
// }

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import type { ServiceItem } from "@/lib/site";

export default function ServiceCard({ service }: { service: ServiceItem }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-ink-100 bg-white shadow-card transition duration-300 hover:-translate-y-1 hover:border-brand-300">
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden bg-ink-100">
        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-ink-950/10 to-transparent" />
        <span className="absolute bottom-0 left-0 right-0 p-5 font-display text-lg font-bold uppercase tracking-wide text-white drop-shadow-lg">
          {service.title}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-6">
        <p className="text-sm leading-relaxed text-ink-500">
          {service.description}
        </p>

        <ul className="mt-5 space-y-2">
          {service.points.map((p) => (
            <li key={p} className="flex items-start gap-2 text-sm text-ink-600">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
              {p}
            </li>
          ))}
        </ul>

        <Link
          href="/contact"
          className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-wider text-brand-700 transition group-hover:gap-3"
        >
          Enquire Now <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}
