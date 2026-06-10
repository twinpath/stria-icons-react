import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const CaretUpLight = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 320 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ jsx("path", { d: "M32.039 320H287.988C316.357 320 330.729 285.5 310.608 265.375L182.634 137.375C170.136 124.875 149.89 124.875 137.393 137.375L9.419 265.375C-10.702 285.5 3.545 320 32.039 320ZM160.013 160L287.988 288H32.039L160.013 160Z" })
  }
));
CaretUpLight.displayName = "CaretUpLight";
var CaretUp_default = CaretUpLight;
export {
  CaretUp_default as default
};
