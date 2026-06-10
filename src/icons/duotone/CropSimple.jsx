import React, { forwardRef } from 'react';

const CropSimpleDuotone = forwardRef(({ size = 24, color = 'currentColor', className, ...props }, ref) => (
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
    <path d="M160 24C160 10.75 149.25 0 136 0H88C74.75 0 64 10.75 64 24V416C64 433.625 78.375 448 96 448H320V352H160V24ZM488 352H448V448H488C501.25 448 512 437.25 512 424V376C512 362.75 501.25 352 488 352Z" className="stria-secondary" style={{ opacity: 0.4 }} />
    <path d="M416 64H192V160H352V488C352 501.25 362.75 512 376 512H424C437.25 512 448 501.25 448 488V96C448 78.375 433.625 64 416 64ZM0 88V136C0 149.25 10.75 160 24 160H64V64H24C10.75 64 0 74.75 0 88Z" />
  </svg>
));

CropSimpleDuotone.displayName = 'CropSimpleDuotone';

export default CropSimpleDuotone;
