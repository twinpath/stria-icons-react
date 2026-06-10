import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const Tally3Regular = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M32 32C18.75 32 8 42.75 8 56V456C8 469.25 18.75 480 32 480S56 469.25 56 456V56C56 42.75 45.25 32 32 32ZM160 32C146.75 32 136 42.75 136 56V456C136 469.25 146.75 480 160 480S184 469.25 184 456V56C184 42.75 173.25 32 160 32ZM288 32C274.75 32 264 42.75 264 56V456C264 469.25 274.75 480 288 480S312 469.25 312 456V56C312 42.75 301.25 32 288 32Z" })
  }
));
Tally3Regular.displayName = "Tally3Regular";
var Tally3_default = Tally3Regular;
export {
  Tally3_default as default
};
