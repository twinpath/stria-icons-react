import React, { forwardRef } from 'react';

const SdCardDuotone = forwardRef(({ size = 24, color = 'currentColor', className, ...props }, ref) => (
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
    <path d="M320 0H128L0 128V448C0 483.25 28.75 512 64 512H320C355.25 512 384 483.25 384 448V64C384 28.75 355.25 0 320 0ZM160 160H112V64H160V160ZM240 160H192V64H240V160ZM320 160H272V64H320V160Z" className="stria-secondary" style={{ opacity: 0.4 }} />
    <path d="M112 160H160V64H112V160ZM192 160H240V64H192V160ZM272 64V160H320V64H272Z" />
  </svg>
));

SdCardDuotone.displayName = 'SdCardDuotone';

export default SdCardDuotone;
