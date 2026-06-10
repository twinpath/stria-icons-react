import React, { forwardRef } from 'react';

const PenDuotone = forwardRef(({ size = 24, color = 'currentColor', className, ...props }, ref) => (
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
    <path d="M497.554 74.159L437.463 14.063C418.714 -4.688 388.278 -4.688 369.529 14.063L313 70.612L440.994 198.633L497.554 142.084C516.303 123.317 516.303 92.91 497.554 74.159Z" className="stria-secondary" style={{ opacity: 0.4 }} />
    <path d="M313.377 70.605L31.037 352.955C28.803 355.19 27.282 358.033 26.66 361.131L0.32 492.853C-1.92 504.049 7.95 513.92 19.145 511.68L150.856 485.335C153.954 484.716 156.797 483.195 159.031 480.962L441.377 198.632L313.377 70.605Z" />
  </svg>
));

PenDuotone.displayName = 'PenDuotone';

export default PenDuotone;
