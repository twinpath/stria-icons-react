import React, { forwardRef } from 'react';

const YandexInternationalBrands = forwardRef(({ size = 24, color = 'currentColor', className, ...props }, ref) => (
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
    <path d="M129.5 512V345.9L18.5 48h55.8l81.8 229.7L250.2 0h51.3L180.8 347.8V512h-51.3z" />
  </svg>
));

YandexInternationalBrands.displayName = 'YandexInternationalBrands';

export default YandexInternationalBrands;
