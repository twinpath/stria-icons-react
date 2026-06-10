import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const FaceGrinSolid = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M256 16C123.461 16 16 123.419 16 256S123.461 496 256 496S496 388.581 496 256S388.539 16 256 16ZM336.043 176C353.723 176 368.012 190.25 368.012 208S353.723 240 336.043 240C318.242 240 303.953 225.75 303.953 208S318.242 176 336.043 176ZM175.957 176C193.758 176 208.047 190.25 208.047 208S193.758 240 175.957 240C158.277 240 143.988 225.75 143.988 208S158.277 176 175.957 176ZM256 432C195.453 432 121.465 393.75 112.141 338.75C110.203 326.875 121.465 317.125 132.848 320.75C163.121 330.5 208.047 336 256 336S348.879 330.5 379.152 320.75C390.414 317.125 401.676 326.875 399.859 338.75C390.535 393.75 316.547 432 256 432Z" })
  }
));
FaceGrinSolid.displayName = "FaceGrinSolid";
var FaceGrin_default = FaceGrinSolid;
export {
  FaceGrin_default as default
};
