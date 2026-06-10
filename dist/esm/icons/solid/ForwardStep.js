import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const ForwardStepSolid = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 320 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ jsx("path", { d: "M287.971 447.968C305.643 447.968 319.969 433.642 319.969 415.968V96.032C319.969 78.359 305.641 64.032 287.967 64.032C270.295 64.032 255.969 78.359 255.969 96.03V255.999V415.966C255.969 433.64 270.297 447.968 287.971 447.968ZM52.506 440.593L244.529 280.62C252.154 274.185 255.969 265.091 255.969 255.999C255.969 246.905 252.154 237.816 244.529 231.378L52.506 71.405C31.879 54.284 0 68.655 0 96.026V415.972C0 443.343 31.879 457.716 52.506 440.593Z" })
  }
));
ForwardStepSolid.displayName = "ForwardStepSolid";
var ForwardStep_default = ForwardStepSolid;
export {
  ForwardStep_default as default
};
