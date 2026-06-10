import React, { forwardRef } from 'react';

const SquareFullLight = forwardRef(({ size = 24, color = 'currentColor', className, ...props }, ref) => (
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
    <path d="M480 32V480H32V32H480M512 0H0V512H512V0Z" />
  </svg>
));

SquareFullLight.displayName = 'SquareFullLight';

export default SquareFullLight;
