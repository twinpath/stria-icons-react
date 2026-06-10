import React, { forwardRef } from 'react';

const ParagraphDuotone = forwardRef(({ size = 24, color = 'currentColor', className, ...props }, ref) => (
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
    <path d="M384 96V448C384 465.674 369.674 480 352.002 480H351.998C334.326 480 320 465.674 320 448V96H384Z" className="stria-secondary" style={{ opacity: 0.4 }} />
    <path d="M447.999 63.998V64C447.999 81.674 433.673 96 416.001 96H287.999V448C287.999 465.674 273.673 480 256.001 480H255.997C238.325 480 223.999 465.674 223.999 448V352H198.859C115.288 352 40.669 290.893 32.749 207.699C23.661 112.266 98.445 32 191.999 32H416.001C433.673 32 447.999 46.326 447.999 63.998Z" />
  </svg>
));

ParagraphDuotone.displayName = 'ParagraphDuotone';

export default ParagraphDuotone;
