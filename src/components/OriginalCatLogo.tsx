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
        src="/src/public/isotipo.png"
        alt=""
      />
    </div>
  );
};
