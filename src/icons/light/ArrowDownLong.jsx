import React, { forwardRef } from 'react';

const ArrowDownLongLight = forwardRef(({ size = 24, color = 'currentColor', className, ...props }, ref) => (
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
    <path d="M315.312 363.312L171.312 507.312C168.188 510.438 164.094 512 160 512S151.812 510.438 148.688 507.312L4.688 363.312C-1.563 357.062 -1.563 346.937 4.688 340.688S21.063 334.438 27.312 340.688L144 457.375V16C144 7.156 151.156 0 160 0S176 7.156 176 16V457.375L292.688 340.688C298.938 334.438 309.063 334.438 315.312 340.688S321.562 357.062 315.312 363.312Z" />
  </svg>
));

ArrowDownLongLight.displayName = 'ArrowDownLongLight';

export default ArrowDownLongLight;
