import { cn } from '@/lib/utils';

interface StatProps extends React.ComponentProps<'div'> {
  value: React.ReactNode;
  label: React.ReactNode;
}

export function Stat({
  value,
  label,
  className,
  ...props
}: Readonly<StatProps>) {
  return (
    <div className={cn('flex flex-col gap-1.5', className)} {...props}>
      <span className="font-mono text-heading tracking-tight text-ink tabular-nums">
        {value}
      </span>
      <span className="font-mono text-caption tracking-[0.14em] text-ink-muted uppercase">
        {label}
      </span>
    </div>
  );
}
