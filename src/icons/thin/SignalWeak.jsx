import React, { forwardRef } from 'react';

const SignalWeakThin = forwardRef(({ size = 24, color = 'currentColor', className, ...props }, ref) => (
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
    <path d="M32 384C27.594 384 24 387.594 24 392V504C24 508.406 27.594 512 32 512S40 508.406 40 504V392C40 387.594 36.406 384 32 384Z" />
  </svg>
));

SignalWeakThin.displayName = 'SignalWeakThin';

export default SignalWeakThin;
