import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const CoffinRegular = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M406.537 115.25L298.765 9.375C292.639 3.375 284.262 0 275.635 0H172.365C163.738 0 155.361 3.375 149.235 9.375L41.463 115.25C33.461 123.125 30.211 134.625 32.961 145.625L120.104 487.75C123.73 502 136.732 512 151.735 512H296.39C311.268 512 324.27 502 327.896 487.75L415.039 145.625C417.789 134.625 414.539 123.125 406.537 115.25ZM284.512 464H163.488L81.846 142.875L178.491 48H269.509L366.154 142.875L284.512 464Z" })
  }
));
CoffinRegular.displayName = "CoffinRegular";
var Coffin_default = CoffinRegular;
export {
  Coffin_default as default
};
