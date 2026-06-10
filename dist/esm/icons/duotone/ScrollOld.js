import { jsx, jsxs } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const ScrollOldDuotone = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsxs(
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
      /* @__PURE__ */ jsx("path", { d: "M480 128.002L448.002 160L480 191.998V224.002L448.002 256L480 287.998V352H416.002L384.002 384L352.002 352H288V400C288 444.184 252.184 480 208 480C163.818 480 128 444.184 128 400V256H128.002L160.002 224L128.002 192H128V96C128 60.654 99.348 32 64 32H384C437 32 480 75 480 128V128.002Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ jsx("path", { d: "M128 96V160H16C7.164 160 0 152.836 0 144V96C0 60.654 28.654 32 64 32C99.348 32 128 60.654 128 96ZM560 352H416.002L384.002 384L352.002 352H288C288 352 288 397.256 288 400C288 444.184 252.184 480 208 480H464C525.875 480 576 429.875 576 368C576 359.125 568.875 352 560 352Z" })
    ]
  }
));
ScrollOldDuotone.displayName = "ScrollOldDuotone";
var ScrollOld_default = ScrollOldDuotone;
export {
  ScrollOld_default as default
};
