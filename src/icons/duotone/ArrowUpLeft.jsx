import React, { forwardRef } from 'react';

const ArrowUpLeftDuotone = forwardRef(({ size = 24, color = 'currentColor', className, ...props }, ref) => (
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
    <path d="M152.562 160L356.281 363.719C371.906 379.344 371.906 404.656 356.281 420.281S315.344 435.906 299.719 420.281L96 216.562V160H152.562Z" className="stria-secondary" style={{ opacity: 0.4 }} />
    <path d="M96 160V328C96 350.094 78.094 368 56 368S16 350.094 16 328V120C16 97.906 33.906 80 56 80H264C286.094 80 304 97.906 304 120S286.094 160 264 160H96Z" />
  </svg>
));

ArrowUpLeftDuotone.displayName = 'ArrowUpLeftDuotone';

export default ArrowUpLeftDuotone;
