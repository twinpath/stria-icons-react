import { jsx, jsxs } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const MugSaucerDuotone = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsxs(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: [
      /* @__PURE__ */ jsx("path", { d: "M560 416H16C7.164 416 0 423.164 0 432C0 458.508 21.49 480 48 480H528C554.51 480 576 458.508 576 432C576 423.164 568.838 416 560 416Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ jsx("path", { d: "M512 32H120C106.75 32 96 42.75 96 56V288C96 341 139 384 192 384H384C437 384 480 341 480 288H512C582.625 288 640 230.625 640 160S582.625 32 512 32ZM512 224H480V96H512C547.25 96 576 124.75 576 160S547.25 224 512 224Z" })
    ]
  }
));
MugSaucerDuotone.displayName = "MugSaucerDuotone";
var MugSaucer_default = MugSaucerDuotone;
export {
  MugSaucer_default as default
};
