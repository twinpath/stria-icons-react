import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const ShelvesEmptySolid = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M608 0H608C590.4 0 576 14.4 576 32V160H64V32C64 14.4 49.6 0 32 0H32C14.4 0 0 14.4 0 32V512H64V480H576V512H640V32C640 14.4 625.6 0 608 0ZM576 416H64V224H576V416Z" })
  }
));
ShelvesEmptySolid.displayName = "ShelvesEmptySolid";
var ShelvesEmpty_default = ShelvesEmptySolid;
export {
  ShelvesEmpty_default as default
};
