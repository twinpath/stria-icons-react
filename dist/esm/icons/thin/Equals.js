import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const EqualsThin = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M8 168H440C444.422 168 448 164.406 448 160S444.422 152 440 152H8C3.578 152 0 155.594 0 160S3.578 168 8 168ZM440 344H8C3.578 344 0 347.594 0 352S3.578 360 8 360H440C444.422 360 448 356.406 448 352S444.422 344 440 344Z" })
  }
));
EqualsThin.displayName = "EqualsThin";
var Equals_default = EqualsThin;
export {
  Equals_default as default
};
