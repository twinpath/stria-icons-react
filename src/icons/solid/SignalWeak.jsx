import React, { forwardRef } from 'react';

const SignalWeakSolid = forwardRef(({ size = 24, color = 'currentColor', className, ...props }, ref) => (
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
    <path d="M32 384H32C14.327 384 0 398.327 0 416V480C0 497.673 14.327 512 32 512H32C49.673 512 64 497.673 64 480V416C64 398.327 49.673 384 32 384Z" />
  </svg>
));

SignalWeakSolid.displayName = 'SignalWeakSolid';

export default SignalWeakSolid;
