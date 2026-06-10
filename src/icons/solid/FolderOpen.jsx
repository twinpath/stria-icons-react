import React, { forwardRef } from 'react';

const FolderOpenSolid = forwardRef(({ size = 24, color = 'currentColor', className, ...props }, ref) => (
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
    <path d="M147.781 192H480V144C480 117.492 458.51 96 432 96H272L208 32H48C21.49 32 0 53.492 0 80V408.445L90.535 227.383C101.445 205.555 123.381 192 147.781 192ZM543.961 224H147.781C135.656 224 124.578 230.844 119.156 241.688L0 480H447.961C460.078 480 471.16 473.148 476.578 462.312L572.578 270.312C583.219 249.031 567.746 224 543.961 224Z" />
  </svg>
));

FolderOpenSolid.displayName = 'FolderOpenSolid';

export default FolderOpenSolid;
