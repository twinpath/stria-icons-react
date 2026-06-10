import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const UserTieSolid = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M224 256C294.75 256 352 198.75 352 128S294.75 0 224 0S96 57.25 96 128S153.25 256 224 256ZM314.705 308.836L271.988 479.953L240 344L272 288H176L208 344L176.012 479.953L133.295 308.836C56.906 326.93 0 395.406 0 477.332C0 496.477 15.523 512 34.664 512H413.336C432.477 512 448 496.477 448 477.332C448 395.406 391.1 326.93 314.705 308.836Z" })
  }
));
UserTieSolid.displayName = "UserTieSolid";
var UserTie_default = UserTieSolid;
export {
  UserTie_default as default
};
