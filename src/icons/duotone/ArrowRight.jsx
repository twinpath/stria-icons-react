import React, { forwardRef } from 'react';

const ArrowRightDuotone = forwardRef(({ size = 24, color = 'currentColor', className, ...props }, ref) => (
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
    <path d="M314.82 296H40C17.906 296 0 278.094 0 256S17.906 216 40 216H314.82L352.812 256L314.82 296Z" className="stria-secondary" style={{ opacity: 0.4 }} />
    <path d="M447.978 256C447.978 265.922 444.322 275.828 436.978 283.547L284.978 443.547C269.759 459.562 244.447 460.219 228.416 445C212.478 429.766 211.791 404.422 226.978 388.453L352.791 256L226.978 123.547C211.791 107.562 212.447 82.219 228.416 67C244.447 51.781 269.759 52.438 284.978 68.453L436.978 228.453C444.322 236.172 447.978 246.078 447.978 256Z" />
  </svg>
));

ArrowRightDuotone.displayName = 'ArrowRightDuotone';

export default ArrowRightDuotone;
