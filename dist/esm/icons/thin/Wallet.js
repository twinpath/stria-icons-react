import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const WalletThin = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M440 112H72C67.594 112 64 115.594 64 120S67.594 128 72 128H440C470.875 128 496 153.125 496 184V408C496 438.875 470.875 464 440 464H72C41.125 464 16 438.875 16 408V104C16 73.125 41.125 48 72 48H472C476.406 48 480 44.406 480 40S476.406 32 472 32H72C32.312 32 0 64.312 0 104V408C0 447.688 32.312 480 72 480H440C479.688 480 512 447.688 512 408V184C512 144.312 479.688 112 440 112ZM440 296C440 273.938 422.062 256 400 256S360 273.938 360 296S377.938 336 400 336S440 318.062 440 296ZM376 296C376 282.781 386.781 272 400 272S424 282.781 424 296S413.219 320 400 320S376 309.219 376 296Z" })
  }
));
WalletThin.displayName = "WalletThin";
var Wallet_default = WalletThin;
export {
  Wallet_default as default
};
