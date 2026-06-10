import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const HardDriveSolid = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M464 288H48C21.5 288 0 309.5 0 336V432C0 458.5 21.5 480 48 480H464C490.5 480 512 458.5 512 432V336C512 309.5 490.5 288 464 288ZM320 416C302.375 416 288 401.625 288 384S302.375 352 320 352S352 366.375 352 384S337.625 416 320 416ZM416 416C398.375 416 384 401.625 384 384S398.375 352 416 352S448 366.375 448 384S433.625 416 416 416ZM464 32H48C21.5 32 0 53.5 0 80V272.406C13.414 262.254 29.922 256 48 256H464C482.078 256 498.586 262.254 512 272.406V80C512 53.5 490.5 32 464 32Z" })
  }
));
HardDriveSolid.displayName = "HardDriveSolid";
var HardDrive_default = HardDriveSolid;
export {
  HardDrive_default as default
};
