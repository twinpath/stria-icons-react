import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const Circle4Solid = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM328 320H320V360C320 373.25 309.25 384 296 384S272 373.25 272 360V320H170C161.922 320 154.391 315.938 149.953 309.188S144.766 293.938 147.953 286.5L209.953 142.5C215.188 130.344 229.266 124.656 241.484 129.969C253.672 135.187 259.281 149.312 254.047 161.5L206.469 272H272V221.344C272 208.094 282.75 197.344 296 197.344S320 208.094 320 221.344V272H328C341.25 272 352 282.75 352 296S341.25 320 328 320Z" })
  }
));
Circle4Solid.displayName = "Circle4Solid";
var Circle4_default = Circle4Solid;
export {
  Circle4_default as default
};
