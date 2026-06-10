import React, { forwardRef } from 'react';

const SignalWeakRegular = forwardRef(({ size = 24, color = 'currentColor', className, ...props }, ref) => (
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
    <path d="M56 408V488C56 501.25 45.25 512 32 512S8 501.25 8 488V408C8 394.75 18.75 384 32 384S56 394.75 56 408Z" />
  </svg>
));

SignalWeakRegular.displayName = 'SignalWeakRegular';

export default SignalWeakRegular;
