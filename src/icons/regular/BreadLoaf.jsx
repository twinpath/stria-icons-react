import React, { forwardRef } from 'react';

const BreadLoafRegular = forwardRef(({ size = 24, color = 'currentColor', className, ...props }, ref) => (
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
    <path d="M400 32H240C107.5 32 0 103.625 0 192C0 227.375 26.875 256 60 256H64V448C64 465.625 78.375 480 96 480H544C561.625 480 576 465.625 576 448V256H580C613.125 256 640 227.375 640 192C640 103.625 532.5 32 400 32ZM420 208H368V432H112V208H60C54.25 208 48 201.625 48 192C48 132.375 137.75 80 240 80S432 132.375 432 192C432 201.625 425.75 208 420 208Z" />
  </svg>
));

BreadLoafRegular.displayName = 'BreadLoafRegular';

export default BreadLoafRegular;
