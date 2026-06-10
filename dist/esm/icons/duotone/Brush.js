import { jsx, jsxs } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const BrushDuotone = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsxs(
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
    children: [
      /* @__PURE__ */ jsx("path", { d: "M384 32V288H0V32C0 14.375 14.375 0 32 0H64L96 64L128 0H160L192 64L224 0H352C369.625 0 384 14.375 384 32Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ jsx("path", { d: "M0 288V320C0 355.375 28.625 384 64 384H128V448C128 483.375 156.625 512 192 512S256 483.375 256 448V384H320C355.375 384 384 355.375 384 320V288H0ZM192 472C178.75 472 168 461.25 168 448S178.75 424 192 424S216 434.75 216 448S205.25 472 192 472Z" })
    ]
  }
));
BrushDuotone.displayName = "BrushDuotone";
var Brush_default = BrushDuotone;
export {
  Brush_default as default
};
