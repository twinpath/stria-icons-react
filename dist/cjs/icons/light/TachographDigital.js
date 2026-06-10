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
var TachographDigital_exports = {};
__export(TachographDigital_exports, {
  default: () => TachographDigital_default
});
module.exports = __toCommonJS(TachographDigital_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TachographDigitalLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M576 64H64C28.654 64 0 92.654 0 128V384C0 419.346 28.654 448 64 448H576C611.348 448 640 419.346 640 384V128C640 92.654 611.348 64 576 64ZM608 384C608 401.645 593.645 416 576 416H64C46.355 416 32 401.645 32 384V128C32 110.355 46.355 96 64 96H576C593.645 96 608 110.355 608 128V384ZM320 128H96C78.328 128 64 142.326 64 160V224C64 241.674 78.328 256 96 256H320C337.674 256 352 241.674 352 224V160C352 142.326 337.674 128 320 128ZM320 224H96V160H320V224ZM336 352H80C71.156 352 64 359.156 64 368S71.156 384 80 384H336C344.844 384 352 376.844 352 368S344.844 352 336 352ZM560 352H400C391.156 352 384 359.156 384 368S391.156 384 400 384H560C568.844 384 576 376.844 576 368S568.844 352 560 352ZM80 320C88.836 320 96 312.836 96 304C96 295.162 88.836 288 80 288S64 295.162 64 304C64 312.836 71.164 320 80 320ZM160 304C160 295.162 152.836 288 144 288S128 295.162 128 304C128 312.836 135.164 320 144 320S160 312.836 160 304ZM224 304C224 295.162 216.836 288 208 288S192 295.162 192 304C192 312.836 199.164 320 208 320S224 312.836 224 304ZM288 304C288 295.162 280.836 288 272 288S256 295.162 256 304C256 312.836 263.164 320 272 320S288 312.836 288 304ZM336 288C327.164 288 320 295.162 320 304C320 312.836 327.164 320 336 320S352 312.836 352 304C352 295.162 344.836 288 336 288Z" })
  }
));
TachographDigitalLight.displayName = "TachographDigitalLight";
var TachographDigital_default = TachographDigitalLight;
