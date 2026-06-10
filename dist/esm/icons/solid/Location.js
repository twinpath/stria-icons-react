import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const LocationSolid = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M0 192.001C0 85.969 85.969 0 192 0S384 85.969 384 192.001C384 269.408 357.031 291.033 211.719 501.676C202.187 515.441 181.812 515.441 172.281 501.676C26.969 291.033 0 269.408 0 192.001Z" })
  }
));
LocationSolid.displayName = "LocationSolid";
var Location_default = LocationSolid;
export {
  Location_default as default
};
