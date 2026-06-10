import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const MeterSolid = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM192 208C192 216.836 184.838 224 176 224H144C135.164 224 128 216.836 128 208V144C128 135.162 135.164 128 144 128H176C184.838 128 192 135.162 192 144V208ZM288 208C288 216.836 280.836 224 272 224H240C231.164 224 224 216.836 224 208V144C224 135.162 231.164 128 240 128H272C280.836 128 288 135.162 288 144V208ZM384 208C384 216.836 376.836 224 368 224H336C327.164 224 320 216.836 320 208V144C320 135.162 327.164 128 336 128H368C376.836 128 384 135.162 384 144V208Z" })
  }
));
MeterSolid.displayName = "MeterSolid";
var Meter_default = MeterSolid;
export {
  Meter_default as default
};
