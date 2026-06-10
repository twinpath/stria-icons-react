import React, { forwardRef } from 'react';

const SquareSmallRegular = forwardRef(({ size = 24, color = 'currentColor', className, ...props }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 320 512"
    fill={color}
    className={className}
    {...props}
  >
    <path d="M256 96H64C28.654 96 0 124.654 0 160V352C0 387.346 28.654 416 64 416H256C291.346 416 320 387.346 320 352V160C320 124.654 291.346 96 256 96ZM272 352C272 360.822 264.822 368 256 368H64C55.178 368 48 360.822 48 352V160C48 151.178 55.178 144 64 144H256C264.822 144 272 151.178 272 160V352Z" />
  </svg>
));

SquareSmallRegular.displayName = 'SquareSmallRegular';

export default SquareSmallRegular;
