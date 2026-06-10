import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const JThin = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M160 480C71.781 480 0 408.219 0 320V264C0 259.594 3.594 256 8 256S16 259.594 16 264V320C16 399.406 80.594 464 160 464S304 399.406 304 320V40C304 35.594 307.594 32 312 32S320 35.594 320 40V320C320 408.219 248.219 480 160 480Z" })
  }
));
JThin.displayName = "JThin";
var J_default = JThin;
export {
  J_default as default
};
