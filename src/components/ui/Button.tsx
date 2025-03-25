import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  to?: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  fullWidth?: boolean;
}

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  to,
  onClick,
  className = '',
  type = 'button',
  disabled = false,
  fullWidth = false,
}: ButtonProps) => {
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-md transition-all duration-300 ease-in-out focus:outline-none';
  
  const variantClasses = {
    primary: 'bg-primary text-white hover:bg-primary/90 active:bg-primary/95',
    secondary: 'bg-secondary text-white hover:bg-secondary/90 active:bg-secondary/95',
    outline: 'bg-transparent border-2 border-primary text-primary hover:bg-primary/10 active:bg-primary/15',
    text: 'bg-transparent text-primary hover:bg-primary/10 active:bg-primary/15',
  };

  const sizeClasses = {
    sm: 'text-sm px-4 py-2',
    md: 'text-base px-6 py-3',
    lg: 'text-lg px-8 py-4',
  };

  const widthClass = fullWidth ? 'w-full' : '';
  const disabledClass = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass} ${disabledClass} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {children}
      </a>
    );
  }

  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button 
      type={type} 
      className={classes} 
      onClick={onClick} 
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;