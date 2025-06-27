import React from "react";
import clsx from "clsx";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
  success?: boolean;
};

export const Input: React.FC<InputProps> = ({
  label,
  error,
  success,
  className,
  ...props
}) => {
  return (
    <div className="w-full mb-4">
      {label && (
        <label className="block mb-1 text-base font-semibold text-[--color-primary-400]">
          {label}
        </label>
      )}
      <div className="relative">
        <input
          className={clsx(
            "w-full bg-[--color-surface-900] border border-gray-700 rounded-16 px-4 py-3 text-white text-lg focus:outline-none focus:ring-2 focus:ring-[--color-primary-600] focus:border-transparent transition-all duration-200 placeholder-gray-400 shadow-sm",
            {
              "border-red-500 focus:ring-red-500": !!error,
              "border-green-500 focus:ring-green-500": success,
            },
            className
          )}
          {...props}
        />
        {/* Animated placeholder (float up on focus or value) */}
        {/* Could be implemented with JS or CSS, but for now, use native placeholder */}
        {error && (
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-red-400 text-sm">⚠️</span>
        )}
        {success && !error && (
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-green-400 text-sm">✔️</span>
        )}
      </div>
      {error && <div className="text-red-400 text-sm mt-1">{error}</div>}
    </div>
  );
}; 