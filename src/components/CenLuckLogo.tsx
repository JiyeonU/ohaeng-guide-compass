export function CenLuckLogo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <span className="relative grid size-9 shrink-0 place-items-center rounded-full border border-gold/60 bg-primary/5">
        <span className="absolute inset-1 rounded-full border border-celadon/40" />
        <span className="font-display text-[13px] font-semibold text-primary">C</span>
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-base font-semibold tracking-[0.22em] text-primary">
          CENLUCK
        </span>
        <span className="mt-1 text-[10px] tracking-[0.18em] text-muted-foreground uppercase">
          Seoul · Busan
        </span>
      </span>
    </span>
  );
}
