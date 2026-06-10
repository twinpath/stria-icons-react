import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const ThetaDuotone = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M192 16C85.961 16 0 123.451 0 256S85.961 496 192 496S384 388.549 384 256S298.039 16 192 16ZM192 96C243.029 96 286.99 147.99 299.846 216H84.154C97.01 147.99 140.973 96 192 96ZM192 416C140.973 416 97.01 364.01 84.154 296H299.846C286.99 364.01 243.029 416 192 416Z", className: "stria-secondary", style: { opacity: 0.4 } })
  }
));
ThetaDuotone.displayName = "ThetaDuotone";
var Theta_default = ThetaDuotone;
export {
  Theta_default as default
};
