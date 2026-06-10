import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const OSolid = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M224 480C100.5 480 0 379.5 0 256S100.5 32 224 32S448 132.5 448 256S347.5 480 224 480ZM224 128C153.406 128 96 185.406 96 256S153.406 384 224 384S352 326.594 352 256S294.594 128 224 128Z" })
  }
));
OSolid.displayName = "OSolid";
var O_default = OSolid;
export {
  O_default as default
};
