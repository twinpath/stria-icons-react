import React, { forwardRef } from 'react';

const ChimneyDuotone = forwardRef(({ size = 24, color = 'currentColor', className, ...props }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 448 512"
    fill={color}
    className={className}
    {...props}
  >
    <path d="M128 192H32V320H128V192ZM32 480H288V352H32V480ZM160 192V320H416V192H160ZM320 480H416V352H320V480Z" className="stria-secondary" style={{ opacity: 0.4 }} />
    <path d="M416 32H32C14.25 32 0 46.25 0 64V128C0 145.75 14.25 160 32 160H416C433.75 160 448 145.75 448 128V64C448 46.25 433.75 32 416 32Z" />
  </svg>
));

ChimneyDuotone.displayName = 'ChimneyDuotone';

export default ChimneyDuotone;
