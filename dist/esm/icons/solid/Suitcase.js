import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const SuitcaseSolid = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M0 144V432C0 457.594 22.406 480 48 480H96V96H48C22.406 96 0 118.406 0 144ZM336 0H176C150.406 0 128 22.406 128 48V480H384V48C384 22.406 361.594 0 336 0ZM336 96H176V48H336V96ZM464 96H416V480H464C489.594 480 512 457.594 512 432V144C512 118.406 489.594 96 464 96Z" })
  }
));
SuitcaseSolid.displayName = "SuitcaseSolid";
var Suitcase_default = SuitcaseSolid;
export {
  Suitcase_default as default
};
