import { jsx, jsxs } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const BarsDuotone = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsxs(
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
      /* @__PURE__ */ jsx("path", { d: "M448 256V256C448 273.673 433.673 288 416 288H32C14.327 288 0 273.673 0 256V256C0 238.327 14.327 224 32 224H416C433.673 224 448 238.327 448 256Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ jsx("path", { d: "M416 384H32C14.327 384 0 398.327 0 416V416C0 433.673 14.327 448 32 448H416C433.673 448 448 433.673 448 416V416C448 398.327 433.673 384 416 384ZM416 64H32C14.327 64 0 78.327 0 96V96C0 113.673 14.327 128 32 128H416C433.673 128 448 113.673 448 96V96C448 78.327 433.673 64 416 64Z" })
    ]
  }
));
BarsDuotone.displayName = "BarsDuotone";
var Bars_default = BarsDuotone;
export {
  Bars_default as default
};
