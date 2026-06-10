import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const WandMagicSolid = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M497.944 48L464.02 14.061C445.276 -4.686 414.881 -4.688 396.137 14.059L14.061 396.109C-4.685 414.854 -4.687 445.244 14.057 463.99L47.99 497.938C66.733 516.686 97.127 516.688 115.873 497.941L497.942 115.879C516.686 97.135 516.686 66.746 497.944 48ZM347.311 187.311L324.684 164.684L430.045 59.32L452.703 81.947L347.311 187.311Z" })
  }
));
WandMagicSolid.displayName = "WandMagicSolid";
var WandMagic_default = WandMagicSolid;
export {
  WandMagic_default as default
};
