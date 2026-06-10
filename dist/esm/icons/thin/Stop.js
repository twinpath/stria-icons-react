import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const StopThin = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M320 64H64C28.654 64 0 92.652 0 128V384C0 419.346 28.654 448 64 448H320C355.346 448 384 419.346 384 384V128C384 92.652 355.346 64 320 64ZM368 384C368 410.467 346.467 432 320 432H64C37.533 432 16 410.467 16 384V128C16 101.533 37.533 80 64 80H320C346.467 80 368 101.533 368 128V384Z" })
  }
));
StopThin.displayName = "StopThin";
var Stop_default = StopThin;
export {
  Stop_default as default
};
