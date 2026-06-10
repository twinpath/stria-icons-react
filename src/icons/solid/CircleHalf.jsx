import React, { forwardRef } from 'react';

const CircleHalfSolid = forwardRef(({ size = 24, color = 'currentColor', className, ...props }, ref) => (
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
    <path d="M256 16V496C123.453 496 16 388.549 16 256S123.453 16 256 16Z" />
  </svg>
));

CircleHalfSolid.displayName = 'CircleHalfSolid';

export default CircleHalfSolid;
