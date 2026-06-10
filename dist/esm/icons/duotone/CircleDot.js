import { jsx, jsxs } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const CircleDotDuotone = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsxs(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 512 512",
    fill: color,
    className,
    ...props,
    children: [
      /* @__PURE__ */ jsx("path", { d: "M256 16C123.419 16 16 123.419 16 256S123.419 496 256 496S496 388.581 496 256S388.581 16 256 16ZM352 256C352 308.95 308.95 352 256 352S160 308.95 160 256S203.05 160 256 160S352 203.05 352 256Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ jsx("path", { d: "M352 256C352 308.95 308.95 352 256 352S160 308.95 160 256S203.05 160 256 160S352 203.05 352 256Z" })
    ]
  }
));
CircleDotDuotone.displayName = "CircleDotDuotone";
var CircleDot_default = CircleDotDuotone;
export {
  CircleDot_default as default
};
