import React, { forwardRef } from 'react';

const TableLayoutDuotone = forwardRef(({ size = 24, color = 'currentColor', className, ...props }, ref) => (
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
    <path d="M192 224V416H128V224H64V160H448V224H192Z" className="stria-secondary" style={{ opacity: 0.4 }} />
    <path d="M448 32H64C28.654 32 0 60.652 0 96V416C0 451.346 28.654 480 64 480H448C483.346 480 512 451.346 512 416V96C512 60.652 483.346 32 448 32ZM448 416H64V96H448V416Z" />
  </svg>
));

TableLayoutDuotone.displayName = 'TableLayoutDuotone';

export default TableLayoutDuotone;
