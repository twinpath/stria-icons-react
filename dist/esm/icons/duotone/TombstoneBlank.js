import { jsx, jsxs } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const TombstoneBlankDuotone = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsxs(
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
      /* @__PURE__ */ jsx("path", { d: "M416 192.001C416 86.001 330 0.001 224 0.001C118 0.001 32 86.001 32 192.001V448H416V192.001Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ jsx("path", { d: "M432 448.001H16C7.125 448.001 0 455.126 0 464.001V496.001C0 504.876 7.125 512.001 16 512.001H432C440.875 512.001 448 504.876 448 496.001V464.001C448 455.126 440.875 448.001 432 448.001Z" })
    ]
  }
));
TombstoneBlankDuotone.displayName = "TombstoneBlankDuotone";
var TombstoneBlank_default = TombstoneBlankDuotone;
export {
  TombstoneBlank_default as default
};
