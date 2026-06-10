import { jsx, jsxs } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const TengeSignDuotone = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsxs(
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
      /* @__PURE__ */ jsx("path", { d: "M384 200C384 222.094 366.094 240 344 240H232V440C232 462.094 214.094 480 192 480S152 462.094 152 440V240H40C17.906 240 0 222.094 0 200S17.906 160 40 160H344C366.094 160 384 177.906 384 200Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ jsx("path", { d: "M384 72C384 94.094 366.094 112 344 112H40C17.906 112 0 94.094 0 72S17.906 32 40 32H344C366.094 32 384 49.906 384 72Z" })
    ]
  }
));
TengeSignDuotone.displayName = "TengeSignDuotone";
var TengeSign_default = TengeSignDuotone;
export {
  TengeSign_default as default
};
