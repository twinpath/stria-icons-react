import React, { forwardRef } from 'react';

const ArrowDownRightSolid = forwardRef(({ size = 24, color = 'currentColor', className, ...props }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 384 512"
    fill={color}
    className={className}
    {...props}
  >
    <path d="M328 132.281C305.906 132.281 288 150.188 288 172.281V283.719L84.281 80C68.656 64.375 43.344 64.375 27.719 80S12.094 120.938 27.719 136.562L231.437 340.281H120C97.906 340.281 80 358.188 80 380.281S97.906 420.281 120 420.281H328C350.094 420.281 368 402.375 368 380.281V172.281C368 150.188 350.094 132.281 328 132.281Z" />
  </svg>
));

ArrowDownRightSolid.displayName = 'ArrowDownRightSolid';

export default ArrowDownRightSolid;
