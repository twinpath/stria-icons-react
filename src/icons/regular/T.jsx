import React, { forwardRef } from 'react';

const TRegular = forwardRef(({ size = 24, color = 'currentColor', className, ...props }, ref) => (
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
    <path d="M384 64C384 81.688 369.672 96 352 96H224V448C224 465.688 209.672 480 192 480S160 465.688 160 448V96H32C14.328 96 0 81.688 0 64S14.328 32 32 32H352C369.672 32 384 46.312 384 64Z" />
  </svg>
));

TRegular.displayName = 'TRegular';

export default TRegular;
