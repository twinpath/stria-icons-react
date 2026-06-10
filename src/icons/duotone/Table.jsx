import React, { forwardRef } from 'react';

const TableDuotone = forwardRef(({ size = 24, color = 'currentColor', className, ...props }, ref) => (
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
    <path d="M64 256H224V160H288V256H448V320H288V416H224V320H64V256Z" className="stria-secondary" style={{ opacity: 0.4 }} />
    <path d="M448 32H64C28.654 32 0 60.652 0 96V416C0 451.346 28.654 480 64 480H448C483.346 480 512 451.346 512 416V96C512 60.652 483.346 32 448 32ZM448 416H64V160H448V416Z" />
  </svg>
));

TableDuotone.displayName = 'TableDuotone';

export default TableDuotone;
