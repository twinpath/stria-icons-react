import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const Tally1Light = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M32 32C23.156 32 16 39.156 16 48V464C16 472.844 23.156 480 32 480S48 472.844 48 464V48C48 39.156 40.844 32 32 32Z" })
  }
));
Tally1Light.displayName = "Tally1Light";
var Tally1_default = Tally1Light;
export {
  Tally1_default as default
};
