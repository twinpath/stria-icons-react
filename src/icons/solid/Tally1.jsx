import React, { forwardRef } from 'react';

const Tally1Solid = forwardRef(({ size = 24, color = 'currentColor', className, ...props }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 448 512"
    fill={color}
    className={className}
    {...props}
  >
    <path d="M64 64V448C64 465.673 49.673 480 32 480H32C14.327 480 0 465.673 0 448V64C0 46.327 14.327 32 32 32H32C49.673 32 64 46.327 64 64Z" />
  </svg>
));

Tally1Solid.displayName = 'Tally1Solid';

export default Tally1Solid;
