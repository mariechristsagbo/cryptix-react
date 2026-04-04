import { Eyebrow } from "./Eyebrow";

export function SectionHeading({ eyebrow, title, description, centered = false }) {
  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[#f5f5f5] sm:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-[#b0b0b0] sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
