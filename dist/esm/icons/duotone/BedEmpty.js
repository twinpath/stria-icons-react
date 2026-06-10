import { jsx, jsxs } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const BedEmptyDuotone = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsxs(
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
      /* @__PURE__ */ jsx("path", { d: "M544 224H64V320H640C640 266.981 597.019 224 544 224Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ jsx("path", { d: "M640 320V464C640 472.844 632.844 480 624 480H592C583.156 480 576 472.844 576 464V416H64V464C64 472.844 56.844 480 48 480H16C7.156 480 0 472.844 0 464V48C0 39.156 7.156 32 16 32H48C56.844 32 64 39.156 64 48V320H640Z" })
    ]
  }
));
BedEmptyDuotone.displayName = "BedEmptyDuotone";
var BedEmpty_default = BedEmptyDuotone;
export {
  BedEmpty_default as default
};
