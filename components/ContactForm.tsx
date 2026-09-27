// "use client";

// import { useState } from "react";
// import { Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
// import { services } from "@/lib/site";

// type Status = "idle" | "loading" | "success" | "error";

// export default function ContactForm() {
//   const [status, setStatus] = useState<Status>("idle");
//   const [error, setError] = useState("");

//   async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
//     e.preventDefault();
//     setStatus("loading");
//     setError("");

//     const form = e.currentTarget;
//     const payload = Object.fromEntries(new FormData(form).entries());

//     try {
//       const res = await fetch("/api/contact", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(payload),
//       });

//       const json = await res.json();

//       if (!res.ok) throw new Error(json.error || "Something went wrong.");

//       setStatus("success");
//       form.reset();
//     } catch (err) {
//       setError(err instanceof Error ? err.message : "Something went wrong.");
//       setStatus("error");
//     }
//   }

//   if (status === "success") {
//     return (
//       <div className="rounded-lg border border-green-200 bg-green-50 p-8 text-center">
//         <CheckCircle2 className="mx-auto h-12 w-12 text-green-600" />
//         <h3 className="mt-4 text-xl text-ink-900">Enquiry Received</h3>
//         <p className="mt-2 text-sm text-ink-600">
//           Thank you. Our team will contact you shortly. For urgent jobs, please
//           call us directly.
//         </p>
//         <button
//           type="button"
//           onClick={() => setStatus("idle")}
//           className="btn-dark mt-6"
//         >
//           Send Another Enquiry
//         </button>
//       </div>
//     );
//   }

//   return (
//     <form onSubmit={handleSubmit} className="space-y-5">
//       <div className="grid gap-5 sm:grid-cols-2">
//         <div>
//           <label htmlFor="name" className="label">
//             Full Name *
//           </label>
//           <input
//             id="name"
//             name="name"
//             required
//             className="field"
//             placeholder="Your name"
//           />
//         </div>
//         <div>
//           <label htmlFor="phone" className="label">
//             Phone *
//           </label>
//           <input
//             id="phone"
//             name="phone"
//             required
//             className="field"
//             placeholder="+971 5X XXX XXXX"
//           />
//         </div>
//       </div>

//       <div className="grid gap-5 sm:grid-cols-2">
//         <div>
//           <label htmlFor="email" className="label">
//             Email
//           </label>
//           <input
//             id="email"
//             name="email"
//             type="email"
//             className="field"
//             placeholder="you@company.com"
//           />
//         </div>
//         <div>
//           <label htmlFor="service" className="label">
//             Service Required
//           </label>
//           <select id="service" name="service" className="field" defaultValue="">
//             <option value="" disabled>
//               Select a service
//             </option>
//             {services.map((s) => (
//               <option key={s.slug} value={s.title}>
//                 {s.title}
//               </option>
//             ))}
//             <option value="Other">Other</option>
//           </select>
//         </div>
//       </div>

//       <div>
//         <label htmlFor="message" className="label">
//           Job Details *
//         </label>
//         <textarea
//           id="message"
//           name="message"
//           required
//           rows={5}
//           className="field resize-y"
//           placeholder="Load weight, equipment type, location, date required..."
//         />
//       </div>

//       {status === "error" && (
//         <p className="flex items-center gap-2 rounded-md bg-red-50 px-4 py-3 text-sm text-red-700">
//           <AlertCircle className="h-4 w-4 shrink-0" />
//           {error}
//         </p>
//       )}

//       <button
//         type="submit"
//         disabled={status === "loading"}
//         className="btn-primary w-full disabled:opacity-60"
//       >
//         {status === "loading" ? (
//           <>
//             <Loader2 className="h-4 w-4 animate-spin" /> Sending...
//           </>
//         ) : (
//           <>
//             <Send className="h-4 w-4" /> Send Enquiry
//           </>
//         )}
//       </button>

//       <p className="text-center text-xs text-ink-400">
//         For urgent requirements call {""}
//         <a href="tel:+971504116093" className="font-semibold text-brand-700">
//           +971 50 411 6093
//         </a>
//       </p>
//     </form>
//   );
// }

"use client";

import { useState } from "react";
import { Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { services } from "@/lib/site";

type Status = "idle" | "loading" | "success" | "error";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xqpalnoy";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
        return;
      }

      // Formspree returns errors in this shape:
      // { errors: [{ field: "email", message: "is invalid" }, ...] }
      const data = await res.json().catch(() => null);

      if (data && Array.isArray(data.errors) && data.errors.length > 0) {
        setError(
          data.errors.map((err: { message: string }) => err.message).join(", "),
        );
      } else {
        setError("Oops! There was a problem submitting your form.");
      }
      setStatus("error");
    } catch {
      setError("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-lg border border-green-200 bg-green-50 p-8 text-center">
        <CheckCircle2 className="mx-auto h-12 w-12 text-green-600" />
        <h3 className="mt-4 text-xl text-ink-900">Enquiry Received</h3>
        <p className="mt-2 text-sm text-ink-600">
          Thank you. Our team will contact you shortly. For urgent jobs, please
          call us directly.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="btn-dark mt-6"
        >
          Send Another Enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="label">
            Full Name *
          </label>
          <input
            id="name"
            name="name"
            required
            className="field"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="phone" className="label">
            Phone *
          </label>
          <input
            id="phone"
            name="phone"
            required
            className="field"
            placeholder="+971 5X XXX XXXX"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="label">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="field"
            placeholder="you@company.com"
          />
        </div>
        <div>
          <label htmlFor="service" className="label">
            Service Required
          </label>
          <select id="service" name="service" className="field" defaultValue="">
            <option value="" disabled>
              Select a service
            </option>
            {services.map((s) => (
              <option key={s.slug} value={s.title}>
                {s.title}
              </option>
            ))}
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="label">
          Job Details *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="field resize-y"
          placeholder="Load weight, equipment type, location, date required..."
        />
      </div>

      {/* Hidden honeypot — Formspree uses this for spam filtering */}
      <input
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        style={{ display: "none" }}
      />

      {status === "error" && (
        <p className="flex items-center gap-2 rounded-md bg-red-50 px-4 py-3 text-sm text-red-700">
          <AlertCircle className="h-4 w-4 shrink-0" />
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-primary w-full disabled:opacity-60 text-ink-100 "
      >
        {status === "loading" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Sending...
          </>
        ) : (
          <>
            <Send className="h-4 w-4 text-ink-100 " /> Send Enquiry
          </>
        )}
      </button>

      <p className="text-center text-xs text-ink-400">
        For urgent requirements call {""}
        <a href="tel:+971504116093" className="font-semibold text-brand-700">
          +971 50 411 6093
        </a>
      </p>
    </form>
  );
}
