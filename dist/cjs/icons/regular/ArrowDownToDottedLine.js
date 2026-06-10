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
const ArrowDownToDottedLineRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M224 416C206.326 416 192 430.328 192 448S206.326 480 224 480S256 465.672 256 448S241.674 416 224 416ZM32 416C14.326 416 0 430.328 0 448S14.326 480 32 480S64 465.672 64 448S49.674 416 32 416ZM128 416C110.326 416 96 430.328 96 448S110.326 480 128 480S160 465.672 160 448S145.674 416 128 416ZM320 416C302.326 416 288 430.328 288 448S302.326 480 320 480S352 465.672 352 448S337.674 416 320 416ZM416 416C398.326 416 384 430.328 384 448S398.326 480 416 480S448 465.672 448 448S433.674 416 416 416ZM206.531 360.726C215.594 370.425 232.406 370.425 241.469 360.726L369.469 224.519C378.563 214.847 378.094 199.636 368.438 190.562C358.813 181.452 343.625 181.89 334.531 191.593L248 283.647V72.038C248 58.765 237.25 47.999 224 47.999S200 58.765 200 72.038V283.647L113.469 191.593C108.75 186.554 102.375 184.019 96 184.019C90.094 184.019 84.188 186.179 79.562 190.562C69.906 199.636 69.438 214.847 78.531 224.519L206.531 360.726Z" })
  }
));
ArrowDownToDottedLineRegular.displayName = "ArrowDownToDottedLineRegular";
var ArrowDownToDottedLine_default = ArrowDownToDottedLineRegular;
