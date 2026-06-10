import React, { forwardRef } from 'react';

const SquareFullDuotone = forwardRef(({ size = 24, color = 'currentColor', className, ...props }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 512 512"
    fill={color}
    className={className}
    {...props}
  >
    <path d="M0 0H512V512H0V0Z" className="stria-secondary" style={{ opacity: 0.4 }} />
  </svg>
));

SquareFullDuotone.displayName = 'SquareFullDuotone';

export default SquareFullDuotone;
