import React, { forwardRef } from 'react';

const WifiWeakRegular = forwardRef(({ size = 24, color = 'currentColor', className, ...props }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 640 512"
    fill={color}
    className={className}
    {...props}
  >
    <path d="M320 368C289.072 368 264 393.07 264 424S289.072 480 320 480S376 454.93 376 424S350.928 368 320 368Z" />
  </svg>
));

WifiWeakRegular.displayName = 'WifiWeakRegular';

export default WifiWeakRegular;
