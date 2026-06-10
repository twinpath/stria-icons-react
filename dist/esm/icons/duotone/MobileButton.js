import { jsx, jsxs } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const MobileButtonDuotone = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsxs(
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
    children: [
      /* @__PURE__ */ jsx("path", { d: "M32 384V464C32 490.508 53.49 512 80 512H304C330.51 512 352 490.508 352 464V384H32ZM192 480C174.25 480 160 465.75 160 448S174.25 416 192 416S224 430.25 224 448S209.75 480 192 480Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ jsx("path", { d: "M352 48V384H32V48C32 21.492 53.49 0 80 0H304C330.51 0 352 21.492 352 48Z" })
    ]
  }
));
MobileButtonDuotone.displayName = "MobileButtonDuotone";
var MobileButton_default = MobileButtonDuotone;
export {
  MobileButton_default as default
};
