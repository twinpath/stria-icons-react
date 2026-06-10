import { jsx, jsxs } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const BoxBallotDuotone = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsxs(
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
      /* @__PURE__ */ jsx("path", { d: "M576 192V319.125L575.125 320H0.875L0 319.125V192C0 174.327 14.327 160 32 160H128V224H80C71.163 224 64 231.163 64 240V240C64 248.837 71.163 256 80 256H496C504.837 256 512 248.837 512 240V240C512 231.163 504.837 224 496 224H448V160H544C561.673 160 576 174.327 576 192Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ jsx("path", { d: "M0 320V464C0 490.51 21.49 512 48 512H528C554.51 512 576 490.51 576 464V320H0ZM448 24C448 10.744 437.254 0 424 0H152C138.746 0 128 10.744 128 24V256H448V24Z" })
    ]
  }
));
BoxBallotDuotone.displayName = "BoxBallotDuotone";
var BoxBallot_default = BoxBallotDuotone;
export {
  BoxBallot_default as default
};
