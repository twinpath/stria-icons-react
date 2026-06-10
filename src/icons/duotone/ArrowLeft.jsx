import React, { forwardRef } from 'react';

const ArrowLeftDuotone = forwardRef(({ size = 24, color = 'currentColor', className, ...props }, ref) => (
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
    <path d="M132.992 216H407.812C429.906 216 447.812 233.906 447.812 256S429.906 296 407.812 296H132.992L95 256L132.992 216Z" className="stria-secondary" style={{ opacity: 0.4 }} />
    <path d="M0 256C0 246.078 3.656 236.172 11 228.453L163 68.453C178.219 52.438 203.531 51.781 219.562 67C235.5 82.234 236.188 107.578 221 123.547L95.188 256L221 388.453C236.188 404.438 235.531 429.781 219.562 445C203.531 460.219 178.219 459.562 163 443.547L11 283.547C3.656 275.828 0 265.922 0 256Z" />
  </svg>
));

ArrowLeftDuotone.displayName = 'ArrowLeftDuotone';

export default ArrowLeftDuotone;
