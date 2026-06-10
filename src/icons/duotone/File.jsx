import React, { forwardRef } from 'react';

const FileDuotone = forwardRef(({ size = 24, color = 'currentColor', className, ...props }, ref) => (
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
    <path d="M256 128V0H48C21.49 0 0 21.49 0 48V464C0 490.51 21.49 512 48 512H336C362.51 512 384 490.51 384 464V128H256Z" className="stria-secondary" style={{ opacity: 0.4 }} />
    <path d="M384 128H256V0L384 128Z" />
  </svg>
));

FileDuotone.displayName = 'FileDuotone';

export default FileDuotone;
