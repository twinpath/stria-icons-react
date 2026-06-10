import React, { forwardRef } from 'react';

const SquareDDuotone = forwardRef(({ size = 24, color = 'currentColor', className, ...props }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 448 512"
    fill={color}
    className={className}
    {...props}
  >
    <path d="M304 256C304 300.125 267.391 336 222.406 336H176V176H222.406C267.391 176 304 211.891 304 256ZM448 96V416C448 451.346 419.348 480 384 480H64C28.654 480 0 451.346 0 416V96C0 60.654 28.654 32 64 32H384C419.348 32 448 60.654 448 96ZM352 256C352 185.422 293.859 128 222.406 128H152C138.75 128 128 138.75 128 152V360C128 373.25 138.75 384 152 384H222.406C293.859 384 352 326.594 352 256Z" className="stria-secondary" style={{ opacity: 0.4 }} />
    <path d="M222.406 128H152C138.75 128 128 138.75 128 152V360C128 373.25 138.75 384 152 384H222.406C293.859 384 352 326.594 352 256C352 185.422 293.859 128 222.406 128ZM222.406 336H176V176H222.406C267.391 176 304 211.891 304 256C304 300.125 267.391 336 222.406 336Z" />
  </svg>
));

SquareDDuotone.displayName = 'SquareDDuotone';

export default SquareDDuotone;
