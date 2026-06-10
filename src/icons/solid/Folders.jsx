import React, { forwardRef } from 'react';

const FoldersSolid = forwardRef(({ size = 24, color = 'currentColor', className, ...props }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 640 512"
    fill={color}
    className={className}
    {...props}
  >
    <path d="M560 96H368L304 32H176C149.5 32 128 53.5 128 80V336C128 362.5 149.5 384 176 384H560C586.5 384 608 362.5 608 336V144C608 117.5 586.5 96 560 96ZM80 400V160C53.49 160 32 181.492 32 208V416C32 451.346 60.654 480 96 480H464C490.51 480 512 458.508 512 432H112C94.326 432 80 417.672 80 400Z" />
  </svg>
));

FoldersSolid.displayName = 'FoldersSolid';

export default FoldersSolid;
