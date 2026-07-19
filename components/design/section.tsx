import { cn } from '@/lib/utils';

interface SectionProps extends React.ComponentProps<'section'> {
  containerClassName?: string;
  flush?: boolean;
}

export function Section({
  children,
  className,
  containerClassName,
  flush = false,
  ...props
}: Readonly<SectionProps>) {
  return (
    <section className={cn('section-padding w-full', className)} {...props}>
      {flush ? (
        children
      ) : (
        <div className={cn('mx-auto w-full max-w-5xl', containerClassName)}>
          {children}
        </div>
      )}
    </section>
  );
}
