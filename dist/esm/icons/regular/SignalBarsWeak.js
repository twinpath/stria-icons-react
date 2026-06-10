import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const SignalBarsWeakRegular = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M96 384H32C14.328 384 0 398.328 0 416V480C0 497.672 14.328 512 32 512H96C113.674 512 128 497.672 128 480V416C128 398.328 113.674 384 96 384ZM80 464H48V432H80V464Z" })
  }
));
SignalBarsWeakRegular.displayName = "SignalBarsWeakRegular";
var SignalBarsWeak_default = SignalBarsWeakRegular;
export {
  SignalBarsWeak_default as default
};
