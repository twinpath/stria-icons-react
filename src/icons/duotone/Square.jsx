import React, { forwardRef } from 'react';

const SquareDuotone = forwardRef(({ size = 24, color = 'currentColor', className, ...props }, ref) => (
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
    <path d="M448 96V416C448 451.346 419.346 480 384 480H64C28.654 480 0 451.346 0 416V96C0 60.654 28.654 32 64 32H384C419.346 32 448 60.654 448 96Z" className="stria-secondary" style={{ opacity: 0.4 }} />
  </svg>
));

SquareDuotone.displayName = 'SquareDuotone';

export default SquareDuotone;
