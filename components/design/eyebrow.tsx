import { cn } from '@/lib/utils';

type EyebrowProps = React.ComponentProps<'p'>;

export function Eyebrow({
  className,
  children,
  ...props
}: Readonly<EyebrowProps>) {
  return (
    <p
      className={cn(
        'font-mono text-caption font-medium tracking-[0.18em] text-ink-muted uppercase',
        className,
      )}
      {...props}
    >
      {children}
    </p>
  );
}
