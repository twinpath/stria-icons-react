import React, { forwardRef } from 'react';

const MartiniGlassDuotone = forwardRef(({ size = 24, color = 'currentColor', className, ...props }, ref) => (
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
    <path d="M502.037 57.625C523.291 36.375 508.287 0 478.284 0H33.717C3.713 0 -11.291 36.375 9.963 57.625L223.996 271.625V448H176C149.491 448 128 469.492 128 496C128 504.836 135.164 512 144 512H368C376.836 512 384 504.836 384 496C384 469.492 362.51 448 336 448H288.004V271.625L502.037 57.625ZM256 213.121L106.856 64H405.145L256 213.121Z" className="stria-secondary" style={{ opacity: 0.4 }} />
    <path d="M341.27 128L256.135 213.121L171 128H341.27Z" />
  </svg>
));

MartiniGlassDuotone.displayName = 'MartiniGlassDuotone';

export default MartiniGlassDuotone;
