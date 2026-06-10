import React, { forwardRef } from 'react';

const UnionThin = forwardRef(({ size = 24, color = 'currentColor', className, ...props }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 384 512"
    fill={color}
    className={className}
    {...props}
  >
    <path d="M352 40V320C352 408.219 280.219 480 192 480S32 408.219 32 320V40C32 35.594 35.594 32 40 32S48 35.594 48 40V320C48 399.406 112.594 464 192 464S336 399.406 336 320V40C336 35.594 339.594 32 344 32S352 35.594 352 40Z" />
  </svg>
));

UnionThin.displayName = 'UnionThin';

export default UnionThin;
