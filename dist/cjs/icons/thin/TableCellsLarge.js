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
var TableCellsLarge_exports = {};
__export(TableCellsLarge_exports, {
  default: () => TableCellsLarge_default
});
module.exports = __toCommonJS(TableCellsLarge_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TableCellsLargeThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M493.254 50.744C481.674 39.164 465.674 32 448 32H64C46.326 32 30.326 39.164 18.746 50.744C7.164 62.326 0 78.326 0 96V416C0 433.674 7.164 449.674 18.746 461.254C30.326 472.836 46.326 480 64 480H448C465.674 480 481.674 472.836 493.254 461.254C504.836 449.674 512 433.674 512 416V96C512 78.326 504.836 62.326 493.254 50.744ZM248 464H64C51.178 464 39.125 459.006 30.059 449.939C20.992 440.875 16 428.822 16 416V264H248V464ZM248 248H16V96C16 83.178 20.994 71.125 30.061 62.057C39.125 52.992 51.178 48 64 48H248V248ZM496 416C496 428.822 491.008 440.875 481.939 449.941C472.875 459.006 460.822 464 448 464H264V264H496V416ZM496 248H264V48H448C460.822 48 472.875 52.992 481.939 62.057C491.006 71.125 496 83.178 496 96V248Z" })
  }
));
TableCellsLargeThin.displayName = "TableCellsLargeThin";
var TableCellsLarge_default = TableCellsLargeThin;
