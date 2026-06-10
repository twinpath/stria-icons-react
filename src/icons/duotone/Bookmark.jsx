import React, { forwardRef } from 'react';

const BookmarkDuotone = forwardRef(({ size = 24, color = 'currentColor', className, ...props }, ref) => (
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
    <path d="M384 48V512L192 400L0 512V48C0 21.5 21.5 0 48 0H336C362.5 0 384 21.5 384 48Z" className="stria-secondary" style={{ opacity: 0.4 }} />
  </svg>
));

BookmarkDuotone.displayName = 'BookmarkDuotone';

export default BookmarkDuotone;
