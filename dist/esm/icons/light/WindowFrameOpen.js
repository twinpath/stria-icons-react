import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const WindowFrameOpenLight = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M496 480H480V320H448V480H64V320H32V480H16C7.164 480 0 487.162 0 496C0 504.836 7.164 512 16 512H496C504.836 512 512 504.836 512 496C512 487.162 504.836 480 496 480ZM480 64C480 28.652 451.346 0 416 0H96C60.654 0 32 28.652 32 64V288H480V64ZM240 256H64V64C64 46.326 78.326 32 96 32H240V256ZM448 256H272V32H416C433.674 32 448 46.326 448 64V256Z" })
  }
));
WindowFrameOpenLight.displayName = "WindowFrameOpenLight";
var WindowFrameOpen_default = WindowFrameOpenLight;
export {
  WindowFrameOpen_default as default
};
