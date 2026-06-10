import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const Tally1Regular = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M56 56V456C56 469.25 45.25 480 32 480S8 469.25 8 456V56C8 42.75 18.75 32 32 32S56 42.75 56 56Z" })
  }
));
Tally1Regular.displayName = "Tally1Regular";
var Tally1_default = Tally1Regular;
export {
  Tally1_default as default
};
