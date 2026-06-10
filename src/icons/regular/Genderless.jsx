import React, { forwardRef } from 'react';

const GenderlessRegular = forwardRef(({ size = 24, color = 'currentColor', className, ...props }, ref) => (
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
    <path d="M192 80C94.799 80 16 158.799 16 256S94.799 432 192 432S368 353.201 368 256S289.201 80 192 80ZM192 384C121.42 384 64 326.58 64 256S121.42 128 192 128S320 185.42 320 256S262.58 384 192 384Z" />
  </svg>
));

GenderlessRegular.displayName = 'GenderlessRegular';

export default GenderlessRegular;
