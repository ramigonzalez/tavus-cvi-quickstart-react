import React from "react";
import clsx from "clsx";

export type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
};

export const Card: React.FC<CardProps> = ({ children, className, ...props }) => (
  <div className={clsx("card", className)} {...props}>
    {children}
  </div>
); 