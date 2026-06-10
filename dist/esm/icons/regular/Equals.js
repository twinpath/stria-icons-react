import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const EqualsRegular = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ jsx("path", { d: "M408 328H40C26.75 328 16 338.75 16 352S26.75 376 40 376H408C421.25 376 432 365.25 432 352S421.25 328 408 328ZM40 184H408C421.25 184 432 173.25 432 160S421.25 136 408 136H40C26.75 136 16 146.75 16 160S26.75 184 40 184Z" })
  }
));
EqualsRegular.displayName = "EqualsRegular";
var Equals_default = EqualsRegular;
export {
  Equals_default as default
};
