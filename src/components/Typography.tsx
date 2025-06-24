interface TypographyProps {
  variant: 'h1' | 'h2' | 'label1' | 'label2';
  children: React.ReactNode;
}

const variantStyles: Record<string, string> = {
  h1: 'text-white text-4xl font-bold',
  h2: 'text-lg font-semibold text-white',
  label1: 'text-base text-white',
  label2: 'text-sm text-white',
};

export default function Typography({ variant, children }: TypographyProps) {
  return <div className={variantStyles[variant]}>{children}</div>;
}