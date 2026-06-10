import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const ZDuotone = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M383.998 432C383.998 458.5 362.498 480 335.999 480H48.001C29.47 480 12.564 469.312 4.626 452.562C-3.311 435.781 -0.905 415.969 10.845 401.594L234.718 128H48.001C21.501 128 0.001 106.5 0.001 80S21.501 32 48.001 32H335.999C354.53 32 371.436 42.688 379.373 59.438C387.311 76.219 384.904 96.031 373.155 110.406L149.281 384H335.999C362.498 384 383.998 405.5 383.998 432Z", className: "stria-secondary", style: { opacity: 0.4 } })
  }
));
ZDuotone.displayName = "ZDuotone";
var Z_default = ZDuotone;
export {
  Z_default as default
};
