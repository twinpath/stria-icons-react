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
var ArrowDownFromDottedLine_exports = {};
__export(ArrowDownFromDottedLine_exports, {
  default: () => ArrowDownFromDottedLine_default
});
module.exports = __toCommonJS(ArrowDownFromDottedLine_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowDownFromDottedLineSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M320 95.999C337.674 95.999 352 81.671 352 63.999S337.674 31.999 320 31.999S288 46.327 288 63.999S302.326 95.999 320 95.999ZM224 95.999C241.674 95.999 256 81.671 256 63.999S241.674 31.999 224 31.999S192 46.327 192 63.999S206.326 95.999 224 95.999ZM416 95.999C433.674 95.999 448 81.671 448 63.999S433.674 31.999 416 31.999S384 46.327 384 63.999S398.326 95.999 416 95.999ZM73.375 342.624L201.375 470.624C213.875 483.124 234.125 483.124 246.625 470.624L374.625 342.624C387.125 330.124 387.125 309.874 374.625 297.374S341.875 284.874 329.375 297.374L256 370.749V191.999C256 174.312 241.688 159.999 224 159.999S192 174.312 192 191.999V370.749L118.625 297.374C112.375 291.124 104.188 287.999 96 287.999S79.625 291.124 73.375 297.374C60.875 309.874 60.875 330.124 73.375 342.624ZM128 95.999C145.674 95.999 160 81.671 160 63.999S145.674 31.999 128 31.999S96 46.327 96 63.999S110.326 95.999 128 95.999ZM32 95.999C49.674 95.999 64 81.671 64 63.999S49.674 31.999 32 31.999S0 46.327 0 63.999S14.326 95.999 32 95.999Z" })
  }
));
ArrowDownFromDottedLineSolid.displayName = "ArrowDownFromDottedLineSolid";
var ArrowDownFromDottedLine_default = ArrowDownFromDottedLineSolid;
