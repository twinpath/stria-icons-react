import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const RubleSignLight = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M240 320C319.406 320 384 255.406 384 176S319.406 32 240 32H111.781C85.438 32.109 64 53.594 64 79.859V288H16C7.156 288 0 295.156 0 304S7.156 320 16 320H64V384H16C7.156 384 0 391.156 0 400S7.156 416 16 416H64V464C64 472.844 71.156 480 80 480S96 472.844 96 464V416H304C312.844 416 320 408.844 320 400S312.844 384 304 384H96V320H240ZM96 79.859C96 71.156 103.141 64.031 111.859 64H240C301.75 64 352 114.25 352 176S301.75 288 240 288H96V79.859Z" })
  }
));
RubleSignLight.displayName = "RubleSignLight";
var RubleSign_default = RubleSignLight;
export {
  RubleSign_default as default
};
