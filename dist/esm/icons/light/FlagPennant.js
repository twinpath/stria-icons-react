import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const FlagPennantLight = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 512 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ jsx("path", { d: "M496.514 185.789L31.703 14.531C30.926 6.418 24.314 0 16 0C7.164 0 0 7.164 0 16V496C0 504.836 7.164 512 16 512S32 504.836 32 496V401.352L496.514 230.211C517.162 222.602 517.162 193.395 496.514 185.789ZM32 367.242V48.75L464.232 208L32 367.242Z" })
  }
));
FlagPennantLight.displayName = "FlagPennantLight";
var FlagPennant_default = FlagPennantLight;
export {
  FlagPennant_default as default
};
