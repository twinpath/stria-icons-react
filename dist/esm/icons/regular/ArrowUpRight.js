import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const ArrowUpRightRegular = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M352 120V360C352 373.25 341.25 384 328 384S304 373.25 304 360V177.938L72.969 408.969C68.281 413.656 62.141 416 56 416S43.719 413.656 39.031 408.969C29.656 399.594 29.656 384.406 39.031 375.031L270.062 144H88C74.75 144 64 133.25 64 120S74.75 96 88 96H328C341.25 96 352 106.75 352 120Z" })
  }
));
ArrowUpRightRegular.displayName = "ArrowUpRightRegular";
var ArrowUpRight_default = ArrowUpRightRegular;
export {
  ArrowUpRight_default as default
};
