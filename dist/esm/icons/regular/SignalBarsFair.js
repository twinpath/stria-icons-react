import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const SignalBarsFairRegular = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M96 384H32C14.328 384 0 398.328 0 416V480C0 497.672 14.328 512 32 512H96C113.674 512 128 497.672 128 480V416C128 398.328 113.674 384 96 384ZM80 464H48V432H80V464ZM248 256H184C166.328 256 152 270.328 152 288V480C152 497.672 166.328 512 184 512H248C265.674 512 280 497.672 280 480V288C280 270.328 265.674 256 248 256ZM232 464H200V304H232V464Z" })
  }
));
SignalBarsFairRegular.displayName = "SignalBarsFairRegular";
var SignalBarsFair_default = SignalBarsFairRegular;
export {
  SignalBarsFair_default as default
};
