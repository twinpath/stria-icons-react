import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const CircleEnvelopeSolid = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM384 320C384 337.672 369.674 352 352 352H160C142.326 352 128 337.672 128 320V238.035L250.062 286.859C251.969 287.625 253.969 288 256 288S260.031 287.625 261.938 286.859L384 238.035V320ZM384 203.566L256 254.766L128 203.566V192C128 174.326 142.326 160 160 160H352C369.674 160 384 174.326 384 192V203.566Z" })
  }
));
CircleEnvelopeSolid.displayName = "CircleEnvelopeSolid";
var CircleEnvelope_default = CircleEnvelopeSolid;
export {
  CircleEnvelope_default as default
};
