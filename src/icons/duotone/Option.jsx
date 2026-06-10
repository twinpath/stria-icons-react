import React, { forwardRef } from 'react';

const OptionDuotone = forwardRef(({ size = 24, color = 'currentColor', className, ...props }, ref) => (
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
    <path d="M360 112H472C494.092 112 512 94.092 512 72S494.092 32 472 32H360C337.908 32 320 49.908 320 72S337.908 112 360 112Z" className="stria-secondary" style={{ opacity: 0.4 }} />
    <path d="M472 400H412.188L152.156 48.219C144.625 38.031 132.688 32 120 32H40C17.906 32 0 49.906 0 72S17.906 112 40 112H99.812L359.844 463.781C367.375 473.969 379.312 480 392 480H472C494.094 480 512 462.094 512 440S494.094 400 472 400Z" />
  </svg>
));

OptionDuotone.displayName = 'OptionDuotone';

export default OptionDuotone;
