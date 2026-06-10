import React, { forwardRef } from 'react';

const ArrowRightLongDuotone = forwardRef(({ size = 24, color = 'currentColor', className, ...props }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 512 512"
    fill={color}
    className={className}
    {...props}
  >
    <path d="M402.75 288H32C14.312 288 0 273.688 0 256S14.312 224 32 224H402.75L434.75 256L402.75 288Z" className="stria-secondary" style={{ opacity: 0.4 }} />
    <path d="M320 384C320 375.812 323.125 367.625 329.375 361.375L434.75 256L329.375 150.625C316.875 138.125 316.875 117.875 329.375 105.375S362.125 92.875 374.625 105.375L502.625 233.375C515.125 245.875 515.125 266.125 502.625 278.625L374.625 406.625C362.125 419.125 341.875 419.125 329.375 406.625C323.125 400.375 320 392.188 320 384Z" />
  </svg>
));

ArrowRightLongDuotone.displayName = 'ArrowRightLongDuotone';

export default ArrowRightLongDuotone;
