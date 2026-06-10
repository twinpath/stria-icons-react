import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const IThin = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M320 472C320 476.406 316.406 480 312 480H8C3.594 480 0 476.406 0 472S3.594 464 8 464H152V48H8C3.594 48 0 44.406 0 40S3.594 32 8 32H312C316.406 32 320 35.594 320 40S316.406 48 312 48H168V464H312C316.406 464 320 467.594 320 472Z" })
  }
));
IThin.displayName = "IThin";
var I_default = IThin;
export {
  I_default as default
};
