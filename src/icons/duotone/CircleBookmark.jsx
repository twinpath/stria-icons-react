import React, { forwardRef } from 'react';

const CircleBookmarkDuotone = forwardRef(({ size = 24, color = 'currentColor', className, ...props }, ref) => (
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
    <path d="M256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM352 384L256 320L160 384V160C160 142.326 174.326 128 192 128H320C337.674 128 352 142.326 352 160V384Z" className="stria-secondary" style={{ opacity: 0.4 }} />
    <path d="M352 384L256 320L160 384V160C160 142.326 174.326 128 192 128H320C337.674 128 352 142.326 352 160V384Z" />
  </svg>
));

CircleBookmarkDuotone.displayName = 'CircleBookmarkDuotone';

export default CircleBookmarkDuotone;
