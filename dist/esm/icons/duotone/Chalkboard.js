import { jsx, jsxs } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const ChalkboardDuotone = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsxs(
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
    children: [
      /* @__PURE__ */ jsx("path", { d: "M560 416H544V72C544 50 526 32 504 32H72C49.999 32 32 50 32 72V416H16C7.164 416 0 423.162 0 432V464C0 472.836 7.164 480 16 480H560C568.836 480 576 472.836 576 464V432C576 423.162 568.836 416 560 416ZM96 416V96H480V416H96Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ jsx("path", { d: "M480 96V416H416V368C416 359.162 408.836 352 400 352H240C231.164 352 224 359.162 224 368V416H96V96H480Z" })
    ]
  }
));
ChalkboardDuotone.displayName = "ChalkboardDuotone";
var Chalkboard_default = ChalkboardDuotone;
export {
  Chalkboard_default as default
};
