import { jsx, jsxs } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const ClapperboardDuotone = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsxs(
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
      /* @__PURE__ */ jsx("path", { d: "M512 160V416C512 451.346 483.346 480 448 480H64C28.654 480 0 451.346 0 416V160H512Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ jsx("path", { d: "M497.748 56.189L393.938 160H512V96C512 80.867 506.529 67.146 497.748 56.189ZM64 32C28.654 32 0 60.654 0 96V160H6.062L134.062 32H64ZM201.938 32L73.938 160H166.062L294.062 32H201.938ZM448 32H361.938L233.938 160H326.062L453.508 32.555C451.662 32.395 449.887 32 448 32Z" })
    ]
  }
));
ClapperboardDuotone.displayName = "ClapperboardDuotone";
var Clapperboard_default = ClapperboardDuotone;
export {
  Clapperboard_default as default
};
