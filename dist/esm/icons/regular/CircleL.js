import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const CircleLRegular = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M328 336H208V152C208 138.75 197.25 128 184 128S160 138.75 160 152V360C160 373.25 170.75 384 184 384H328C341.25 384 352 373.25 352 360S341.25 336 328 336ZM256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM256 448C150.131 448 64 361.869 64 256S150.131 64 256 64S448 150.131 448 256S361.869 448 256 448Z" })
  }
));
CircleLRegular.displayName = "CircleLRegular";
var CircleL_default = CircleLRegular;
export {
  CircleL_default as default
};
