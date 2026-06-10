import { jsx, jsxs } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const DreidelDuotone = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsxs(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: [
      /* @__PURE__ */ jsx("path", { d: "M443.664 81.943L334.672 190.959L406.666 262.844C419.791 275.971 419.791 297.1 406.666 310.227L315.359 401.549L79 165.141L170.309 73.693C183.432 60.691 204.557 60.691 217.68 73.693L289.551 145.703L398.543 36.687C404.668 30.437 414.916 30.437 421.166 36.687L443.664 59.191C450.039 65.566 450.039 75.693 443.664 81.943Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ jsx("path", { d: "M314.854 401.488L255.982 460.371C243.357 472.998 226.359 480 208.736 480H66.871C29.873 480 0 450.121 0 413.115V271.221C0 253.469 7 236.465 19.623 223.963L78.494 165.08L314.854 401.488Z" })
    ]
  }
));
DreidelDuotone.displayName = "DreidelDuotone";
var Dreidel_default = DreidelDuotone;
export {
  Dreidel_default as default
};
