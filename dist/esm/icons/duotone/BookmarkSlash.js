import { jsx, jsxs } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const BookmarkSlashDuotone = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsxs(
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
    children: [
      /* @__PURE__ */ jsx("path", { d: "M128 512L358.564 377.713L128 197.002V512ZM464 0H176C149.5 0 128 21.5 128 48V75.012L512 375.98V48C512 21.5 490.5 0 464 0Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ jsx("path", { d: "M630.81 469.102L38.814 5.109C34.407 1.672 29.189 0 24.032 0C16.907 0 9.845 3.156 5.126 9.188C-3.061 19.625 -1.249 34.719 9.189 42.891L601.185 506.883C611.685 515.086 626.747 513.211 634.872 502.805C643.06 492.367 641.247 477.273 630.81 469.102Z" })
    ]
  }
));
BookmarkSlashDuotone.displayName = "BookmarkSlashDuotone";
var BookmarkSlash_default = BookmarkSlashDuotone;
export {
  BookmarkSlash_default as default
};
