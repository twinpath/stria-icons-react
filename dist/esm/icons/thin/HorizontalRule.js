import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const HorizontalRuleThin = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M640 256C640 260.406 636.406 264 632 264H8C3.594 264 0 260.406 0 256S3.594 248 8 248H632C636.406 248 640 251.594 640 256Z" })
  }
));
HorizontalRuleThin.displayName = "HorizontalRuleThin";
var HorizontalRule_default = HorizontalRuleThin;
export {
  HorizontalRule_default as default
};
