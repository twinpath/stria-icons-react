import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const MagnifyingGlassThin = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M509.656 498.344L360.465 349.152C394.828 312.053 416 262.557 416 208C416 93.125 322.875 0 208 0S0 93.125 0 208S93.125 416 208 416C262.555 416 312.055 394.828 349.152 360.465L498.344 509.656C499.906 511.219 501.938 512 504 512S508.094 511.219 509.656 509.656C512.781 506.531 512.781 501.469 509.656 498.344ZM208 400C102.133 400 16 313.869 16 208S102.133 16 208 16S400 102.131 400 208S313.867 400 208 400Z" })
  }
));
MagnifyingGlassThin.displayName = "MagnifyingGlassThin";
var MagnifyingGlass_default = MagnifyingGlassThin;
export {
  MagnifyingGlass_default as default
};
