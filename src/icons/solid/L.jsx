import React, { forwardRef } from 'react';

const LSolid = forwardRef(({ size = 24, color = 'currentColor', className, ...props }, ref) => (
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
    <path d="M272 480H80C53.5 480 32 458.5 32 432V80C32 53.5 53.5 32 80 32S128 53.5 128 80V384H272C298.5 384 320 405.5 320 432S298.5 480 272 480Z" />
  </svg>
));

LSolid.displayName = 'LSolid';

export default LSolid;
