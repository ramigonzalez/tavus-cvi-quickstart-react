import React from "react";
import clsx from "clsx";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
  size?: "large" | "medium" | "small";
  loading?: boolean;
};

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "large",
  loading = false,
  className,
  children,
  ...props
}) => {
  return (
    <button
      className={clsx(
        "button-animated font-semibold rounded-16 focus:outline-none transition-all duration-150",
        {
          // Variant styles
          "bg-gradient-to-r from-[#846fda] to-[#6556b9] text-white shadow-indigo": variant === "primary",
          "border border-[--color-primary-400] text-[--color-primary-400] bg-transparent": variant === "secondary",
          "bg-transparent text-[--color-neutral-0]": variant === "ghost",
          // Size styles
          "py-4 px-6 text-lg": size === "large",
          "py-2 px-4 text-base": size === "medium",
          "py-1.5 px-3 text-sm": size === "small",
          // Disabled
          "opacity-60 cursor-not-allowed": props.disabled || loading,
        },
        className
      )}
      disabled={props.disabled || loading}
      {...props}
    >
      {loading ? <span className="animate-pulse">...</span> : children}
    </button>
  );
};
