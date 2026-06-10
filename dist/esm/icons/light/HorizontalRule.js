import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const HorizontalRuleLight = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M624 272H16C7.156 272 0 264.844 0 256S7.156 240 16 240H624C632.844 240 640 247.156 640 256S632.844 272 624 272Z" })
  }
));
HorizontalRuleLight.displayName = "HorizontalRuleLight";
var HorizontalRule_default = HorizontalRuleLight;
export {
  HorizontalRule_default as default
};
