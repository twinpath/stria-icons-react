import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const CircleParkingThin = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M288 128H184C179.578 128 176 131.578 176 136V376C176 380.422 179.578 384 184 384S192 380.422 192 376V320H288C340.938 320 384 276.938 384 224S340.938 128 288 128ZM288 304H192V144H288C332.109 144 368 179.891 368 224S332.109 304 288 304ZM256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM256 480C132.486 480 32 379.514 32 256S132.486 32 256 32S480 132.486 480 256S379.514 480 256 480Z" })
  }
));
CircleParkingThin.displayName = "CircleParkingThin";
var CircleParking_default = CircleParkingThin;
export {
  CircleParking_default as default
};
