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
var ArrowDownToDottedLine_exports = {};
__export(ArrowDownToDottedLine_exports, {
  default: () => ArrowDownToDottedLine_default
});
module.exports = __toCommonJS(ArrowDownToDottedLine_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowDownToDottedLineSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M128 416C110.326 416 96 430.328 96 448S110.326 480 128 480S160 465.672 160 448S145.674 416 128 416ZM224 416C206.326 416 192 430.328 192 448S206.326 480 224 480S256 465.672 256 448S241.674 416 224 416ZM32 416C14.326 416 0 430.328 0 448S14.326 480 32 480S64 465.672 64 448S49.674 416 32 416ZM73.375 230.624L201.375 358.624C213.875 371.124 234.125 371.124 246.625 358.624L374.625 230.624C387.125 218.124 387.125 197.874 374.625 185.374S341.875 172.874 329.375 185.374L256 258.749V79.999C256 62.312 241.688 47.999 224 47.999S192 62.312 192 79.999V258.749L118.625 185.374C112.375 179.124 104.188 175.999 96 175.999S79.625 179.124 73.375 185.374C60.875 197.874 60.875 218.124 73.375 230.624ZM320 416C302.326 416 288 430.328 288 448S302.326 480 320 480S352 465.672 352 448S337.674 416 320 416ZM416 416C398.326 416 384 430.328 384 448S398.326 480 416 480S448 465.672 448 448S433.674 416 416 416Z" })
  }
));
ArrowDownToDottedLineSolid.displayName = "ArrowDownToDottedLineSolid";
var ArrowDownToDottedLine_default = ArrowDownToDottedLineSolid;
