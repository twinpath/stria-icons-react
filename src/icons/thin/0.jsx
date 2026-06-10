import React, { forwardRef } from 'react';

const Icon0Thin = forwardRef(({ size = 24, color = 'currentColor', className, ...props }, ref) => (
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
    <path d="M160 32C71.635 32 0 103.635 0 192V320C0 408.365 71.635 480 160 480S320 408.365 320 320V192C320 103.635 248.365 32 160 32ZM304 320C304 399.4 239.402 464 160 464S16 399.4 16 320V192C16 112.598 80.598 48 160 48S304 112.598 304 192V320Z" />
  </svg>
));

Icon0Thin.displayName = 'Icon0Thin';

export default Icon0Thin;
