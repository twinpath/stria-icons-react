import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const TriangleSolid = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M506.274 417C522.606 445 502.052 480 469.275 480H42.739C9.852 480 -10.592 444.891 5.741 417L218.954 53C235.397 25 276.617 25 292.95 53L506.274 417Z" })
  }
));
TriangleSolid.displayName = "TriangleSolid";
var Triangle_default = TriangleSolid;
export {
  Triangle_default as default
};
