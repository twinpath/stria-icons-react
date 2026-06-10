import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const BoldSolid = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 384 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ jsx("path", { d: "M336.609 247.539C355.465 224.709 367.266 195.85 367.266 164C367.266 91.219 308.047 32 235.266 32H40C17.906 32 0 49.906 0 72S17.906 112 40 112H48V400H40C17.906 400 0 417.906 0 440S17.906 480 40 480H252C324.781 480 384 420.781 384 348C384 307.566 365.334 271.771 336.609 247.539ZM128 112H235.266C263.938 112 287.266 135.312 287.266 164S263.938 216 235.266 216H128V112ZM252 400H128V296H252C280.672 296 304 319.312 304 348S280.672 400 252 400Z" })
  }
));
BoldSolid.displayName = "BoldSolid";
var Bold_default = BoldSolid;
export {
  Bold_default as default
};
