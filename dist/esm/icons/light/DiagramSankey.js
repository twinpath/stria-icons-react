import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const DiagramSankeyLight = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M48 224H288C294 224 299 221 302 216L388 72C391 67 397 64 402 64H592C601 64 608 57 608 48S601 32 592 32H402C385 32 370 41 361 55L279 192H48C39 192 32 199 32 208S39 224 48 224ZM608 304C608 295 601 288 592 288H48C39 288 32 295 32 304S39 320 48 320H199L281 457C290 471 305 480 322 480H592C601 480 608 473 608 464S601 448 592 448H322C317 448 311 445 308 440L236 320H592C601 320 608 313 608 304Z" })
  }
));
DiagramSankeyLight.displayName = "DiagramSankeyLight";
var DiagramSankey_default = DiagramSankeyLight;
export {
  DiagramSankey_default as default
};
