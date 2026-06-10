import React, { forwardRef } from 'react';

const IntersectionThin = forwardRef(({ size = 24, color = 'currentColor', className, ...props }, ref) => (
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
    <path d="M384 224V472C384 476.406 380.422 480 376 480S368 476.406 368 472V224C368 126.969 289.047 48 192 48S16 126.969 16 224V472C16 476.406 12.422 480 8 480S0 476.406 0 472V224C0 118.125 86.125 32 192 32S384 118.125 384 224Z" />
  </svg>
));

IntersectionThin.displayName = 'IntersectionThin';

export default IntersectionThin;
