import React, { forwardRef } from 'react';

const ImagePolaroidUserDuotone = forwardRef(({ size = 24, color = 'currentColor', className, ...props }, ref) => (
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
    <path d="M400 32H48C21.6 32 0 53.602 0 80V432C0 458.398 21.6 480 48 480H400C426.4 480 448 458.398 448 432V80C448 53.602 426.4 32 400 32ZM384 352H64V96H384V352Z" className="stria-secondary" style={{ opacity: 0.4 }} />
    <path d="M224 256C259.346 256 288 227.344 288 192S259.346 128 224 128S160 156.656 160 192S188.654 256 224 256ZM384 352H336V352C336 316.654 307.346 288 272 288H176C140.654 288 112 316.654 112 352V352H64V96H384V352Z" />
  </svg>
));

ImagePolaroidUserDuotone.displayName = 'ImagePolaroidUserDuotone';

export default ImagePolaroidUserDuotone;
