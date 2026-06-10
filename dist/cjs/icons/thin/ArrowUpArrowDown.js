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
var ArrowUpArrowDown_exports = {};
__export(ArrowUpArrowDown_exports, {
  default: () => ArrowUpArrowDown_default
});
module.exports = __toCommonJS(ArrowUpArrowDown_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowUpArrowDownThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M226.59 370.176C223.34 373.178 223.121 378.24 226.09 381.492L314.094 477.516C317.156 480.828 322.844 480.828 325.906 477.516L413.91 381.492C416.879 378.24 416.66 373.178 413.41 370.176C411.879 368.77 409.941 368.082 408.004 368.082C405.848 368.082 403.691 368.957 402.098 370.676L328 451.529V40.002C328 35.594 324.406 32 320 32S312 35.594 312 40.002V451.529L237.902 370.676C234.902 367.395 229.84 367.176 226.59 370.176ZM34.59 141.824C36.121 143.23 38.059 143.918 39.996 143.918C42.152 143.918 44.309 143.043 45.902 141.324L120 60.471V471.998C120 476.406 123.594 480 128 480S136 476.406 136 471.998V60.471L210.098 141.324C213.098 144.605 218.16 144.824 221.41 141.824C224.66 138.822 224.879 133.76 221.91 130.508L133.906 34.484C130.844 31.172 125.156 31.172 122.094 34.484L34.09 130.508C31.121 133.76 31.34 138.822 34.59 141.824Z" })
  }
));
ArrowUpArrowDownThin.displayName = "ArrowUpArrowDownThin";
var ArrowUpArrowDown_default = ArrowUpArrowDownThin;
