import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const HorizontalRuleDuotone = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M640 255.874V255.874C640 273.543 625.543 288 607.874 288H31.874C14.343 288 0 273.657 0 256.126V256.126C0 238.457 14.457 224 32.126 224H608.126C625.73 224 640 238.27 640 255.874Z", className: "stria-secondary", style: { opacity: 0.4 } })
  }
));
HorizontalRuleDuotone.displayName = "HorizontalRuleDuotone";
var HorizontalRule_default = HorizontalRuleDuotone;
export {
  HorizontalRule_default as default
};
