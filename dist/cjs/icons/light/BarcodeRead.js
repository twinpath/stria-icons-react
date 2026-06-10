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
var BarcodeRead_exports = {};
__export(BarcodeRead_exports, {
  default: () => BarcodeRead_default
});
module.exports = __toCommonJS(BarcodeRead_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BarcodeReadLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M208 128C199.156 128 192 135.156 192 144V368C192 376.844 199.156 384 208 384S224 376.844 224 368V144C224 135.156 216.844 128 208 128ZM432 384C440.844 384 448 376.844 448 368V144C448 135.156 440.844 128 432 128S416 135.156 416 144V368C416 376.844 423.156 384 432 384ZM272 128C263.156 128 256 135.156 256 144V368C256 376.844 263.156 384 272 384S288 376.844 288 368V144C288 135.156 280.844 128 272 128ZM352 128C343.156 128 336 135.156 336 144V368C336 376.844 343.156 384 352 384S368 376.844 368 368V144C368 135.156 360.844 128 352 128ZM144 128C135.156 128 128 135.156 128 144V368C128 376.844 135.156 384 144 384S160 376.844 160 368V144C160 135.156 152.844 128 144 128ZM144 0H16C7.156 0 0 7.156 0 16V144C0 152.844 7.156 160 16 160S32 152.844 32 144V32H144C152.844 32 160 24.844 160 16S152.844 0 144 0ZM560 0H432C423.156 0 416 7.156 416 16S423.156 32 432 32H544V144C544 152.844 551.156 160 560 160S576 152.844 576 144V16C576 7.156 568.844 0 560 0ZM560 352C551.156 352 544 359.156 544 368V480H432C423.156 480 416 487.156 416 496S423.156 512 432 512H560C568.844 512 576 504.844 576 496V368C576 359.156 568.844 352 560 352ZM144 480H32V368C32 359.156 24.844 352 16 352S0 359.156 0 368V496C0 504.844 7.156 512 16 512H144C152.844 512 160 504.844 160 496S152.844 480 144 480Z" })
  }
));
BarcodeReadLight.displayName = "BarcodeReadLight";
var BarcodeRead_default = BarcodeReadLight;
