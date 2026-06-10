import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const BookBlankSolid = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ jsx("path", { d: "M448 360V24C448 10.744 437.254 0 424 0H96C42.98 0 0 42.98 0 96V416C0 469.02 42.98 512 96 512H424C437.254 512 448 501.254 448 488V472C448 461.582 441.275 452.936 432 449.615V382.385C441.275 379.064 448 370.416 448 360ZM64 416C64 398.326 78.326 384 96 384H384V448H96C78.326 448 64 433.672 64 416Z" })
  }
));
BookBlankSolid.displayName = "BookBlankSolid";
var BookBlank_default = BookBlankSolid;
export {
  BookBlank_default as default
};
