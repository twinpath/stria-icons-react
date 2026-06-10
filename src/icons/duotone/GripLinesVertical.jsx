import React, { forwardRef } from 'react';

const GripLinesVerticalDuotone = forwardRef(({ size = 24, color = 'currentColor', className, ...props }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 192 512"
    fill={color}
    className={className}
    {...props}
  >
    <path d="M160 32H160C142.4 32 128 46.4 128 64V448C128 465.6 142.4 480 160 480H160C177.6 480 192 465.6 192 448V64C192 46.4 177.6 32 160 32Z" className="stria-secondary" style={{ opacity: 0.4 }} />
    <path d="M32 32H32C14.4 32 0 46.4 0 64V448C0 465.6 14.4 480 32 480H32C49.6 480 64 465.6 64 448V64C64 46.4 49.6 32 32 32Z" />
  </svg>
));

GripLinesVerticalDuotone.displayName = 'GripLinesVerticalDuotone';

export default GripLinesVerticalDuotone;
