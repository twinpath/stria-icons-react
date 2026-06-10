import React, { forwardRef } from 'react';

const BatteryFullDuotone = forwardRef(({ size = 24, color = 'currentColor', className, ...props }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 576 512"
    fill={color}
    className={className}
    {...props}
  >
    <path d="M544 192V160C544 124.654 515.346 96 480 96H64C28.654 96 0 124.654 0 160V352C0 387.346 28.654 416 64 416H480C515.346 416 544 387.346 544 352V320C561.674 320 576 305.674 576 288V224C576 206.326 561.674 192 544 192ZM480 352H64V160H480V352Z" className="stria-secondary" style={{ opacity: 0.4 }} />
    <path d="M448 192H96V320H448V192Z" />
  </svg>
));

BatteryFullDuotone.displayName = 'BatteryFullDuotone';

export default BatteryFullDuotone;
