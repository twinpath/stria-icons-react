import React, { forwardRef } from 'react';

const DoorClosedDuotone = forwardRef(({ size = 24, color = 'currentColor', className, ...props }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 576 512"
    fill={color}
    className={className}
    {...props}
  >
    <path d="M432 0H144C117.5 0 96 22.75 96 50.75V512H480V50.75C480 22.75 458.5 0 432 0ZM384 288C366.375 288 352 273.625 352 256S366.375 224 384 224S416 238.375 416 256S401.625 288 384 288Z" className="stria-secondary" style={{ opacity: 0.4 }} />
    <path d="M0 464V496C0 504.875 7.125 512 16 512H96V448H16C7.125 448 0 455.125 0 464ZM560 448H480V512H560C568.875 512 576 504.875 576 496V464C576 455.125 568.875 448 560 448ZM384 224C366.375 224 352 238.375 352 256S366.375 288 384 288S416 273.625 416 256S401.625 224 384 224Z" />
  </svg>
));

DoorClosedDuotone.displayName = 'DoorClosedDuotone';

export default DoorClosedDuotone;
