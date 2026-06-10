import { forwardRef } from 'react';

const PencilSlashDuotone = forwardRef(({ size = 24, color = 'currentColor', className, ...props }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    className={className}
    {...props}
  >
  </svg>
));

PencilSlashDuotone.displayName = 'PencilSlashDuotone';

export default PencilSlashDuotone;
