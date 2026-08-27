export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
}) {
  const alignClass = align === "right" ? "items-start text-right" : "items-center text-center";
  return (
    <div className={`flex flex-col ${alignClass} gap-4 max-w-2xl ${align === "center" ? "mx-auto" : ""}`}>
      {eyebrow && (
        <span
          className={`inline-flex items-center gap-2 text-sm font-bold tracking-wide ${
            light ? "text-white/80" : "text-accent"
          }`}
        >
          <span className="inline-block h-2 w-2 rotate-45 bg-current rounded-[3px]" />
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-display font-extrabold leading-tight text-3xl sm:text-4xl ${
          light ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`text-base sm:text-lg leading-relaxed ${light ? "text-white/75" : "text-ink-soft"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
