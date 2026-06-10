import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const BatteryThreeQuartersRegular = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M96 320H352V192H96V320ZM544 192V160C544 124.654 515.346 96 480 96H64C28.654 96 0 124.654 0 160V352C0 387.346 28.654 416 64 416H480C515.346 416 544 387.346 544 352V320C561.674 320 576 305.674 576 288V224C576 206.326 561.674 192 544 192ZM496 352C496 360.822 488.822 368 480 368H64C55.178 368 48 360.822 48 352V160C48 151.178 55.178 144 64 144H480C488.822 144 496 151.178 496 160V352Z" })
  }
));
BatteryThreeQuartersRegular.displayName = "BatteryThreeQuartersRegular";
var BatteryThreeQuarters_default = BatteryThreeQuartersRegular;
export {
  BatteryThreeQuarters_default as default
};
