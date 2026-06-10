import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const Tally1Duotone = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M64 64.001V448.001C64 465.674 49.673 480.001 32 480.001H32C14.327 480.001 0 465.674 0 448.001V64.001C0 46.327 14.327 32.001 32 32.001H32C49.673 32.001 64 46.327 64 64.001Z", className: "stria-secondary", style: { opacity: 0.4 } })
  }
));
Tally1Duotone.displayName = "Tally1Duotone";
var Tally1_default = Tally1Duotone;
export {
  Tally1_default as default
};
