import React, { forwardRef } from 'react';

const DiceOneDuotone = forwardRef(({ size = 24, color = 'currentColor', className, ...props }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 448 512"
    fill={color}
    className={className}
    {...props}
  >
    <path d="M384 32H64C28.625 32 0 60.625 0 96V416C0 451.375 28.625 480 64 480H384C419.375 480 448 451.375 448 416V96C448 60.625 419.375 32 384 32ZM224 288C206.375 288 192 273.625 192 256S206.375 224 224 224S256 238.375 256 256S241.625 288 224 288Z " className="stria-secondary" style={{ opacity: 0.4 }} />
    <path d="M256 256C256 273.625 241.625 288 224 288S192 273.625 192 256S206.375 224 224 224S256 238.375 256 256Z " />
  </svg>
));

DiceOneDuotone.displayName = 'DiceOneDuotone';

export default DiceOneDuotone;
