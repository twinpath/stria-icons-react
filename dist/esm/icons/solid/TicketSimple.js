import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const TicketSimpleSolid = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ jsx("path", { d: "M528 256C528 282.5 549.5 304 576 304V400C576 426.5 554.5 448 528 448H48C21.5 448 0 426.5 0 400V304C26.5 304 48 282.5 48 256S26.5 208 0 208V112C0 85.5 21.5 64 48 64H528C554.5 64 576 85.5 576 112V208C549.5 208 528 229.5 528 256Z" })
  }
));
TicketSimpleSolid.displayName = "TicketSimpleSolid";
var TicketSimple_default = TicketSimpleSolid;
export {
  TicketSimple_default as default
};
