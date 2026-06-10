import React, { forwardRef } from 'react';

const VideoDuotone = forwardRef(({ size = 24, color = 'currentColor', className, ...props }, ref) => (
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
    <path d="M384 112.001V400.001C384 426.51 362.51 448.001 336 448.001H48C21.49 448.001 0 426.51 0 400.001V112.001C0 85.491 21.49 64.001 48 64.001H336C362.51 64.001 384 85.491 384 112.001Z" className="stria-secondary" style={{ opacity: 0.4 }} />
    <path d="M576 127.501V384.407C576 409.907 546.812 424.797 525.594 410.204L416 334.704V177.297L525.594 101.704C546.906 87.094 576 102.094 576 127.501Z" />
  </svg>
));

VideoDuotone.displayName = 'VideoDuotone';

export default VideoDuotone;
