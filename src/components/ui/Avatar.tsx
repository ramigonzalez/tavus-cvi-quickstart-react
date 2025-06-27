import React from "react";
import clsx from "clsx";

export type AvatarProps = {
  src?: string;
  alt?: string;
  speaking?: boolean;
  size?: number;
};

export const Avatar: React.FC<AvatarProps> = ({ src, alt = "Avatar", speaking = false, size = 56 }) => (
  <div
    className={clsx(
      "relative flex items-center justify-center",
      speaking && "animate-avatar-glow"
    )}
    style={{ width: size, height: size }}
  >
    <img
      src={src || "/avatar-default.png"}
      alt={alt}
      className="rounded-full object-cover w-full h-full border-2 border-[--color-primary-400]"
      style={{ boxShadow: speaking ? "0 0 0 8px rgba(186,155,230,0.25)" : undefined }}
    />
    <style>{`
      @keyframes avatar-glow {
        0%,100% { box-shadow: 0 0 0 8px rgba(186,155,230,0.25); }
        50% { box-shadow: 0 0 0 16px rgba(186,155,230,0.45); }
      }
      .animate-avatar-glow img {
        animation: avatar-glow 1.2s infinite;
      }
    `}</style>
  </div>
); 