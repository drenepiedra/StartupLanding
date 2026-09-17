import React from "react";

interface OriginalCatLogoProps {
  className?: string;
  size?: number;
  glow?: boolean;
}

export const OriginalCatLogo: React.FC<OriginalCatLogoProps> = ({
  className = "",
  size = 80,
  glow = false,
}) => {
  return (
    <div
      className={`relative inline-flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}>
      <img
        src="/isotipo.png"
        alt=""
        width={size}
        height={size}
        className={`w-full h-full object-contain ${
          glow ? "filter drop-shadow-[0_0_16px_rgba(197,192,255,0.45)]" : ""
        }`}
      />
    </div>
  );
};
