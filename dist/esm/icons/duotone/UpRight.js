import { jsx, jsxs } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const UpRightDuotone = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsxs(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 384 512",
    fill: color,
    className,
    ...props,
    children: [
      /* @__PURE__ */ jsx("path", { d: "M70.626 422.627L25.372 377.371C12.876 364.875 12.876 344.615 25.372 332.117L154.984 202.508L245.496 293.016L115.884 422.627C103.384 435.125 83.126 435.123 70.626 422.627Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ jsx("path", { d: "M87.372 134.625C78.223 125.477 75.485 111.709 80.434 99.756C85.391 87.789 97.047 80 110.001 80H336.274C345.11 80 353.11 83.58 358.899 89.369C364.688 95.16 368.27 103.158 368.27 111.998V338.271C368.27 351.221 360.481 362.877 348.516 367.838C336.563 372.787 322.794 370.047 313.645 360.898L87.372 134.625Z" })
    ]
  }
));
UpRightDuotone.displayName = "UpRightDuotone";
var UpRight_default = UpRightDuotone;
export {
  UpRight_default as default
};
