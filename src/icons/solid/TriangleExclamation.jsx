import React, { forwardRef } from 'react';

const TriangleExclamationSolid = forwardRef(({ size = 24, color = 'currentColor', className, ...props }, ref) => (
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
    <path d="M506.274 417L292.95 53C276.618 25 235.397 25 218.954 53L5.741 417C-10.591 444.891 9.852 480 42.741 480H469.276C502.051 480 522.606 445 506.274 417ZM232.001 168C232.001 154.75 242.751 144 256.001 144S280.001 154.75 280.001 168V296C280.001 309.25 269.251 320 256.001 320S232.001 309.25 232.001 296V168ZM256.001 416C238.637 416 224.563 401.924 224.563 384.561C224.563 367.199 238.637 353.123 256.001 353.123S287.438 367.199 287.438 384.561C287.438 401.924 273.364 416 256.001 416Z" />
  </svg>
));

TriangleExclamationSolid.displayName = 'TriangleExclamationSolid';

export default TriangleExclamationSolid;
