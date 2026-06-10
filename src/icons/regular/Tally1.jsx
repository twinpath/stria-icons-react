import React, { forwardRef } from 'react';

const Tally1Regular = forwardRef(({ size = 24, color = 'currentColor', className, ...props }, ref) => (
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
    <path d="M56 56V456C56 469.25 45.25 480 32 480S8 469.25 8 456V56C8 42.75 18.75 32 32 32S56 42.75 56 56Z" />
  </svg>
));

Tally1Regular.displayName = 'Tally1Regular';

export default Tally1Regular;
