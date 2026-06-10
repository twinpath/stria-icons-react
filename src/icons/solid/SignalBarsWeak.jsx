import React, { forwardRef } from 'react';

const SignalBarsWeakSolid = forwardRef(({ size = 24, color = 'currentColor', className, ...props }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 576 512"
    fill={color}
    className={className}
    {...props}
  >
    <path d="M48 384H48C21.6 384 0 405.6 0 432V464C0 490.4 21.6 512 48 512H48C74.4 512 96 490.4 96 464V432C96 405.6 74.4 384 48 384Z" />
  </svg>
));

SignalBarsWeakSolid.displayName = 'SignalBarsWeakSolid';

export default SignalBarsWeakSolid;
