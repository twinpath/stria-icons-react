import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const TableLight = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M448 32H64C28.654 32 0 60.652 0 96V416C0 451.346 28.654 480 64 480H448C483.346 480 512 451.346 512 416V96C512 60.652 483.346 32 448 32ZM32 192H240V304H32V192ZM64 448C46.355 448 32 433.645 32 416V336H240V448H64ZM480 416C480 433.645 465.645 448 448 448H272V336H480V416ZM480 304H272V192H480V304ZM480 160H32V96C32 78.355 46.355 64 64 64H448C465.645 64 480 78.355 480 96V160Z" })
  }
));
TableLight.displayName = "TableLight";
var Table_default = TableLight;
export {
  Table_default as default
};
