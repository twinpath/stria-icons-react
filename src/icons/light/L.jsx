import React, { forwardRef } from 'react';

const LLight = forwardRef(({ size = 24, color = 'currentColor', className, ...props }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 320 512"
    fill={color}
    className={className}
    {...props}
  >
    <path d="M304 480H48C39.156 480 32 472.844 32 464V48C32 39.156 39.156 32 48 32S64 39.156 64 48V448H304C312.844 448 320 455.156 320 464S312.844 480 304 480Z" />
  </svg>
));

LLight.displayName = 'LLight';

export default LLight;
