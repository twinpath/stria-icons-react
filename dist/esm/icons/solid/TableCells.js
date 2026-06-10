import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const TableCellsSolid = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M448 32H64C28.654 32 0 60.652 0 96V416C0 451.346 28.654 480 64 480H448C483.346 480 512 451.346 512 416V96C512 60.652 483.346 32 448 32ZM298.666 96V160H213.334V96H298.666ZM298.666 224V288H213.334V224H298.666ZM64 96H149.334V160H64V96ZM64 224H149.334V288H64V224ZM64 416V352H149.334V416H64ZM213.334 416V352H298.666V416H213.334ZM448 416H362.666V352H448V416ZM448 288H362.666V224H448V288ZM448 160H362.666V96H448V160Z" })
  }
));
TableCellsSolid.displayName = "TableCellsSolid";
var TableCells_default = TableCellsSolid;
export {
  TableCells_default as default
};
