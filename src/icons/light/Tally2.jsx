import React, { forwardRef } from 'react';

const Tally2Light = forwardRef(({ size = 24, color = 'currentColor', className, ...props }, ref) => (
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
    <path d="M32 32C23.156 32 16 39.156 16 48V464C16 472.844 23.156 480 32 480S48 472.844 48 464V48C48 39.156 40.844 32 32 32ZM160 32C151.156 32 144 39.156 144 48V464C144 472.844 151.156 480 160 480S176 472.844 176 464V48C176 39.156 168.844 32 160 32Z" />
  </svg>
));

Tally2Light.displayName = 'Tally2Light';

export default Tally2Light;
