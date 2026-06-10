import { jsx, jsxs } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const EllipsisDuotone = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsxs(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 512 512",
    fill: color,
    className,
    ...props,
    children: [
      /* @__PURE__ */ jsx("path", { d: "M256 192C220.611 192 192 220.625 192 256S220.611 320 256 320S320 291.375 320 256S291.389 192 256 192Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ jsx("path", { d: "M64 192C28.611 192 0 220.625 0 256S28.611 320 64 320S128 291.375 128 256S99.389 192 64 192ZM448 192C412.611 192 384 220.625 384 256S412.611 320 448 320S512 291.375 512 256S483.389 192 448 192Z" })
    ]
  }
));
EllipsisDuotone.displayName = "EllipsisDuotone";
var Ellipsis_default = EllipsisDuotone;
export {
  Ellipsis_default as default
};
