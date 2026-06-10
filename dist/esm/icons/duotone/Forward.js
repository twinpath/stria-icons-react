import { jsx, jsxs } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const ForwardDuotone = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsxs(
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
      /* @__PURE__ */ jsx("path", { d: "M52.506 440.594L223.996 297.727V214.273L52.506 71.406C31.879 54.284 0 68.657 0 96.027V415.973C0 443.343 31.879 457.716 52.506 440.594Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ jsx("path", { d: "M308.506 440.594L500.53 280.621C515.782 267.748 515.782 244.252 500.53 231.379L308.506 71.406C287.879 54.284 256 68.657 256 96.027V415.973C256 443.343 287.879 457.716 308.506 440.594Z" })
    ]
  }
));
ForwardDuotone.displayName = "ForwardDuotone";
var Forward_default = ForwardDuotone;
export {
  Forward_default as default
};
