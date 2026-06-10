import React, { forwardRef } from 'react';

const LocationDuotone = forwardRef(({ size = 24, color = 'currentColor', className, ...props }, ref) => (
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
    <path d="M0 192.001C0 85.969 85.969 0 192 0S384 85.969 384 192.001C384 269.408 357.031 291.033 211.719 501.676C202.187 515.441 181.812 515.441 172.281 501.676C26.969 291.033 0 269.408 0 192.001Z" className="stria-secondary" style={{ opacity: 0.4 }} />
  </svg>
));

LocationDuotone.displayName = 'LocationDuotone';

export default LocationDuotone;
