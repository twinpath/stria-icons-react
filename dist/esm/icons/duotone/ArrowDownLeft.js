import { jsx, jsxs } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const ArrowDownLeftDuotone = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsxs(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 384 512",
    fill: color,
    className,
    ...props,
    children: [
      /* @__PURE__ */ jsx("path", { d: "M96 340.281V283.719L299.719 80C315.344 64.375 340.656 64.375 356.281 80S371.906 120.938 356.281 136.563L152.562 340.281H96Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ jsx("path", { d: "M264 352C286.094 352 304 369.906 304 392S286.094 432 264 432H56C33.906 432 16 414.094 16 392V184C16 161.906 33.906 144 56 144S96 161.906 96 184V352H264Z" })
    ]
  }
));
ArrowDownLeftDuotone.displayName = "ArrowDownLeftDuotone";
var ArrowDownLeft_default = ArrowDownLeftDuotone;
export {
  ArrowDownLeft_default as default
};
