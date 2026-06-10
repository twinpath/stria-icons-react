import React, { forwardRef } from 'react';

const ShelvesEmptyDuotone = forwardRef(({ size = 24, color = 'currentColor', className, ...props }, ref) => (
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
    <path d="M608 0C590.4 0 576 14.398 576 32V160H64V32C64 14.398 49.6 0 32 0S0 14.398 0 32V512H64V480H576V512H640V32C640 14.398 625.6 0 608 0ZM576 416H64V224H576V416Z" className="stria-secondary" style={{ opacity: 0.4 }} />
  </svg>
));

ShelvesEmptyDuotone.displayName = 'ShelvesEmptyDuotone';

export default ShelvesEmptyDuotone;
