import React, { forwardRef } from 'react';

const TriangleDuotone = forwardRef(({ size = 24, color = 'currentColor', className, ...props }, ref) => (
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
    <path d="M506.274 417.001C522.606 445.001 502.052 480.001 469.275 480.001H42.739C9.852 480.001 -10.592 444.891 5.741 417.001L218.954 53.001C235.397 25.001 276.617 25.001 292.95 53.001L506.274 417.001Z" className="stria-secondary" style={{ opacity: 0.4 }} />
  </svg>
));

TriangleDuotone.displayName = 'TriangleDuotone';

export default TriangleDuotone;
