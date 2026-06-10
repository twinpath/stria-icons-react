import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const WindowMinimizeThin = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M512 472C512 476.406 508.406 480 504 480H8C3.594 480 0 476.406 0 472S3.594 464 8 464H504C508.406 464 512 467.594 512 472Z" })
  }
));
WindowMinimizeThin.displayName = "WindowMinimizeThin";
var WindowMinimize_default = WindowMinimizeThin;
export {
  WindowMinimize_default as default
};
