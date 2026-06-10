import React, { forwardRef } from 'react';

const LessThanThin = forwardRef(({ size = 24, color = 'currentColor', className, ...props }, ref) => (
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
    <path d="M355.562 408.816C359.531 410.784 361.125 415.596 359.156 419.534C357.659 422.528 353.24 425.528 348.438 423.127L28.438 263.137C25.719 261.793 24 259.012 24 255.981C24 252.95 25.719 250.169 28.438 248.825L348.438 88.835C352.25 86.897 357.156 88.429 359.156 92.428C361.125 96.366 359.531 101.178 355.562 103.146L49.875 255.981L355.562 408.816Z" />
  </svg>
));

LessThanThin.displayName = 'LessThanThin';

export default LessThanThin;
