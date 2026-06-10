import React, { forwardRef } from 'react';

const IntegralDuotone = forwardRef(({ size = 24, color = 'currentColor', className, ...props }, ref) => (
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
    <path d="M304 92V96C304 118.094 286.094 136 264 136S224 118.094 224 96V92C224 85.375 218.609 80 212 80S200 85.375 200 92V420C200 470.719 158.734 512 108 512S16 470.719 16 420V416C16 393.906 33.906 376 56 376S96 393.906 96 416V420C96 426.625 101.391 432 108 432S120 426.625 120 420V92C120 41.281 161.266 0 212 0S304 41.281 304 92Z" className="stria-secondary" style={{ opacity: 0.4 }} />
  </svg>
));

IntegralDuotone.displayName = 'IntegralDuotone';

export default IntegralDuotone;
