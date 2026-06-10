import React, { forwardRef } from 'react';

const TableCellsLargeRegular = forwardRef(({ size = 24, color = 'currentColor', className, ...props }, ref) => (
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
    <path d="M448 32H64C28.654 32 0 60.652 0 96V416C0 451.346 28.654 480 64 480H448C483.346 480 512 451.346 512 416V96C512 60.652 483.346 32 448 32ZM464 96V232H280V80H448C456.822 80 464 87.178 464 96ZM64 80H232V232H48V96C48 87.178 55.178 80 64 80ZM48 416V280H232V432H64C55.178 432 48 424.822 48 416ZM448 432H280V280H464V416C464 424.822 456.822 432 448 432Z" />
  </svg>
));

TableCellsLargeRegular.displayName = 'TableCellsLargeRegular';

export default TableCellsLargeRegular;
