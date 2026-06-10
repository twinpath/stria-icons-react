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
var ArrowDownArrowUp_exports = {};
__export(ArrowDownArrowUp_exports, {
  default: () => ArrowDownArrowUp_default
});
module.exports = __toCommonJS(ArrowDownArrowUp_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowDownArrowUpThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M210.098 370.676L136 451.529V40.002C136 35.594 132.406 32 128 32S120 35.594 120 40.002V451.529L45.902 370.676C44.309 368.957 42.152 368.082 39.996 368.082C38.059 368.082 36.121 368.77 34.59 370.176C31.34 373.178 31.121 378.24 34.09 381.492L122.094 477.516C125.156 480.828 130.844 480.828 133.906 477.516L221.91 381.492C224.879 378.24 224.66 373.178 221.41 370.176C218.16 367.176 213.098 367.395 210.098 370.676ZM413.91 130.508L325.906 34.484C322.844 31.172 317.156 31.172 314.094 34.484L226.09 130.508C223.121 133.76 223.34 138.822 226.59 141.824C229.84 144.824 234.902 144.605 237.902 141.324L312 60.471V471.998C312 476.406 315.594 480 320 480S328 476.406 328 471.998V60.471L402.098 141.324C403.691 143.043 405.848 143.918 408.004 143.918C409.941 143.918 411.879 143.23 413.41 141.824C416.66 138.822 416.879 133.76 413.91 130.508Z" })
  }
));
ArrowDownArrowUpThin.displayName = "ArrowDownArrowUpThin";
var ArrowDownArrowUp_default = ArrowDownArrowUpThin;
