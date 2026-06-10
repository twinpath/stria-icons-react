import React, { forwardRef } from 'react';

const ReplyAllDuotone = forwardRef(({ size = 24, color = 'currentColor', className, ...props }, ref) => (
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
    <path d="M8.387 226.158L184.387 378.158C199.762 391.455 224.074 380.705 224.074 360.002V344.168L66.406 208.002L224.074 71.834V56.018C224.074 35.346 199.793 24.549 184.387 37.846L8.387 189.846C-2.693 199.414 -2.693 216.59 8.387 226.158Z" className="stria-secondary" style={{ opacity: 0.4 }} />
    <path d="M136.309 226.158L312.309 378.158C327.684 391.455 351.996 380.705 351.996 360.002V275.963C460.492 288.539 503.076 334.758 464.594 457.83C459.563 473.924 479 486.393 492.656 476.455C536.406 444.643 576 383.768 576 322.33C576 191.014 481.137 149.102 351.996 138.857V56.018C351.996 35.346 327.715 24.549 312.309 37.846L136.309 189.846C125.215 199.408 125.246 216.596 136.309 226.158Z" />
  </svg>
));

ReplyAllDuotone.displayName = 'ReplyAllDuotone';

export default ReplyAllDuotone;
