import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const WifiWeakSolid = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M384 416.002C384 451.346 355.344 480.002 320 480.002S256 451.346 256 416.002S284.656 352.002 320 352.002S384 380.658 384 416.002Z" })
  }
));
WifiWeakSolid.displayName = "WifiWeakSolid";
var WifiWeak_default = WifiWeakSolid;
export {
  WifiWeak_default as default
};
