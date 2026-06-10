import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const ChalkboardLight = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M560 448H416V400C416 373.531 394.469 352 368 352H272C245.531 352 224 373.531 224 400V448H16C7.156 448 0 455.156 0 464S7.156 480 16 480H560C568.844 480 576 472.844 576 464S568.844 448 560 448ZM384 448H256V400C256 391.188 263.172 384 272 384H368C376.828 384 384 391.188 384 400V448ZM45.322 383.783C55.352 385.404 64 377.721 64 368V80C64 71.162 71.164 64 80 64H496C504.836 64 512 71.162 512 80V368C512 376.836 519.164 384 528 384S544 376.836 544 368V80C544 53.49 522.51 32 496 32H80C53.49 32 32 53.49 32 80V367.166C32 375.135 37.455 382.512 45.322 383.783Z" })
  }
));
ChalkboardLight.displayName = "ChalkboardLight";
var Chalkboard_default = ChalkboardLight;
export {
  Chalkboard_default as default
};
