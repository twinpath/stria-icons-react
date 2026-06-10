import { jsx, jsxs } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const AlbumDuotone = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsxs(
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
      /* @__PURE__ */ jsx("path", { d: "M384 32H64C28.8 32 0 60.8 0 96V416C0 451.2 28.8 480 64 480H384C419.2 480 448 451.2 448 416V96C448 60.8 419.2 32 384 32ZM224 416C135.625 416 64 344.375 64 256S135.625 96 224 96S384 167.625 384 256S312.375 416 224 416Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ jsx("path", { d: "M224 224C206.375 224 192 238.375 192 256S206.375 288 224 288S256 273.625 256 256S241.625 224 224 224ZM224 416C135.625 416 64 344.375 64 256S135.625 96 224 96S384 167.625 384 256S312.375 416 224 416Z" })
    ]
  }
));
AlbumDuotone.displayName = "AlbumDuotone";
var Album_default = AlbumDuotone;
export {
  Album_default as default
};
