import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const TurnDownRegular = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 384 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ jsx("path", { d: "M313.596 392.328L209.596 504.328C200.096 514.555 183.906 514.555 174.408 504.328L70.408 392.328C63.924 385.344 62.189 375.156 66.002 366.406S78.455 352 88.002 352H168V48H24C10.75 48 0 37.25 0 24S10.75 0 24 0H192C205.25 0 216 10.75 216 24V352H296.002C305.549 352 314.189 357.656 318.002 366.406S320.08 385.344 313.596 392.328Z" })
  }
));
TurnDownRegular.displayName = "TurnDownRegular";
var TurnDown_default = TurnDownRegular;
export {
  TurnDown_default as default
};
