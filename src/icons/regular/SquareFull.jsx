import React, { forwardRef } from 'react';

const SquareFullRegular = forwardRef(({ size = 24, color = 'currentColor', className, ...props }, ref) => (
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
    <path d="M464 48V464H48V48H464M512 0H0V512H512V0L512 0Z" />
  </svg>
));

SquareFullRegular.displayName = 'SquareFullRegular';

export default SquareFullRegular;
