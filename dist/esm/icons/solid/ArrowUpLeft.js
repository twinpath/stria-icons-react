import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const ArrowUpLeftSolid = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 384 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ jsx("path", { d: "M356.281 420.281C348.469 428.094 338.234 432 328 432S307.531 428.094 299.719 420.281L96 216.562V328C96 350.094 78.094 368 56 368S16 350.094 16 328V120C16 97.906 33.906 80 56 80H264C286.094 80 304 97.906 304 120S286.094 160 264 160H152.562L356.281 363.719C371.906 379.344 371.906 404.656 356.281 420.281Z" })
  }
));
ArrowUpLeftSolid.displayName = "ArrowUpLeftSolid";
var ArrowUpLeft_default = ArrowUpLeftSolid;
export {
  ArrowUpLeft_default as default
};
