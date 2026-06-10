import { jsx, jsxs } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const SquareODuotone = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsxs(
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
      /* @__PURE__ */ jsx("path", { d: "M224 176C179.891 176 144 211.891 144 256S179.891 336 224 336S304 300.109 304 256S268.109 176 224 176ZM384 32H64C28.654 32 0 60.654 0 96V416C0 451.346 28.654 480 64 480H384C419.348 480 448 451.346 448 416V96C448 60.654 419.348 32 384 32ZM224 384C153.422 384 96 326.578 96 256S153.422 128 224 128S352 185.422 352 256S294.578 384 224 384Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ jsx("path", { d: "M224 128C153.422 128 96 185.422 96 256S153.422 384 224 384S352 326.578 352 256S294.578 128 224 128ZM224 336C179.891 336 144 300.109 144 256S179.891 176 224 176S304 211.891 304 256S268.109 336 224 336Z" })
    ]
  }
));
SquareODuotone.displayName = "SquareODuotone";
var SquareO_default = SquareODuotone;
export {
  SquareO_default as default
};
