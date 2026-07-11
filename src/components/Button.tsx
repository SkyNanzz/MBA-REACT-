import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'gold' | 'outline' | 'outline-gold' | 'white';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  disabled?: boolean;
  ariaLabel?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  type = 'button',
  className = '',
  disabled = false,
  ariaLabel,
}) => {
  const baseClass = `btn btn-${variant}${size !== 'md' ? ` btn-${size}` : ''}${className ? ` ${className}` : ''}`;

  if (href) {
    return (
      <a
        href={href}
        className={baseClass}
        aria-label={ariaLabel}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={baseClass}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};

export default React.memo(Button);
