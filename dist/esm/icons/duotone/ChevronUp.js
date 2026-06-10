import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const ChevronUpDuotone = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M436.908 339.657C429.049 347.875 418.533 352 408.002 352C398.048 352 388.095 348.313 380.345 340.907L224 191.354L67.655 340.907C51.702 356.156 26.342 355.625 11.092 339.657C-4.174 323.689 -3.611 298.378 12.342 283.098L196.344 107.109C211.812 92.297 236.188 92.297 251.656 107.109L435.658 283.098C451.611 298.378 452.174 323.689 436.908 339.657Z", className: "stria-secondary", style: { opacity: 0.4 } })
  }
));
ChevronUpDuotone.displayName = "ChevronUpDuotone";
var ChevronUp_default = ChevronUpDuotone;
export {
  ChevronUp_default as default
};
