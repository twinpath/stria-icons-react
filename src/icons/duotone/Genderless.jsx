import React, { forwardRef } from 'react';

const GenderlessDuotone = forwardRef(({ size = 24, color = 'currentColor', className, ...props }, ref) => (
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
    <path d="M192 320C156.699 320 128 291.297 128 256C128 220.699 156.699 192 192 192S256 220.699 256 256C256 291.297 227.301 320 192 320Z" className="stria-secondary" style={{ opacity: 0.4 }} />
    <path d="M192 160C244.936 160 288 203.064 288 256S244.936 352 192 352S96 308.936 96 256S139.064 160 192 160M192 80C94.832 80 16 158.83 16 256C16 353.166 94.832 432 192 432S368 353.166 368 256C368 158.83 289.168 80 192 80L192 80Z" />
  </svg>
));

GenderlessDuotone.displayName = 'GenderlessDuotone';

export default GenderlessDuotone;
