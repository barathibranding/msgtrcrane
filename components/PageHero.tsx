import Image from "next/image";

type Props = {
  eyebrow?: string;
  title: string;
  text?: string;
  image: string;
};

export default function PageHero({ eyebrow, title, text, image }: Props) {
  return (
    <section className="relative isolate overflow-hidden bg-ink-950">
      <Image
        src={image}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/90 to-ink-950/60" />

      <div className="container-x relative py-20 sm:py-24">
        <div className="max-w-3xl">
          {eyebrow && <span className="eyebrow-light">{eyebrow}</span>}
          <h1 className="mt-4 text-4xl leading-tight text-white sm:text-5xl">
            {title}
          </h1>
          {text && (
            <p className="mt-5 max-w-2xl text-lg text-ink-200">{text}</p>
          )}
        </div>
      </div>
    </section>
  );
}
