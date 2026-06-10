var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var TablePivot_exports = {};
__export(TablePivot_exports, {
  default: () => TablePivot_default
});
module.exports = __toCommonJS(TablePivot_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TablePivotRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M128 32H64C28.625 32 0 60.641 0 96V160H128V32ZM274.373 290.361L234.369 330.367C231.244 333.492 231.244 338.492 234.369 341.617L274.373 381.623C279.373 386.686 288 383.123 288 375.996V352H344C366.062 352 384 334.062 384 312V256H408.012C415.824 256 418.326 246.998 413.637 242.373L373.633 202.369C370.508 199.242 365.508 199.242 362.381 202.369L322.377 242.373C317.314 247.373 320.877 256 328.002 256H352V312C352 316.406 348.406 320 344 320H288V295.988C288 288.174 278.998 285.674 274.373 290.361ZM448 32H160V144H464V416C464 424.828 456.812 432 448 432H112V192H0V416C0 451.359 28.625 480 64 480H448C483.375 480 512 451.359 512 416V96C512 60.641 483.312 32 448 32Z" })
  }
));
TablePivotRegular.displayName = "TablePivotRegular";
var TablePivot_default = TablePivotRegular;
