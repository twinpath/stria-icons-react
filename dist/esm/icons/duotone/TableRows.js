import { jsx, jsxs } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const TableRowsDuotone = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsxs(
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
      /* @__PURE__ */ jsx("path", { d: "M128 288V224H448V288H128Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ jsx("path", { d: "M0 96V416C0 451.346 28.652 480 64 480H448C483.346 480 512 451.346 512 416V96C512 60.654 483.346 32 448 32H64C28.652 32 0 60.654 0 96ZM448 96V416H128V96H448Z" })
    ]
  }
));
TableRowsDuotone.displayName = "TableRowsDuotone";
var TableRows_default = TableRowsDuotone;
export {
  TableRows_default as default
};
