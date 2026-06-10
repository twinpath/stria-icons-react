import React, { forwardRef } from 'react';

const AngleDownRegular = forwardRef(({ size = 24, color = 'currentColor', className, ...props }, ref) => (
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
    <path d="M360.501 217.453L208.499 361.438C203.874 365.812 197.937 368 191.999 368S180.124 365.812 175.499 361.438L23.497 217.453C13.872 208.328 13.466 193.141 22.56 183.52C31.685 173.832 46.935 173.488 56.497 182.582L191.999 310.945L327.501 182.582C337.064 173.488 352.251 173.832 361.439 183.52C370.532 193.141 370.126 208.328 360.501 217.453Z" />
  </svg>
));

AngleDownRegular.displayName = 'AngleDownRegular';

export default AngleDownRegular;
