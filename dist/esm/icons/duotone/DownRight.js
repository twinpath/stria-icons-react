import { jsx, jsxs } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const DownRightDuotone = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsxs(
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
      /* @__PURE__ */ jsx("path", { d: "M25.373 134.626L70.629 89.372C83.125 76.876 103.385 76.876 115.883 89.372L245.492 218.984L154.984 309.496L25.373 179.884C12.875 167.384 12.877 147.126 25.373 134.626Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ jsx("path", { d: "M313.647 151.102C322.795 141.953 336.563 139.215 348.516 144.164C360.482 149.121 368.272 160.777 368.272 173.73V400.004C368.272 408.84 364.691 416.84 358.902 422.629C353.111 428.418 345.113 432 336.273 432H110C97.051 432 85.395 424.211 80.434 412.246C75.484 400.293 78.225 386.523 87.373 377.375L313.647 151.102Z" })
    ]
  }
));
DownRightDuotone.displayName = "DownRightDuotone";
var DownRight_default = DownRightDuotone;
export {
  DownRight_default as default
};
