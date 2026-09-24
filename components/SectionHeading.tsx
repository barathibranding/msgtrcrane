type Props = {
  eyebrow?: string;
  title: string;
  text?: string;
  align?: "left" | "center";
  light?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  text,
  align = "left",
  light = false,
}: Props) {
  const centered = align === "center";

  return (
    <div
      className={`${centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}`}
    >
      {eyebrow && (
        <span className={light ? "eyebrow-light" : "eyebrow"}>{eyebrow}</span>
      )}
      <h2
        className={`mt-3 text-3xl leading-[1.1] sm:text-4xl lg:text-[42px] ${
          light ? "text-white" : "text-ink-900"
        }`}
      >
        {title}
      </h2>
      {text && (
        <p
          className={`mt-4 text-base leading-relaxed ${light ? "text-ink-300" : "text-ink-500"}`}
        >
          {text}
        </p>
      )}
    </div>
  );
}
