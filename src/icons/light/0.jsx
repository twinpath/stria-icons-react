import React, { forwardRef } from 'react';

const Icon0Light = forwardRef(({ size = 24, color = 'currentColor', className, ...props }, ref) => (
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
    <path d="M160 32C71.781 32 0 103.781 0 192V320C0 408.219 71.781 480 160 480S320 408.219 320 320V192C320 103.781 248.219 32 160 32ZM288 320C288 390.594 230.594 448 160 448S32 390.594 32 320V192C32 121.406 89.406 64 160 64S288 121.406 288 192V320Z" />
  </svg>
));

Icon0Light.displayName = 'Icon0Light';

export default Icon0Light;
