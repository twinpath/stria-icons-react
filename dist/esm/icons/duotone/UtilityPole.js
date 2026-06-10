import { jsx, jsxs } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const UtilityPoleDuotone = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsxs(
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
      /* @__PURE__ */ jsx("path", { d: "M128 56C128 42.744 117.254 32 104 32S80 42.744 80 56V64H128V56ZM24 32C10.746 32 0 42.744 0 56V64H48V56C48 42.744 37.254 32 24 32ZM83.156 128L224 221.896V183.438L140.844 128H83.156ZM488 32C474.746 32 464 42.744 464 56V64H512V56C512 42.744 501.254 32 488 32ZM408 32C394.746 32 384 42.744 384 56V64H432V56C432 42.744 421.254 32 408 32ZM288 183.438V221.896L428.844 128H371.156L288 183.438Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ jsx("path", { d: "M512 64V96C512 113.672 497.674 128 480 128H288V512H224V128H32C14.326 128 0 113.672 0 96V64H224V16C224 7.162 231.164 0 240 0H272C280.836 0 288 7.162 288 16V64H512Z" })
    ]
  }
));
UtilityPoleDuotone.displayName = "UtilityPoleDuotone";
var UtilityPole_default = UtilityPoleDuotone;
export {
  UtilityPole_default as default
};
