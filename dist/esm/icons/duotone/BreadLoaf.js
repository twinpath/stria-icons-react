import { jsx, jsxs } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const BreadLoafDuotone = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsxs(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: [
      /* @__PURE__ */ jsx("path", { d: "M480 192C480 103.625 372.5 32 240 32S0 103.625 0 192C0 227.375 30.875 256 64 256V448C64 465.625 78.375 480 96 480H384C401.625 480 416 465.625 416 448V256C449.125 256 480 227.375 480 192Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ jsx("path", { d: "M640 192C640 227.375 609.125 256 576 256V448C576 465.625 561.625 480 544 480H384C401.625 480 416 465.625 416 448V256C449.125 256 480 227.375 480 192C480 103.625 372.5 32 240 32H400C532.5 32 640 103.625 640 192Z" })
    ]
  }
));
BreadLoafDuotone.displayName = "BreadLoafDuotone";
var BreadLoaf_default = BreadLoafDuotone;
export {
  BreadLoaf_default as default
};
