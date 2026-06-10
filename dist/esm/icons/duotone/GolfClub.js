import { jsx, jsxs } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const GolfClubDuotone = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsxs(
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
      /* @__PURE__ */ jsx("path", { d: "M509.15 42.903L282.871 494.335C277.445 505.163 266.373 511.999 254.264 511.999H32C14.326 511.999 0 497.671 0 479.999V471.999H52C58.627 471.999 64 466.624 64 459.999S58.627 447.999 52 447.999H0V415.999H52C58.627 415.999 64 410.624 64 403.999S58.627 391.999 52 391.999H0V363.007C0 341.57 20.662 326.199 41.193 332.359L258.947 397.683L452.734 12.673C458.996 0.986 473.549 -3.413 485.232 2.853L499.338 10.419C511.016 16.681 515.408 31.224 509.15 42.903Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ jsx("path", { d: "M0 447.999H52C58.627 447.999 64 453.374 64 459.999S58.627 471.999 52 471.999H0M0 391.999H52C58.627 391.999 64 397.374 64 403.999S58.627 415.999 52 415.999H0" })
    ]
  }
));
GolfClubDuotone.displayName = "GolfClubDuotone";
var GolfClub_default = GolfClubDuotone;
export {
  GolfClub_default as default
};
