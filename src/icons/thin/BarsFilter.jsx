import React, { forwardRef } from 'react';

const BarsFilterThin = forwardRef(({ size = 24, color = 'currentColor', className, ...props }, ref) => (
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
    <path d="M8 104H440C444.406 104 448 100.406 448 96S444.406 88 440 88H8C3.594 88 0 91.594 0 96S3.594 104 8 104ZM376 248H72C67.594 248 64 251.594 64 256S67.594 264 72 264H376C380.406 264 384 260.406 384 256S380.406 248 376 248ZM280 408H168C163.594 408 160 411.594 160 416S163.594 424 168 424H280C284.406 424 288 420.406 288 416S284.406 408 280 408Z" />
  </svg>
));

BarsFilterThin.displayName = 'BarsFilterThin';

export default BarsFilterThin;
