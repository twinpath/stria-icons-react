import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const BracketRoundRegular = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M156.559 468.312C152.059 475.813 144.09 480 135.934 480C131.778 480 127.559 478.906 123.716 476.625C118.685 473.625 0 401.312 0 255.998S118.685 38.372 123.716 35.372C135.153 28.591 149.84 32.372 156.621 43.716C163.402 55.091 159.652 69.81 148.278 76.622C143.653 79.435 47.999 138.873 47.999 255.998C47.999 373.499 144.246 432.937 148.34 435.406C159.652 442.25 163.34 456.969 156.559 468.312Z" })
  }
));
BracketRoundRegular.displayName = "BracketRoundRegular";
var BracketRound_default = BracketRoundRegular;
export {
  BracketRound_default as default
};
