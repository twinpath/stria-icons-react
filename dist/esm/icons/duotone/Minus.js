import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const MinusDuotone = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ jsx("path", { d: "M392 296H56C33.906 296 16 278.094 16 256S33.906 216 56 216H392C414.094 216 432 233.906 432 256S414.094 296 392 296Z", className: "stria-secondary", style: { opacity: 0.4 } })
  }
));
MinusDuotone.displayName = "MinusDuotone";
var Minus_default = MinusDuotone;
export {
  Minus_default as default
};
