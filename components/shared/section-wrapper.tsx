interface SectionWrapperProps extends React.ComponentProps<'section'> {
  children: React.ReactNode;
}

export default function SectionWrapper({
  children,
  className = '',
  ...props
}: Readonly<SectionWrapperProps>) {
  return (
    <section
      className={`w-full overflow-hidden px-4 sm:px-6 lg:px-8 ${className}`}
      {...props}
    >
      <div className="mx-auto w-full max-w-5xl">{children}</div>
    </section>
  );
}
