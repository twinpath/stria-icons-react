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
const ArrowDownFromDottedLineRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M224 95.999C241.674 95.999 256 81.671 256 63.999S241.674 31.999 224 31.999S192 46.327 192 63.999S206.326 95.999 224 95.999ZM416 95.999C433.674 95.999 448 81.671 448 63.999S433.674 31.999 416 31.999S384 46.327 384 63.999S398.326 95.999 416 95.999ZM320 95.999C337.674 95.999 352 81.671 352 63.999S337.674 31.999 320 31.999S288 46.327 288 63.999S302.326 95.999 320 95.999ZM128 95.999C145.674 95.999 160 81.671 160 63.999S145.674 31.999 128 31.999S96 46.327 96 63.999S110.326 95.999 128 95.999ZM32 95.999C49.674 95.999 64 81.671 64 63.999S49.674 31.999 32 31.999S0 46.327 0 63.999S14.326 95.999 32 95.999ZM206.531 472.726C215.594 482.425 232.406 482.425 241.469 472.726L369.469 336.519C378.563 326.847 378.094 311.636 368.438 302.562C358.813 293.452 343.625 293.89 334.531 303.593L248 395.647V184.038C248 170.765 237.25 159.999 224 159.999S200 170.765 200 184.038V395.647L113.469 303.593C108.75 298.554 102.375 296.019 96 296.019C90.094 296.019 84.188 298.179 79.562 302.562C69.906 311.636 69.438 326.847 78.531 336.519L206.531 472.726Z" })
  }
));
ArrowDownFromDottedLineRegular.displayName = "ArrowDownFromDottedLineRegular";
var ArrowDownFromDottedLine_default = ArrowDownFromDottedLineRegular;
