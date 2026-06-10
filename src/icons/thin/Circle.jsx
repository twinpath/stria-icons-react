import React, { forwardRef } from 'react';

const CircleThin = forwardRef(({ size = 24, color = 'currentColor', className, ...props }, ref) => (
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
    <path d="M256 32C379.514 32 480 132.486 480 256S379.514 480 256 480S32 379.514 32 256S132.486 32 256 32M256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16L256 16Z" />
  </svg>
));

CircleThin.displayName = 'CircleThin';

export default CircleThin;
