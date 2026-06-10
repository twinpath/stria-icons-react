import React, { forwardRef } from 'react';

const TThin = forwardRef(({ size = 24, color = 'currentColor', className, ...props }, ref) => (
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
    <path d="M384 40C384 44.406 380.422 48 376 48H200V472C200 476.406 196.422 480 192 480S184 476.406 184 472V48H8C3.578 48 0 44.406 0 40S3.578 32 8 32H376C380.422 32 384 35.594 384 40Z" />
  </svg>
));

TThin.displayName = 'TThin';

export default TThin;
