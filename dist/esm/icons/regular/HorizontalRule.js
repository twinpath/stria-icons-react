import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const HorizontalRuleRegular = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M616 280H24C10.75 280 0 269.25 0 256S10.75 232 24 232H616C629.25 232 640 242.75 640 256S629.25 280 616 280Z" })
  }
));
HorizontalRuleRegular.displayName = "HorizontalRuleRegular";
var HorizontalRule_default = HorizontalRuleRegular;
export {
  HorizontalRule_default as default
};
