import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const PersonSimpleSolid = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 256 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ jsx("path", { d: "M160 160H96C60.654 160 32 188.654 32 224V320C32 337.673 46.327 352 64 352L64 352V480C64 497.673 78.327 512 96 512H160C177.673 512 192 497.673 192 480V352C209.673 352 224 337.673 224 320V224C224 188.654 195.346 160 160 160ZM128 128C163.375 128 192 99.375 192 64S163.375 0 128 0S64 28.625 64 64S92.625 128 128 128Z" })
  }
));
PersonSimpleSolid.displayName = "PersonSimpleSolid";
var PersonSimple_default = PersonSimpleSolid;
export {
  PersonSimple_default as default
};
