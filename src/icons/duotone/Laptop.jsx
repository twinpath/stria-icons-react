import React, { forwardRef } from 'react';

const LaptopDuotone = forwardRef(({ size = 24, color = 'currentColor', className, ...props }, ref) => (
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
    <path d="M624 384H16C7.25 384 0 391.25 0 400V416C0 451.25 28.75 480 64 480H576C611.25 480 640 451.25 640 416V400C640 391.25 632.75 384 624 384ZM128 96H512V352H576V80C576 53.625 554.375 32 528 32H112C85.625 32 64 53.625 64 80V352H128V96Z" className="stria-secondary" style={{ opacity: 0.4 }} />
    <path d="M512 352H128V96H512V352Z" />
  </svg>
));

LaptopDuotone.displayName = 'LaptopDuotone';

export default LaptopDuotone;
