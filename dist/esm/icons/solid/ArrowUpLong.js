import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const ArrowUpLongSolid = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M310.509 182.625C298.002 195.132 277.752 195.118 265.259 182.625L191.884 109.25V480C191.884 497.688 177.572 512 159.884 512S127.884 497.688 127.884 480V109.25L54.509 182.625C42.009 195.125 21.759 195.125 9.259 182.625S-3.241 149.875 9.259 137.375L137.259 9.375C149.759 -3.125 170.009 -3.125 182.509 9.375L310.509 137.375C323.009 149.875 323.009 170.125 310.509 182.625Z" })
  }
));
ArrowUpLongSolid.displayName = "ArrowUpLongSolid";
var ArrowUpLong_default = ArrowUpLongSolid;
export {
  ArrowUpLong_default as default
};
