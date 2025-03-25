import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hoverable?: boolean;
  bordered?: boolean;
  elevated?: boolean;
}

const Card = ({
  children,
  className = '',
  hoverable = false,
  bordered = false,
  elevated = false,
}: CardProps) => {
  const baseClasses = 'bg-white rounded-lg overflow-hidden';
  const hoverableClass = hoverable ? 'transform transition-transform duration-300 hover:-translate-y-2' : '';
  const borderedClass = bordered ? 'border border-gray-200' : '';
  const elevatedClass = elevated ? 'shadow-lg' : '';

  return (
    <div className={`${baseClasses} ${hoverableClass} ${borderedClass} ${elevatedClass} ${className}`}>
      {children}
    </div>
  );
};

export default Card;