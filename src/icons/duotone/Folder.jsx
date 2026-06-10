import React, { forwardRef } from 'react';

const FolderDuotone = forwardRef(({ size = 24, color = 'currentColor', className, ...props }, ref) => (
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
    <path d="M512 144V192H0V80C0 53.5 21.5 32 48 32H208L272 96H464C490.5 96 512 117.5 512 144Z" className="stria-secondary" style={{ opacity: 0.4 }} />
    <path d="M512 192V432C512 458.5 490.5 480 464 480H48C21.5 480 0 458.5 0 432V192H512Z" />
  </svg>
));

FolderDuotone.displayName = 'FolderDuotone';

export default FolderDuotone;
