import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const SortUpSolid = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M27.658 224H292.342C316.945 224 329.229 194.225 311.881 176.877L179.553 40.107C174.146 34.701 167.08 32 160.027 32C152.973 32 145.934 34.701 140.582 40.107L8.119 176.877C-9.229 194.225 3.055 224 27.658 224Z" })
  }
));
SortUpSolid.displayName = "SortUpSolid";
var SortUp_default = SortUpSolid;
export {
  SortUp_default as default
};
