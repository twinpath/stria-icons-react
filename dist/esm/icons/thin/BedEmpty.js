import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const BedEmptyThin = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M528 192H16V40C16 35.594 12.422 32 8 32S0 35.594 0 40V472C0 476.406 3.578 480 8 480S16 476.406 16 472V416H624V472C624 476.406 627.578 480 632 480S640 476.406 640 472V304C640 242.125 589.875 192 528 192ZM624 400H16V336H624V400ZM624 320H16V208H528C580.934 208 624 251.064 624 304V320Z" })
  }
));
BedEmptyThin.displayName = "BedEmptyThin";
var BedEmpty_default = BedEmptyThin;
export {
  BedEmpty_default as default
};
