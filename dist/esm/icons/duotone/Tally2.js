import { jsx, jsxs } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const Tally2Duotone = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsxs(
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
    children: [
      /* @__PURE__ */ jsx("path", { d: "M32 32.001H32C14.327 32.001 0 46.327 0 64.001V448.001C0 465.674 14.327 480.001 32 480.001H32C49.673 480.001 64 465.674 64 448.001V64.001C64 46.327 49.673 32.001 32 32.001Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ jsx("path", { d: "M160 32.001H160C142.327 32.001 128 46.327 128 64.001V448.001C128 465.674 142.327 480.001 160 480.001H160C177.673 480.001 192 465.674 192 448.001V64.001C192 46.327 177.673 32.001 160 32.001Z" })
    ]
  }
));
Tally2Duotone.displayName = "Tally2Duotone";
var Tally2_default = Tally2Duotone;
export {
  Tally2_default as default
};
