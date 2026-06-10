import React, { forwardRef } from 'react';

const Square0Solid = forwardRef(({ size = 24, color = 'currentColor', className, ...props }, ref) => (
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
    <path d="M224 176C197.531 176 176 197.531 176 224V288C176 314.469 197.531 336 224 336S272 314.469 272 288V224C272 197.531 250.469 176 224 176ZM384 32H64C28.654 32 0 60.654 0 96V416C0 451.346 28.654 480 64 480H384C419.346 480 448 451.346 448 416V96C448 60.654 419.346 32 384 32ZM320 288C320 340.938 276.938 384 224 384S128 340.938 128 288V224C128 171.062 171.062 128 224 128S320 171.062 320 224V288Z" />
  </svg>
));

Square0Solid.displayName = 'Square0Solid';

export default Square0Solid;
