import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const DisplayThin = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M64 352H512V64H64V352ZM80 80H496V336H80V80ZM528 0H48C21.5 0 0 21.5 0 48V368C0 394.5 21.5 416 48 416H228.91L202.242 496H136C131.594 496 128 499.578 128 504S131.594 512 136 512H440C444.406 512 448 508.422 448 504S444.406 496 440 496H373.785L347.117 416H528C554.5 416 576 394.5 576 368V48C576 21.5 554.5 0 528 0ZM356.91 496H219.117L245.785 416H330.242L356.91 496ZM560 368C560 385.645 545.645 400 528 400H48C30.355 400 16 385.645 16 368V48C16 30.355 30.355 16 48 16H528C545.645 16 560 30.355 560 48V368Z" })
  }
));
DisplayThin.displayName = "DisplayThin";
var Display_default = DisplayThin;
export {
  Display_default as default
};
