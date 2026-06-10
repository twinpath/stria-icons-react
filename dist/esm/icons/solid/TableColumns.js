import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const TableColumnsSolid = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M448 32H64C28.654 32 0 60.654 0 96V416C0 451.346 28.654 480 64 480H448C483.346 480 512 451.346 512 416V96C512 60.654 483.346 32 448 32ZM224 416H64V160H224V416ZM448 416H288V160H448V416Z" })
  }
));
TableColumnsSolid.displayName = "TableColumnsSolid";
var TableColumns_default = TableColumnsSolid;
export {
  TableColumns_default as default
};
