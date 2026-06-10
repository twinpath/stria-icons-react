import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const CircleJSolid = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM336 290.672C336 342.141 292.938 384 240 384S144 342.141 144 290.672V280C144 266.75 154.75 256 168 256S192 266.75 192 280V290.672C192 315.672 213.531 336 240 336S288 315.672 288 290.672V152C288 138.75 298.75 128 312 128S336 138.75 336 152V290.672Z" })
  }
));
CircleJSolid.displayName = "CircleJSolid";
var CircleJ_default = CircleJSolid;
export {
  CircleJ_default as default
};
