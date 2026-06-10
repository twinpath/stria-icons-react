import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const ShelvesEmptyThin = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ jsx("path", { d: "M600 0C595.578 0 592 3.594 592 8V176H48V8C48 3.594 44.422 0 40 0S32 3.594 32 8V504C32 508.406 35.578 512 40 512S48 508.406 48 504V448H592V504C592 508.406 595.578 512 600 512S608 508.406 608 504V8C608 3.594 604.422 0 600 0ZM592 432H48V192H592V432Z" })
  }
));
ShelvesEmptyThin.displayName = "ShelvesEmptyThin";
var ShelvesEmpty_default = ShelvesEmptyThin;
export {
  ShelvesEmpty_default as default
};
