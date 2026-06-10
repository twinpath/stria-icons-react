import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const MicrosoftBrands = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M0 32h214.6v214.6H0V32zm233.4 0H448v214.6H233.4V32zM0 265.4h214.6V480H0V265.4zm233.4 0H448V480H233.4V265.4z" })
  }
));
MicrosoftBrands.displayName = "MicrosoftBrands";
var Microsoft_default = MicrosoftBrands;
export {
  Microsoft_default as default
};
