import React, { forwardRef } from 'react';

const CaretRightRegular = forwardRef(({ size = 24, color = 'currentColor', className, ...props }, ref) => (
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
    <path d="M48 143.968V367.976C48 410.603 99.758 432.103 130.012 401.852L242.029 289.973C260.657 271.223 260.657 240.722 242.029 221.971L130.012 110.092C99.758 79.966 48 101.342 48 143.968ZM208.024 255.972L96.007 367.976V143.968L208.024 255.972Z" />
  </svg>
));

CaretRightRegular.displayName = 'CaretRightRegular';

export default CaretRightRegular;
