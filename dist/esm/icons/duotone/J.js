import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const JDuotone = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M160 480C71.781 480 0 408.219 0 320V304C0 277.5 21.5 256 48 256S96 277.5 96 304V320C96 355.281 124.719 384 160 384S224 355.281 224 320V80C224 53.5 245.5 32 272 32S320 53.5 320 80V320C320 408.219 248.219 480 160 480Z", className: "stria-secondary", style: { opacity: 0.4 } })
  }
));
JDuotone.displayName = "JDuotone";
var J_default = JDuotone;
export {
  J_default as default
};
