import { jsx, jsxs } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const SirenDuotone = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsxs(
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
      /* @__PURE__ */ jsx("path", { d: "M128.25 167C128.5 164.875 129.625 162.875 131.25 161.625C133 160.375 135.125 159.75 137.25 160.125L153.125 162.25C155.125 162.5 157.125 163.625 158.375 165.25C159.625 167 160.25 169.125 160 171.25L135.875 352H400L375 152C371 120 343.75 96 311.5 96H136.5C104.25 96 77 120 73 152L48 352H103.5L128.25 167Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ jsx("path", { d: "M424 352H24C10.745 352 0 362.745 0 376V456C0 469.255 10.745 480 24 480H424C437.255 480 448 469.255 448 456V376C448 362.745 437.255 352 424 352Z" })
    ]
  }
));
SirenDuotone.displayName = "SirenDuotone";
var Siren_default = SirenDuotone;
export {
  Siren_default as default
};
