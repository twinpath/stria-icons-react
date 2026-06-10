import { jsx, jsxs } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const CircleHalfStrokeDuotone = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsxs(
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
      /* @__PURE__ */ jsx("path", { d: "M496 256C496 388.549 388.549 496 256 496V432C353.047 432 432 353.047 432 256S353.047 80 256 80V16C388.549 16 496 123.451 496 256Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ jsx("path", { d: "M256 496C123.453 496 16 388.549 16 256S123.453 16 256 16V496Z" })
    ]
  }
));
CircleHalfStrokeDuotone.displayName = "CircleHalfStrokeDuotone";
var CircleHalfStroke_default = CircleHalfStrokeDuotone;
export {
  CircleHalfStroke_default as default
};
