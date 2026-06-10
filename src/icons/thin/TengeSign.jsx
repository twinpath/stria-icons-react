import React, { forwardRef } from 'react';

const TengeSignThin = forwardRef(({ size = 24, color = 'currentColor', className, ...props }, ref) => (
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
    <path d="M8 48H376C380.422 48 384 44.406 384 40S380.422 32 376 32H8C3.578 32 0 35.594 0 40S3.578 48 8 48ZM376 160H8C3.578 160 0 163.594 0 168S3.578 176 8 176H184V472C184 476.406 187.578 480 192 480S200 476.406 200 472V176H376C380.422 176 384 172.406 384 168S380.422 160 376 160Z" />
  </svg>
));

TengeSignThin.displayName = 'TengeSignThin';

export default TengeSignThin;
