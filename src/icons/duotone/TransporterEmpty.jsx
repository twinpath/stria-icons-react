import React, { forwardRef } from 'react';

const TransporterEmptyDuotone = forwardRef(({ size = 24, color = 'currentColor', className, ...props }, ref) => (
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
    <path d="M288 448H32C14.375 448 0 462.375 0 480V512H320V480C320 462.375 305.625 448 288 448Z" className="stria-secondary" style={{ opacity: 0.4 }} />
  </svg>
));

TransporterEmptyDuotone.displayName = 'TransporterEmptyDuotone';

export default TransporterEmptyDuotone;
