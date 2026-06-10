import React, { forwardRef } from 'react';

const LRegular = forwardRef(({ size = 24, color = 'currentColor', className, ...props }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 320 512"
    fill={color}
    className={className}
    {...props}
  >
    <path d="M288 480H64C46.312 480 32 465.688 32 448V64C32 46.312 46.312 32 64 32S96 46.312 96 64V416H288C305.688 416 320 430.312 320 448S305.688 480 288 480Z" />
  </svg>
));

LRegular.displayName = 'LRegular';

export default LRegular;
