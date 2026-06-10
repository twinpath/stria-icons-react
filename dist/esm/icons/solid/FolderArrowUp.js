import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const FolderArrowUpSolid = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M464 96H272L208 32H48C21.5 32 0 53.5 0 80V432C0 458.5 21.5 480 48 480H464C490.5 480 512 458.5 512 432V144C512 117.5 490.5 96 464 96ZM352.969 304.969C348.281 309.656 342.156 312 336 312S323.719 309.656 319.031 304.969L280 265.938V376C280 389.25 269.25 400 256 400S232 389.25 232 376V265.938L192.969 304.969C183.594 314.344 168.406 314.344 159.031 304.969S149.656 280.406 159.031 271.031L239.031 191.031C248.406 181.656 263.594 181.656 272.969 191.031L352.969 271.031C362.344 280.406 362.344 295.594 352.969 304.969Z" })
  }
));
FolderArrowUpSolid.displayName = "FolderArrowUpSolid";
var FolderArrowUp_default = FolderArrowUpSolid;
export {
  FolderArrowUp_default as default
};
