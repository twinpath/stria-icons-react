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
var Divide_exports = {};
__export(Divide_exports, {
  default: () => Divide_default
});
module.exports = __toCommonJS(Divide_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DivideLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M432 240H16C7.156 240 0 247.156 0 256S7.156 272 16 272H432C440.844 272 448 264.844 448 256S440.844 240 432 240ZM224 192C259.346 192 288 163.348 288 128S259.346 64 224 64S160 92.652 160 128S188.654 192 224 192ZM224 96C241.645 96 256 110.355 256 128S241.645 160 224 160S192 145.645 192 128S206.355 96 224 96ZM224 320C188.654 320 160 348.652 160 384S188.654 448 224 448S288 419.348 288 384S259.346 320 224 320ZM224 416C206.355 416 192 401.645 192 384S206.355 352 224 352S256 366.355 256 384S241.645 416 224 416Z" })
  }
));
DivideLight.displayName = "DivideLight";
var Divide_default = DivideLight;
