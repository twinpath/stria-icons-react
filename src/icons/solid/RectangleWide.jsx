import React, { forwardRef } from 'react';

const RectangleWideSolid = forwardRef(({ size = 24, color = 'currentColor', className, ...props }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 640 512"
    fill={color}
    className={className}
    {...props}
  >
    <path d="M576 448H64C28.654 448 0 419.346 0 384V128C0 92.654 28.654 64 64 64H576C611.346 64 640 92.654 640 128V384C640 419.346 611.346 448 576 448Z" />
  </svg>
));

RectangleWideSolid.displayName = 'RectangleWideSolid';

export default RectangleWideSolid;
