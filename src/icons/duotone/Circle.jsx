import React, { forwardRef } from 'react';

const CircleDuotone = forwardRef(({ size = 24, color = 'currentColor', className, ...props }, ref) => (
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
    <path d="M496 256C496 388.548 388.548 496 256 496S16 388.548 16 256S123.452 16 256 16S496 123.452 496 256Z" className="stria-secondary" style={{ opacity: 0.4 }} />
  </svg>
));

CircleDuotone.displayName = 'CircleDuotone';

export default CircleDuotone;
