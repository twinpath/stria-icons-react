import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const BarsRegular = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M424 392H24C10.8 392 0 402.8 0 416V416C0 429.2 10.8 440 24 440H424C437.2 440 448 429.2 448 416V416C448 402.8 437.2 392 424 392ZM424 72H24C10.8 72 0 82.8 0 96V96C0 109.2 10.8 120 24 120H424C437.2 120 448 109.2 448 96V96C448 82.8 437.2 72 424 72ZM424 232H24C10.8 232 0 242.8 0 256V256C0 269.2 10.8 280 24 280H424C437.2 280 448 269.2 448 256V256C448 242.8 437.2 232 424 232Z" })
  }
));
BarsRegular.displayName = "BarsRegular";
var Bars_default = BarsRegular;
export {
  Bars_default as default
};
