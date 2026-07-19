import { cn } from '@/lib/utils';

type LogoProps = Readonly<{
  className?: string;
  variant?: 'wordmark' | 'mark';
  title?: string;
}>;

const serifStyle = {
  fontFamily: 'var(--font-instrument-serif), ui-serif, Georgia, serif',
  letterSpacing: '-0.03em',
} as const;

export function Logo({
  className,
  variant = 'wordmark',
  title = 'Craftbit',
}: LogoProps) {
  if (variant === 'mark') {
    return (
      <svg
        viewBox="0 0 32 32"
        className={cn('size-8 shrink-0', className)}
        role="img"
        aria-label={title}
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>{title}</title>
        <text
          x="16"
          y="23"
          textAnchor="middle"
          fill="currentColor"
          style={{ ...serifStyle, fontSize: 26 }}
        >
          C
        </text>
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 124 32"
      className={cn('h-7 w-auto shrink-0', className)}
      role="img"
      aria-label={title}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <text x="0" y="24" fill="currentColor" style={{ ...serifStyle, fontSize: 28 }}>
        Craftbit
      </text>
    </svg>
  );
}
