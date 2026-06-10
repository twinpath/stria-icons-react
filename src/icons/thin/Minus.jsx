import React, { forwardRef } from 'react';

const MinusThin = forwardRef(({ size = 24, color = 'currentColor', className, ...props }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 448 512"
    fill={color}
    className={className}
    {...props}
  >
    <path d="M24 264H424C428.406 264 432 260.422 432 256S428.406 248 424 248H24C19.594 248 16 251.578 16 256S19.594 264 24 264Z" />
  </svg>
));

MinusThin.displayName = 'MinusThin';

export default MinusThin;
