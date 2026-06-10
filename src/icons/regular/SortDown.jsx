import React, { forwardRef } from 'react';

const SortDownRegular = forwardRef(({ size = 24, color = 'currentColor', className, ...props }, ref) => (
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
    <path d="M271.966 288H48.08C5.453 288 -16.173 339.766 14.203 369.9L126.084 481.933C144.71 500.689 175.211 500.689 193.962 481.933L305.967 369.9C335.969 339.766 314.718 288 271.966 288ZM159.96 448.048L47.955 336.014H271.966L159.96 448.048Z" />
  </svg>
));

SortDownRegular.displayName = 'SortDownRegular';

export default SortDownRegular;
