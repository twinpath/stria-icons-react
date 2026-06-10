import React, { forwardRef } from 'react';

const BreadSliceSolid = forwardRef(({ size = 24, color = 'currentColor', className, ...props }, ref) => (
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
    <path d="M512 176.965C512 203 490.445 224 455.111 224H448V448C448 465.674 433.674 480 416 480H96C78.328 480 64 465.674 64 448V224H56.889C21.557 224 0 203 0 176.965C0 112.035 96 32 256 32S512 112.035 512 176.965Z" />
  </svg>
));

BreadSliceSolid.displayName = 'BreadSliceSolid';

export default BreadSliceSolid;
