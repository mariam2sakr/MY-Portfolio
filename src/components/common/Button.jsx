import { motion } from 'motion/react';
import './Button.css';

export default function Button({
  children,
  variant = 'primary',
  href,
  onClick,
  icon: Icon,
  className = '',
  ...props
}) {
  const classNames = `btn btn--${variant} ${className}`.trim();

  if (href) {
    return (
      <motion.a
        href={href}
        className={classNames}
        whileHover={{ scale: 1.03, y: -2 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: 'spring', stiffness: 400, damping: 15 }}
        {...props}
      >
        {Icon && <Icon className="btn__icon" />}
        <span>{children}</span>
      </motion.a>
    );
  }

  return (
    <motion.button
      className={classNames}
      onClick={onClick}
      whileHover={{ scale: 1.03, y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 400, damping: 15 }}
      {...props}
    >
      {Icon && <Icon className="btn__icon" />}
      <span>{children}</span>
    </motion.button>
  );
}
