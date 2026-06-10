import React, { forwardRef } from 'react';

const IntersectionDuotone = forwardRef(({ size = 24, color = 'currentColor', className, ...props }, ref) => (
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
    <path d="M344 480C321.906 480 304 462.094 304 440V224C304 162.25 253.75 112 192 112S80 162.25 80 224V440C80 462.094 62.094 480 40 480S0 462.094 0 440V224C0 118.125 86.125 32 192 32S384 118.125 384 224V440C384 462.094 366.094 480 344 480Z" className="stria-secondary" style={{ opacity: 0.4 }} />
  </svg>
));

IntersectionDuotone.displayName = 'IntersectionDuotone';

export default IntersectionDuotone;
