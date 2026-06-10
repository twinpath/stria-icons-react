import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const WhiskeyGlassSolid = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M479.955 32H32.045C12.549 32 -2.324 49.254 0.301 68.508L56.289 425.109C60.789 456.617 87.783 480 119.778 480H392.723C424.467 480 451.586 456.617 456.086 425.109L511.699 68.508C514.324 49.254 499.451 32 479.955 32ZM416 288H96L64 96H448L416 288Z" })
  }
));
WhiskeyGlassSolid.displayName = "WhiskeyGlassSolid";
var WhiskeyGlass_default = WhiskeyGlassSolid;
export {
  WhiskeyGlass_default as default
};
