import { jsx, jsxs } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const ToggleOffDuotone = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsxs(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: [
      /* @__PURE__ */ jsx("path", { d: "M384 64H192C85.999 64 0 150 0 256C0 362 85.999 448 192 448H384C490 448 576 362 576 256C576 150 490 64 384 64ZM384 384H192C121.42 384 64 326.58 64 256S121.42 128 192 128H384C454.58 128 512 185.42 512 256S454.58 384 384 384Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ jsx("path", { d: "M288 256C288 309.062 245.062 352 192 352S96 309.062 96 256S138.938 160 192 160S288 202.938 288 256Z" })
    ]
  }
));
ToggleOffDuotone.displayName = "ToggleOffDuotone";
var ToggleOff_default = ToggleOffDuotone;
export {
  ToggleOff_default as default
};
