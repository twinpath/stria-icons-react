import React, { forwardRef } from 'react';

const SendBackwardDuotone = forwardRef(({ size = 24, color = 'currentColor', className, ...props }, ref) => (
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
    <path d="M448 160H224C188.654 160 160 188.654 160 224V448C160 483.346 188.654 512 224 512H448C483.346 512 512 483.346 512 448V224C512 188.652 483.346 160 448 160ZM448 448H224V224H448V448Z" className="stria-secondary" style={{ opacity: 0.4 }} />
    <path d="M160 352H64C28.654 352 0 323.346 0 288V64C0 28.652 28.654 0 64 0H288C323.346 0 352 28.652 352 64V160H224C195.277 160 171.262 179.049 163.162 205.105C162.594 206.611 162.057 208.195 161.654 209.963C160.637 214.492 160 219.162 160 224V352Z" />
  </svg>
));

SendBackwardDuotone.displayName = 'SendBackwardDuotone';

export default SendBackwardDuotone;
