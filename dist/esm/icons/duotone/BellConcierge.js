import { jsx, jsxs } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const BellConciergeDuotone = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsxs(
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
    children: [
      /* @__PURE__ */ jsx("path", { d: "M216 112H232V145.324C239.891 144.484 247.887 144 256 144S272.109 144.484 280 145.324V112H296C309.255 112 320 101.255 320 88V88C320 74.745 309.255 64 296 64H216C202.745 64 192 74.745 192 88V88C192 101.255 202.745 112 216 112ZM488 400H24C10.745 400 0 410.745 0 424V424C0 437.255 10.745 448 24 448H488C501.255 448 512 437.255 512 424V424C512 410.745 501.255 400 488 400Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ jsx("path", { d: "M480 368H32C32 244.289 132.289 144 256 144S480 244.289 480 368Z" })
    ]
  }
));
BellConciergeDuotone.displayName = "BellConciergeDuotone";
var BellConcierge_default = BellConciergeDuotone;
export {
  BellConcierge_default as default
};
