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
var ArrowDownWideShort_exports = {};
__export(ArrowDownWideShort_exports, {
  default: () => ArrowDownWideShort_default
});
module.exports = __toCommonJS(ArrowDownWideShort_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowDownWideShortThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M210.098 370.676L136 451.529V40.002C136 35.594 132.406 32 128 32S120 35.594 120 40.002V451.529L45.902 370.676C44.309 368.957 42.152 368.082 39.996 368.082C38.059 368.082 36.121 368.77 34.59 370.176C31.34 373.178 31.121 378.24 34.09 381.492L122.094 477.516C125.156 480.828 130.844 480.828 133.906 477.516L221.91 381.492C224.879 378.24 224.66 373.178 221.41 370.176C218.16 367.176 213.098 367.395 210.098 370.676ZM536 48H264C259.594 48 256 51.594 256 56S259.594 64 264 64H536C540.406 64 544 60.406 544 56S540.406 48 536 48ZM472 176H264C259.594 176 256 179.594 256 184S259.594 192 264 192H472C476.406 192 480 188.406 480 184S476.406 176 472 176ZM408 304H264C259.594 304 256 307.594 256 312S259.594 320 264 320H408C412.406 320 416 316.406 416 312S412.406 304 408 304ZM344 432H264C259.594 432 256 435.594 256 440S259.594 448 264 448H344C348.406 448 352 444.406 352 440S348.406 432 344 432Z" })
  }
));
ArrowDownWideShortThin.displayName = "ArrowDownWideShortThin";
var ArrowDownWideShort_default = ArrowDownWideShortThin;
