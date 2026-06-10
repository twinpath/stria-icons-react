import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const GrateSolid = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ jsx("path", { d: "M384 32H64C28.654 32 0 60.652 0 96V416C0 451.346 28.654 480 64 480H384C419.346 480 448 451.346 448 416V96C448 60.652 419.346 32 384 32ZM96 416H64V288H96V416ZM96 224H64V96H96V224ZM192 416H160V288H192V416ZM192 224H160V96H192V224ZM288 416H256V288H288V416ZM288 224H256V96H288V224ZM384 416H352V288H384V416ZM384 224H352V96H384V224Z" })
  }
));
GrateSolid.displayName = "GrateSolid";
var Grate_default = GrateSolid;
export {
  Grate_default as default
};
