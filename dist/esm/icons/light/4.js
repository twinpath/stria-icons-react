import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const Icon4Light = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M384 336.007C384 344.85 376.844 352.006 368 352.006H320.001V464.001C320.001 472.844 312.845 480 304.001 480S288.001 472.844 288.001 464.001V352.006H16.004C10.458 352.006 5.317 349.131 2.395 344.413C-0.527 339.694 -0.792 333.819 1.692 328.851L145.69 40.864C149.659 32.99 159.237 29.709 167.159 33.708C175.065 37.677 178.268 47.27 174.315 55.176L41.895 320.008H288.001V144.016C288.001 135.172 295.157 128.016 304.001 128.016S320.001 135.172 320.001 144.016V320.008H368C376.844 320.008 384 327.163 384 336.007Z" })
  }
));
Icon4Light.displayName = "Icon4Light";
var __default = Icon4Light;
export {
  __default as default
};
