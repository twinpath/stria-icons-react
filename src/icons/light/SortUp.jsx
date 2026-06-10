import React, { forwardRef } from 'react';

const SortUpLight = forwardRef(({ size = 24, color = 'currentColor', className, ...props }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 320 512"
    fill={color}
    className={className}
    {...props}
  >
    <path d="M32.046 224H287.954C316.318 224 330.688 189.5 310.571 169.375L182.617 41.375C170.121 28.875 149.754 28.875 137.258 41.375L9.304 169.375C-10.688 189.5 3.682 224 32.046 224ZM160 64L287.954 192H32.046L160 64Z" />
  </svg>
));

SortUpLight.displayName = 'SortUpLight';

export default SortUpLight;
