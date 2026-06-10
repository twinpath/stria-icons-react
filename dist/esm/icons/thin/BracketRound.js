import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const BracketRoundThin = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 192 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ jsx("path", { d: "M140.699 457.531C144.262 460.125 145.074 465.125 142.48 468.688C140.918 470.844 138.48 472 136.011 472C134.386 472 132.729 471.5 131.323 470.5C127.26 467.563 32 397.123 32 255.995S127.26 44.428 131.323 41.491C134.854 38.959 139.886 39.709 142.48 43.303C145.074 46.866 144.262 51.866 140.699 54.46C139.792 55.147 48.002 123.336 48.002 255.995S139.792 456.844 140.699 457.531Z" })
  }
));
BracketRoundThin.displayName = "BracketRoundThin";
var BracketRound_default = BracketRoundThin;
export {
  BracketRound_default as default
};
