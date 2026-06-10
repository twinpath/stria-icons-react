import React, { forwardRef } from 'react';

const BanDuotone = forwardRef(({ size = 24, color = 'currentColor', className, ...props }, ref) => (
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
    <path d="M156.25 111.09L400.82 355.66C388.613 373.357 373.268 388.703 355.57 400.91L111 156.34C123.207 138.643 138.553 123.297 156.25 111.09Z" className="stria-secondary" style={{ opacity: 0.4 }} />
    <path d="M256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM256 432C158.953 432 80 353.047 80 256S158.953 80 256 80S432 158.953 432 256S353.047 432 256 432Z" />
  </svg>
));

BanDuotone.displayName = 'BanDuotone';

export default BanDuotone;
