import React, { useState, useCallback, useRef } from 'react';

interface Ripple {
  id: number;
  x: number;
  y: number;
  size: number;
}

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
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const counterRef = useRef(0);
  const btnRef = useRef<HTMLButtonElement | HTMLAnchorElement>(null);

  const createRipple = useCallback(
    (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
      const btn = btnRef.current;
      if (!btn || disabled) return;

      const rect = btn.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      counterRef.current += 1;
      const id = counterRef.current;

      const newRipple: Ripple = { id, x, y, size };
      setRipples((prev) => [...prev, newRipple]);

      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== id));
      }, 600);
    },
    [disabled]
  );

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
      createRipple(e);
      onClick?.();
    },
    [createRipple, onClick]
  );

  const baseClass = `btn btn-${variant}${size !== 'md' ? ` btn-${size}` : ''}${className ? ` ${className}` : ''}`;

  const rippleElements = ripples.map((ripple) => (
    <span
      key={ripple.id}
      className="btn-ripple"
      style={{
        left: ripple.x,
        top: ripple.y,
        width: ripple.size,
        height: ripple.size,
      }}
    />
  ));

  if (href) {
    return (
      <a
        ref={btnRef as React.Ref<HTMLAnchorElement>}
        href={href}
        className={`${baseClass} btn-ripple-container`}
        aria-label={ariaLabel}
        onClick={handleClick}
      >
        {children}
        {rippleElements}
      </a>
    );
  }

  return (
    <button
      ref={btnRef as React.Ref<HTMLButtonElement>}
      type={type}
      onClick={handleClick}
      className={`${baseClass} btn-ripple-container`}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {children}
      {rippleElements}
    </button>
  );
};

export default React.memo(Button);
