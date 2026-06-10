import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const VoicemailRegular = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M496 96C416.5 96 352 160.5 352 240C352 277 366.375 310.5 389.375 336H250.625C273.625 310.5 288 277 288 240C288 160.5 223.5 96 144 96S0 160.5 0 240S64.5 384 144 384H496C575.5 384 640 319.5 640 240S575.5 96 496 96ZM48 240C48 187 91 144 144 144S240 187 240 240S197 336 144 336S48 293 48 240ZM496 336C443 336 400 293 400 240S443 144 496 144S592 187 592 240S549 336 496 336Z" })
  }
));
VoicemailRegular.displayName = "VoicemailRegular";
var Voicemail_default = VoicemailRegular;
export {
  Voicemail_default as default
};
