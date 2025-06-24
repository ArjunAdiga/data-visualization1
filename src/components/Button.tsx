interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'primary' | 'secondary';
  children: React.ReactNode;
  styles?:React.CSSProperties
}

const variantStyles = {
  primary: 'text-white',
  secondary: 'bg-gray-200 text-black hover:bg-gray-300',
};

export default function Button({ variant = 'primary', children, styles  }: ButtonProps) {
  return (
    <button className={`px-4 py-2 rounded ${variantStyles[variant]}`} style={{...styles,backgroundColor : variant === "primary" ? "#5A5A5A"  :""}}>
      {children}
    </button>
  );
}