import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const PauseRegular = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M56 64C42.75 64 32 74.75 32 88V424C32 437.25 42.75 448 56 448S80 437.25 80 424V88C80 74.75 69.25 64 56 64ZM264 64C250.75 64 240 74.75 240 88V424C240 437.25 250.75 448 264 448S288 437.25 288 424V88C288 74.75 277.25 64 264 64Z" })
  }
));
PauseRegular.displayName = "PauseRegular";
var Pause_default = PauseRegular;
export {
  Pause_default as default
};
