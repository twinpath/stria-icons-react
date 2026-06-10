import React, { forwardRef } from 'react';

const TransporterEmptyRegular = forwardRef(({ size = 24, color = 'currentColor', className, ...props }, ref) => (
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
    <path d="M296 464H24C10.745 464 0 474.745 0 488V488C0 501.255 10.745 512 24 512H296C309.255 512 320 501.255 320 488V488C320 474.745 309.255 464 296 464Z" />
  </svg>
));

TransporterEmptyRegular.displayName = 'TransporterEmptyRegular';

export default TransporterEmptyRegular;
