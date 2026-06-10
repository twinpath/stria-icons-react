import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const SignalWeakLight = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M32 384C23.156 384 16 391.156 16 400V496C16 504.844 23.156 512 32 512S48 504.844 48 496V400C48 391.156 40.844 384 32 384Z" })
  }
));
SignalWeakLight.displayName = "SignalWeakLight";
var SignalWeak_default = SignalWeakLight;
export {
  SignalWeak_default as default
};
