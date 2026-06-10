import { jsx, jsxs } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const ChessPawnDuotone = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsxs(
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
    children: [
      /* @__PURE__ */ jsx("path", { d: "M320 496C320 504.836 312.836 512 304 512H16C7.164 512 0 504.836 0 496C0 475.131 13.4 457.549 32 450.938V432C32 423.162 39.164 416 48 416H272C280.836 416 288 423.162 288 432V450.938C306.6 457.549 320 475.131 320 496Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ jsx("path", { d: "M105.125 224H80C71.125 224 64 231.125 64 240V272C64 280.875 71.125 288 80 288H96V293.5C96 337.5 91.875 380.125 72 416H248C228.125 380.125 224 337.5 224 293.5V288H240C248.875 288 256 280.875 256 272V240C256 231.125 248.875 224 240 224H214.875C244.25 205.625 264 173.25 264 136C264 78.5 217.5 32 160 32S56 78.5 56 136C56 173.25 75.75 205.625 105.125 224Z" })
    ]
  }
));
ChessPawnDuotone.displayName = "ChessPawnDuotone";
var ChessPawn_default = ChessPawnDuotone;
export {
  ChessPawn_default as default
};
