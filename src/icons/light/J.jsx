import React, { forwardRef } from 'react';

const JLight = forwardRef(({ size = 24, color = 'currentColor', className, ...props }, ref) => (
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
    <path d="M160 480C71.781 480 0 408.219 0 320V272C0 263.156 7.156 256 16 256S32 263.156 32 272V320C32 390.594 89.406 448 160 448S288 390.594 288 320V48C288 39.156 295.156 32 304 32S320 39.156 320 48V320C320 408.219 248.219 480 160 480Z" />
  </svg>
));

JLight.displayName = 'JLight';

export default JLight;
