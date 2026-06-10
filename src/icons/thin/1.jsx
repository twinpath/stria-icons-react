import React, { forwardRef } from 'react';

const Icon1Thin = forwardRef(({ size = 24, color = 'currentColor', className, ...props }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 256 512"
    fill={color}
    className={className}
    {...props}
  >
    <path d="M256 472C256 476.406 252.422 480 248 480H8C3.578 480 0 476.406 0 472S3.578 464 8 464H120V53.938L36.031 102.906C32.203 105.125 27.328 103.844 25.094 100.031S24.156 91.312 27.969 89.094L123.969 33.094C126.453 31.656 129.5 31.625 131.984 33.062S136 37.125 136 40V464H248C252.422 464 256 467.594 256 472Z" />
  </svg>
));

Icon1Thin.displayName = 'Icon1Thin';

export default Icon1Thin;
