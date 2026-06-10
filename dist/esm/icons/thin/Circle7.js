import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const Circle7Thin = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M344 128H168C163.594 128 160 131.594 160 136S163.594 144 168 144H329.875L193.125 371.875C190.875 375.688 192.094 380.594 195.875 382.875C197.188 383.625 198.594 384 200 384C202.719 384 205.375 382.625 206.875 380.125L350.875 140.125C352.344 137.656 352.375 134.562 350.969 132.062C349.531 129.562 346.875 128 344 128ZM256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM256 480C132.486 480 32 379.514 32 256S132.486 32 256 32S480 132.486 480 256S379.514 480 256 480Z" })
  }
));
Circle7Thin.displayName = "Circle7Thin";
var Circle7_default = Circle7Thin;
export {
  Circle7_default as default
};
