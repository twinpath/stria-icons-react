import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const TurnUpRegular = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M318.002 145.592C314.189 154.342 305.549 159.998 296.002 159.998H216V487.998C216 501.248 205.25 511.998 192 511.998H24C10.75 511.998 0 501.248 0 487.998S10.75 463.998 24 463.998H168V159.998H88.002C78.455 159.998 69.814 154.342 66.002 145.592S63.924 126.654 70.408 119.67L174.408 7.67C183.906 -2.557 200.096 -2.557 209.596 7.67L313.596 119.67C320.08 126.654 321.814 136.842 318.002 145.592Z" })
  }
));
TurnUpRegular.displayName = "TurnUpRegular";
var TurnUp_default = TurnUpRegular;
export {
  TurnUp_default as default
};
