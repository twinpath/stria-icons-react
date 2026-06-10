import React, { forwardRef } from 'react';

const MobileScreenButtonSolid = forwardRef(({ size = 24, color = 'currentColor', className, ...props }, ref) => (
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
    <path d="M304 0H80C44.654 0 16 28.654 16 64V448C16 483.346 44.654 512 80 512H304C339.346 512 368 483.346 368 448V64C368 28.654 339.346 0 304 0ZM192 480C174.25 480 160 465.75 160 448S174.25 416 192 416S224 430.25 224 448S209.75 480 192 480ZM304 64V384H80V64H304Z" />
  </svg>
));

MobileScreenButtonSolid.displayName = 'MobileScreenButtonSolid';

export default MobileScreenButtonSolid;
