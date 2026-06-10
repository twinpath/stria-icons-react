import { jsx, jsxs } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const BookBlankDuotone = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsxs(
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
    children: [
      /* @__PURE__ */ jsx("path", { d: "M416 384V448H96C78.326 448 64 433.672 64 416C64 398.326 78.326 384 96 384H416Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ jsx("path", { d: "M96 384H424C437.254 384 448 373.254 448 360V32C448 14.326 433.674 0 416 0H96C42.98 0 0 42.98 0 96V416C0 469.02 42.98 512 96 512H424C437.254 512 448 501.254 448 488V472C448 458.744 437.254 448 424 448H96C78.326 448 64 433.672 64 416C64 398.326 78.326 384 96 384Z" })
    ]
  }
));
BookBlankDuotone.displayName = "BookBlankDuotone";
var BookBlank_default = BookBlankDuotone;
export {
  BookBlank_default as default
};
