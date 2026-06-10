import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const MessageMiddleSolid = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M512 63.994V351.971C512 387.219 483.25 415.967 448 415.967H336.025L268.801 505.6C262.4 514.133 249.6 514.133 243.199 505.6L175.975 415.967H64C28.75 415.967 0 387.219 0 351.971V63.994C0 28.748 28.75 0 64 0H448C483.25 0 512 28.748 512 63.994Z" })
  }
));
MessageMiddleSolid.displayName = "MessageMiddleSolid";
var MessageMiddle_default = MessageMiddleSolid;
export {
  MessageMiddle_default as default
};
