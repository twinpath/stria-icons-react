import React, { forwardRef } from 'react';

const UserCrownDuotone = forwardRef(({ size = 24, color = 'currentColor', className, ...props }, ref) => (
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
    <path d="M96 144V128H352V144C352 214.75 294.75 272 224 272S96 214.75 96 144Z" className="stria-secondary" style={{ opacity: 0.4 }} />
    <path d="M352 0L288 32L224 0L160 32L96 0V128H352V0ZM274.664 304H173.336C77.609 304 0 381.602 0 477.332C0 496.477 15.523 512 34.664 512H413.336C432.477 512 448 496.477 448 477.332C448 381.602 370.398 304 274.664 304Z" />
  </svg>
));

UserCrownDuotone.displayName = 'UserCrownDuotone';

export default UserCrownDuotone;
