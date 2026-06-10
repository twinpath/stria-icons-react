import { jsx, jsxs } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const WindowDuotone = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsxs(
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
    children: [
      /* @__PURE__ */ jsx("path", { d: "M0 224V416C0 451.346 28.654 480 64 480H448C483.346 480 512 451.346 512 416V224H0ZM192 160C209.75 160 224 145.75 224 128S209.75 96 192 96S160 110.25 160 128S174.25 160 192 160ZM288 160C305.75 160 320 145.75 320 128S305.75 96 288 96S256 110.25 256 128S270.25 160 288 160Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ jsx("path", { d: "M448 32H64C28.654 32 0 60.654 0 96V224H512V96C512 60.654 483.346 32 448 32ZM96 160C78.25 160 64 145.75 64 128S78.25 96 96 96S128 110.25 128 128S113.75 160 96 160ZM192 160C174.25 160 160 145.75 160 128S174.25 96 192 96S224 110.25 224 128S209.75 160 192 160ZM288 160C270.25 160 256 145.75 256 128S270.25 96 288 96S320 110.25 320 128S305.75 160 288 160Z" })
    ]
  }
));
WindowDuotone.displayName = "WindowDuotone";
var Window_default = WindowDuotone;
export {
  Window_default as default
};
