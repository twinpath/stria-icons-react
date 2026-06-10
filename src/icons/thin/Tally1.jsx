import React, { forwardRef } from 'react';

const Tally1Thin = forwardRef(({ size = 24, color = 'currentColor', className, ...props }, ref) => (
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
    <path d="M40 40V472C40 476.422 36.422 480 32 480S24 476.422 24 472V40C24 35.578 27.578 32 32 32S40 35.578 40 40Z" />
  </svg>
));

Tally1Thin.displayName = 'Tally1Thin';

export default Tally1Thin;
