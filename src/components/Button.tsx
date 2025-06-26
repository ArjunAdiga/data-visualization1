import React from 'react';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  styles?:React.CSSProperties
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  onClick,
  disabled = false,
  className = '',
  type = 'button',
  styles,
}) => {
  const baseStyles = 'h-10 px-4 rounded-md text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center';

  const variantStyles = {
    primary: 'bg-lime-500 text-black hover:bg-lime-400 focus:ring-lime-500 active:bg-lime-600',
    secondary: 'bg-[#2C2E334D] text-white border  hover:bg-gray-600 hover:border-gray-500 focus:ring-gray-500 active:bg-gray-800'
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      style={{border : "1px solid #5A5A5A",borderRadius:"4px",fontWeight:600,fontSize:"16px",display:"flex", alignItems:"center" ,...styles}}
    >
      {children}
    </button>
  );
};

export default Button;

