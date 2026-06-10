import { jsx, jsxs } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const CircleTDuotone = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsxs(
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
      /* @__PURE__ */ jsx("path", { d: "M256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM360 192H280V360C280 373.25 269.25 384 256 384S232 373.25 232 360V192H152C138.75 192 128 181.25 128 168S138.75 144 152 144H360C373.25 144 384 154.75 384 168S373.25 192 360 192Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ jsx("path", { d: "M360 144H152C138.75 144 128 154.75 128 168S138.75 192 152 192H232V360C232 373.25 242.75 384 256 384S280 373.25 280 360V192H360C373.25 192 384 181.25 384 168S373.25 144 360 144Z" })
    ]
  }
));
CircleTDuotone.displayName = "CircleTDuotone";
var CircleT_default = CircleTDuotone;
export {
  CircleT_default as default
};
