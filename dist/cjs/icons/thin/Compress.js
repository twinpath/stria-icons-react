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
var Compress_exports = {};
__export(Compress_exports, {
  default: () => Compress_default
});
module.exports = __toCommonJS(Compress_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CompressThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M152 31.999C147.594 31.999 144 35.577 144 39.999V175.999H8C3.594 175.999 0 179.577 0 183.999S3.594 191.999 8 191.999H152C156.406 191.999 160 188.421 160 183.999V39.999C160 35.577 156.406 31.999 152 31.999ZM296 191.999H440C444.406 191.999 448 188.421 448 183.999S444.406 175.999 440 175.999H304V39.999C304 35.577 300.406 31.999 296 31.999S288 35.577 288 39.999V183.999C288 188.421 291.594 191.999 296 191.999ZM440 319.999H296C291.594 319.999 288 323.577 288 327.999V471.999C288 476.421 291.594 479.999 296 479.999S304 476.421 304 471.999V335.999H440C444.406 335.999 448 332.421 448 327.999S444.406 319.999 440 319.999ZM152 319.999H8C3.594 319.999 0 323.577 0 327.999S3.594 335.999 8 335.999H144V471.999C144 476.421 147.594 479.999 152 479.999S160 476.421 160 471.999V327.999C160 323.577 156.406 319.999 152 319.999Z" })
  }
));
CompressThin.displayName = "CompressThin";
var Compress_default = CompressThin;
