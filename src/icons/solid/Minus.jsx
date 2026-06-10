import React, { forwardRef } from 'react';

const MinusSolid = forwardRef(({ size = 24, color = 'currentColor', className, ...props }, ref) => (
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
    <path d="M432 256C432 278.094 414.094 296 392 296H56C33.906 296 16 278.094 16 256S33.906 216 56 216H392C414.094 216 432 233.906 432 256Z" />
  </svg>
));

MinusSolid.displayName = 'MinusSolid';

export default MinusSolid;
