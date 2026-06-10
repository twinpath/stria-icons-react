import React, { forwardRef } from 'react';

const ComputerMouseDuotone = forwardRef(({ size = 24, color = 'currentColor', className, ...props }, ref) => (
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
    <path d="M176 0H160C71.625 0 0 71.625 0 160V192H176V0ZM0 352C0 440.375 71.625 512 160 512H224C312.375 512 384 440.375 384 352V224H0V352ZM224 0H208V192H384V160C384 71.625 312.375 0 224 0Z" className="stria-secondary" style={{ opacity: 0.4 }} />
    <path d="M384 192V224H0V192H176V0H208V192H384Z" />
  </svg>
));

ComputerMouseDuotone.displayName = 'ComputerMouseDuotone';

export default ComputerMouseDuotone;
