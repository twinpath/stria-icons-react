import React, { forwardRef } from 'react';

const DisplaySolid = forwardRef(({ size = 24, color = 'currentColor', className, ...props }, ref) => (
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
    <path d="M528 0H48C21.5 0 0 21.5 0 48V368C0 394.5 21.5 416 48 416H240L224 464H152C138.75 464 128 474.75 128 488S138.75 512 152 512H424C437.25 512 448 501.25 448 488S437.25 464 424 464H352L336 416H528C554.5 416 576 394.5 576 368V48C576 21.5 554.5 0 528 0ZM512 352H64V64H512V352Z" />
  </svg>
));

DisplaySolid.displayName = 'DisplaySolid';

export default DisplaySolid;
