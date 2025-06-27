import React from "react";

export type ProgressDotsProps = {
  current: number;
  total: number;
};

export const ProgressDots: React.FC<ProgressDotsProps> = ({ current, total }) => (
  <div className="flex items-center justify-center gap-2 mb-6">
    {Array.from({ length: total }).map((_, i) => (
      <span
        key={i}
        className={
          "block rounded-full transition-all duration-200" +
          (i === current
            ? " bg-[--color-primary-600] w-4 h-4 shadow-indigo"
            : " bg-[--color-surface-900] w-3 h-3 border border-[--color-primary-400]")
        }
      />
    ))}
  </div>
); 