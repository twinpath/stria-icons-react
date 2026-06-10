import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const WifiWeakThin = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M320 352C284.656 352 256 380.656 256 415.999C256 451.344 284.656 480 320 480S384 451.344 384 415.999C384 380.656 355.344 352 320 352ZM320 464C293.531 464 272 442.467 272 415.999C272 389.533 293.531 368 320 368S368 389.533 368 415.999C368 442.467 346.469 464 320 464Z" })
  }
));
WifiWeakThin.displayName = "WifiWeakThin";
var WifiWeak_default = WifiWeakThin;
export {
  WifiWeak_default as default
};
