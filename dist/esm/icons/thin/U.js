import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const UThin = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M192 480C86.125 480 0 393.875 0 288V40C0 35.594 3.578 32 8 32S16 35.594 16 40V288C16 385.031 94.953 464 192 464S368 385.031 368 288V40C368 35.594 371.578 32 376 32S384 35.594 384 40V288C384 393.875 297.875 480 192 480Z" })
  }
));
UThin.displayName = "UThin";
var U_default = UThin;
export {
  U_default as default
};
