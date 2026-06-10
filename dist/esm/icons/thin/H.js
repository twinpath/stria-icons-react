import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const HThin = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M384 40V472C384 476.406 380.422 480 376 480S368 476.406 368 472V239.375H16V472C16 476.406 12.422 480 8 480S0 476.406 0 472V40C0 35.594 3.578 32 8 32S16 35.594 16 40V223.375H368V40C368 35.594 371.578 32 376 32S384 35.594 384 40Z" })
  }
));
HThin.displayName = "HThin";
var H_default = HThin;
export {
  H_default as default
};
