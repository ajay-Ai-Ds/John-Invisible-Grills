import React from "react";
import Link from "next/link";
import { motion, HTMLMotionProps } from "framer-motion";

interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onDrag" | "onDragStart" | "onDragEnd" | "onAnimationStart"> {
  variant?: "primary" | "secondary";
  href?: string;
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
}

export default function Button({
  variant = "primary",
  href,
  children,
  className = "",
  icon,
  ...props
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center space-x-2 font-semibold tracking-wide transition-all duration-300 focus:outline-none";
  
  const variants = {
    primary:
      "bg-gradient-to-r from-primary to-accent text-white px-8 py-4 rounded-full shadow-[0_4px_14px_0_rgba(233,30,99,0.39)] hover:shadow-[0_6px_20px_rgba(233,30,99,0.23)] hover:-translate-y-1",
    secondary:
      "bg-white/10 backdrop-blur-md border border-black/10 text-foreground px-8 py-4 rounded-full hover:border-primary/50 hover:-translate-y-1 hover:shadow-lg dark:border-white/20 dark:text-white dark:hover:border-white/80",
  };

  const content = (
    <>
      <span>{children}</span>
      {icon && <span className="flex-shrink-0">{icon}</span>}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={`${baseStyles} ${variants[variant]} ${className}`}>
        {content}
      </Link>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: variant === "primary" ? 1.03 : 1 }}
      whileTap={{ scale: 0.97 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {content}
    </motion.button>
  );
}
