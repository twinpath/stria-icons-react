import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const CircleLSolid = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM328 384H184C170.75 384 160 373.25 160 360V152C160 138.75 170.75 128 184 128S208 138.75 208 152V336H328C341.25 336 352 346.75 352 360S341.25 384 328 384Z" })
  }
));
CircleLSolid.displayName = "CircleLSolid";
var CircleL_default = CircleLSolid;
export {
  CircleL_default as default
};
