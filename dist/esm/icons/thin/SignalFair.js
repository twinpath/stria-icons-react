import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const SignalFairThin = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M32 384C27.594 384 24 387.594 24 392V504C24 508.406 27.594 512 32 512S40 508.406 40 504V392C40 387.594 36.406 384 32 384ZM160 288C155.594 288 152 291.594 152 296V504C152 508.406 155.594 512 160 512S168 508.406 168 504V296C168 291.594 164.406 288 160 288Z" })
  }
));
SignalFairThin.displayName = "SignalFairThin";
var SignalFair_default = SignalFairThin;
export {
  SignalFair_default as default
};
