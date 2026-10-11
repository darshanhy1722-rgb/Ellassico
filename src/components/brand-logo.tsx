type BrandLogoProps = {
  className?: string;
  markClassName?: string;
  textClassName?: string;
};

export function BrandLogo({ className = "", markClassName = "h-9 w-9", textClassName = "" }: BrandLogoProps) {
  return (
    <span className={["inline-flex items-center gap-3", className].join(" ")}>
      <img src="/logo-mark.png" alt="" width={80} height={80} className={["shrink-0 rounded-full", markClassName].join(" ")} />
      <span className={["leading-none", textClassName].join(" ")}>
        ElClassico<sup className="text-[0.5em] font-semibold align-super ml-0.5">™</sup>
        <span className="sr-only"> Designs</span>
      </span>
    </span>
  );
}
