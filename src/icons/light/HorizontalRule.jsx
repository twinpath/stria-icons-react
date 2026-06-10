import React, { forwardRef } from 'react';

const HorizontalRuleLight = forwardRef(({ size = 24, color = 'currentColor', className, ...props }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 640 512"
    fill={color}
    className={className}
    {...props}
  >
    <path d="M624 272H16C7.156 272 0 264.844 0 256S7.156 240 16 240H624C632.844 240 640 247.156 640 256S632.844 272 624 272Z" />
  </svg>
));

HorizontalRuleLight.displayName = 'HorizontalRuleLight';

export default HorizontalRuleLight;
