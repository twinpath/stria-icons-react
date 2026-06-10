import { jsx, jsxs } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const PersonDressSimpleDuotone = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsxs(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 256 512",
    fill: color,
    className,
    ...props,
    children: [
      /* @__PURE__ */ jsx("path", { d: "M128 128C163.375 128 192 99.375 192 64S163.375 0 128 0S64 28.625 64 64S92.625 128 128 128Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ jsx("path", { d: "M207.149 194.813L255.375 363.604C258.295 373.826 250.62 384 239.99 384H192V480C192 497.673 177.673 512 160 512H96C78.327 512 64 497.673 64 480V384H16.01C5.38 384 -2.295 373.826 0.625 363.604L48.851 194.813C54.739 174.207 73.573 160 95.005 160H160.995C182.427 160 201.261 174.207 207.149 194.813Z" })
    ]
  }
));
PersonDressSimpleDuotone.displayName = "PersonDressSimpleDuotone";
var PersonDressSimple_default = PersonDressSimpleDuotone;
export {
  PersonDressSimple_default as default
};
