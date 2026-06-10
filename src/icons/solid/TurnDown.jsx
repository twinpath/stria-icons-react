import React, { forwardRef } from 'react';

const TurnDownSolid = forwardRef(({ size = 24, color = 'currentColor', className, ...props }, ref) => (
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
    <path d="M313.596 392.328L209.596 504.328C200.096 514.555 183.906 514.555 174.408 504.328L70.408 392.328C63.924 385.344 62.189 375.156 66.002 366.406S78.455 352 88.002 352H152V80H40C17.906 80 0 62.094 0 40S17.906 0 40 0H192C214.094 0 232 17.906 232 40V352H296.002C305.549 352 314.189 357.656 318.002 366.406S320.08 385.344 313.596 392.328Z" />
  </svg>
));

TurnDownSolid.displayName = 'TurnDownSolid';

export default TurnDownSolid;
