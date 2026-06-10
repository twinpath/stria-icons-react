import React, { forwardRef } from 'react';

const SignHangingDuotone = forwardRef(({ size = 24, color = 'currentColor', className, ...props }, ref) => (
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
    <path d="M496 64H128V16C128 7.25 120.75 0 112 0H80C71.25 0 64 7.25 64 16V64H16C7.25 64 0 71.25 0 80V112C0 120.75 7.25 128 16 128H64V496C64 504.75 71.25 512 80 512H112C120.75 512 128 504.75 128 496V128H496C504.75 128 512 120.75 512 112V80C512 71.25 504.75 64 496 64Z" className="stria-secondary" style={{ opacity: 0.4 }} />
    <path d="M160 384H480V128H160V384Z" />
  </svg>
));

SignHangingDuotone.displayName = 'SignHangingDuotone';

export default SignHangingDuotone;
