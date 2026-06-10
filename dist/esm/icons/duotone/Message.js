import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const MessageDuotone = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M512 63.995V352C512 387.247 483.25 415.995 448 415.995H304L179.125 509.71C171.25 515.459 160 509.71 160 499.96V415.995H64C28.75 415.995 0 387.247 0 352V63.995C0 28.748 28.75 0 64 0H448C483.25 0 512 28.748 512 63.995Z", className: "stria-secondary", style: { opacity: 0.4 } })
  }
));
MessageDuotone.displayName = "MessageDuotone";
var Message_default = MessageDuotone;
export {
  Message_default as default
};
