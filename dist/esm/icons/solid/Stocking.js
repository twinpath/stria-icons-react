import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const StockingSolid = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M96.007 251.5L57.008 277.5C-1.74 316.75 -17.74 396.25 21.509 455C46.258 492 86.757 512 128.131 512C152.506 512 177.255 505 199.005 490.5L280.753 436C325.251 406.25 351.876 356.5 351.876 302.875V128H96.007V251.5ZM352.001 0H96.007C78.408 0 64.008 14.4 64.008 32V64C64.008 81.6 78.408 96 96.007 96H352.001C369.6 96 384 81.6 384 64V32C384 14.4 369.6 0 352.001 0Z" })
  }
));
StockingSolid.displayName = "StockingSolid";
var Stocking_default = StockingSolid;
export {
  Stocking_default as default
};
