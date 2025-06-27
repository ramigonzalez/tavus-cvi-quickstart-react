import React from "react";
import clsx from "clsx";

export type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  children: React.ReactNode;
};

export const Badge: React.FC<BadgeProps> = ({ children, className, ...props }) => (
  <span className={clsx("badge", className)} {...props}>
    {children}
  </span>
); 