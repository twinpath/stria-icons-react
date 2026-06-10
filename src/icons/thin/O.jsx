import React, { forwardRef } from 'react';

const OThin = forwardRef(({ size = 24, color = 'currentColor', className, ...props }, ref) => (
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
    <path d="M224 480C100.5 480 0 379.5 0 256S100.5 32 224 32S448 132.5 448 256S347.5 480 224 480ZM224 48C109.312 48 16 141.312 16 256S109.312 464 224 464S432 370.688 432 256S338.688 48 224 48Z" />
  </svg>
));

OThin.displayName = 'OThin';

export default OThin;
