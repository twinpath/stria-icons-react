import React, { forwardRef } from 'react';

const CaretUpDuotone = forwardRef(({ size = 24, color = 'currentColor', className, ...props }, ref) => (
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
    <path d="M9.375 265.375L137.375 137.375C143.625 131.125 151.813 128 160 128S176.375 131.125 182.625 137.375L310.625 265.375C319.781 274.531 322.516 288.281 317.563 300.25S300.938 320 288 320H32C19.063 320 7.391 312.219 2.438 300.25S0.219 274.531 9.375 265.375Z" className="stria-secondary" style={{ opacity: 0.4 }} />
  </svg>
));

CaretUpDuotone.displayName = 'CaretUpDuotone';

export default CaretUpDuotone;
