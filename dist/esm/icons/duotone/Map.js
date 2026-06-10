import { jsx, jsxs } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const MapDuotone = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsxs(
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
      /* @__PURE__ */ jsx("path", { d: "M192 416L384 480V96L192 32V416Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ jsx("path", { d: "M0 114.449V463.984C0 475.305 11.434 483.043 21.943 478.84L192 416V32L10.059 99.594C3.984 102.023 0 107.906 0 114.449ZM554.059 33.16L384 96V480L565.943 412.406C572.018 409.977 576 404.094 576 397.551V48.016C576 36.695 564.568 28.957 554.059 33.16Z" })
    ]
  }
));
MapDuotone.displayName = "MapDuotone";
var Map_default = MapDuotone;
export {
  Map_default as default
};
