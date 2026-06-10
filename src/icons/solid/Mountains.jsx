import React, { forwardRef } from 'react';

const MountainsSolid = forwardRef(({ size = 24, color = 'currentColor', className, ...props }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 640 512"
    fill={color}
    className={className}
    {...props}
  >
    <path d="M575.904 467.754H56.381C12.153 467.754 -15.007 418.96 8.878 381.537L231.974 32C242.391 15.672 269.698 15.672 280.115 32L409.6 234.875L449.848 171.818C462.428 152.109 491.208 152.109 503.789 171.818L629.843 369.318C657.035 411.92 626.439 467.754 575.904 467.754Z" />
  </svg>
));

MountainsSolid.displayName = 'MountainsSolid';

export default MountainsSolid;
