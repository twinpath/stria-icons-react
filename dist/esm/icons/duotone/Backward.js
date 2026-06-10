import { jsx, jsxs } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const BackwardDuotone = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsxs(
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
      /* @__PURE__ */ jsx("path", { d: "M459.49 71.406L288 214.273V297.727L459.49 440.594C480.117 457.716 511.996 443.343 511.996 415.973V96.027C511.996 68.657 480.117 54.284 459.49 71.406Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ jsx("path", { d: "M244.53 96.027V415.973C244.53 443.343 212.651 457.716 192.023 440.594L0 280.621C-15.252 267.748 -15.252 244.252 0 231.379L192.023 71.406C212.651 54.284 244.53 68.657 244.53 96.027Z" })
    ]
  }
));
BackwardDuotone.displayName = "BackwardDuotone";
var Backward_default = BackwardDuotone;
export {
  Backward_default as default
};
