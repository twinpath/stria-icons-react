import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const EThin = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 320 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ jsx("path", { d: "M320 472C320 476.406 316.422 480 312 480H8C3.578 480 0 476.406 0 472V40C0 35.594 3.578 32 8 32H312C316.422 32 320 35.594 320 40S316.422 48 312 48H16V248H248C252.422 248 256 251.594 256 256S252.422 264 248 264H16V464H312C316.422 464 320 467.594 320 472Z" })
  }
));
EThin.displayName = "EThin";
var E_default = EThin;
export {
  E_default as default
};
