import React from "react";

interface OriginalCatLogoProps {
  className?: string;
  size?: number;
  glow?: boolean;
}

export const OriginalCatLogo: React.FC<OriginalCatLogoProps> = ({
  className = "",
  size = 80,
}) => {
  return (
    <div
      className={`relative inline-flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}>
      <img
        src="/isotipo.png"
        alt="myProject"
        width={size}
        height={size}
        className="w-full h-full object-contain"
      />
    </div>
  );
};