import { jsx, jsxs } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const EqualsDuotone = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsxs(
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
    children: [
      /* @__PURE__ */ jsx("path", { d: "M392 200H56C33.906 200 16 182.094 16 160S33.906 120 56 120H392C414.094 120 432 137.906 432 160S414.094 200 392 200Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ jsx("path", { d: "M392 392H56C33.906 392 16 374.094 16 352S33.906 312 56 312H392C414.094 312 432 329.906 432 352S414.094 392 392 392Z" })
    ]
  }
));
EqualsDuotone.displayName = "EqualsDuotone";
var Equals_default = EqualsDuotone;
export {
  Equals_default as default
};
