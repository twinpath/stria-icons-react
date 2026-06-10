import { jsx, jsxs } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const CircleHalfDuotone = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsxs(
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
      /* @__PURE__ */ jsx("path", { d: "M256 16C388.547 16 496 123.451 496 256S388.547 496 256 496V16Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ jsx("path", { d: "M256 496C123.453 496 16 388.549 16 256S123.453 16 256 16V496Z" })
    ]
  }
));
CircleHalfDuotone.displayName = "CircleHalfDuotone";
var CircleHalf_default = CircleHalfDuotone;
export {
  CircleHalf_default as default
};
