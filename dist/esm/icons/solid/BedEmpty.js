import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const BedEmptySolid = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M640 320V464C640 472.836 632.836 480 624 480H592C583.164 480 576 472.836 576 464V416H64V464C64 472.836 56.836 480 48 480H16C7.164 480 0 472.836 0 464V48C0 39.162 7.164 32 16 32H48C56.836 32 64 39.162 64 48V224H544C597.02 224 640 266.98 640 320Z" })
  }
));
BedEmptySolid.displayName = "BedEmptySolid";
var BedEmpty_default = BedEmptySolid;
export {
  BedEmpty_default as default
};
