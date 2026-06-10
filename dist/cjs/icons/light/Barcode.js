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
var Barcode_exports = {};
__export(Barcode_exports, {
  default: () => Barcode_default
});
module.exports = __toCommonJS(Barcode_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BarcodeLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 512 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M496 32C487.156 32 480 39.156 480 48V464C480 472.844 487.156 480 496 480S512 472.844 512 464V48C512 39.156 504.844 32 496 32ZM400 32C391.156 32 384 39.156 384 48V464C384 472.844 391.156 480 400 480S416 472.844 416 464V48C416 39.156 408.844 32 400 32ZM304 32C295.156 32 288 39.156 288 48V464C288 472.844 295.156 480 304 480S320 472.844 320 464V48C320 39.156 312.844 32 304 32ZM240 32C231.156 32 224 39.156 224 48V464C224 472.844 231.156 480 240 480S256 472.844 256 464V48C256 39.156 248.844 32 240 32ZM144 32C135.156 32 128 39.156 128 48V464C128 472.844 135.156 480 144 480S160 472.844 160 464V48C160 39.156 152.844 32 144 32ZM80 32C71.156 32 64 39.156 64 48V464C64 472.844 71.156 480 80 480S96 472.844 96 464V48C96 39.156 88.844 32 80 32ZM16 32C7.156 32 0 39.156 0 48V464C0 472.844 7.156 480 16 480S32 472.844 32 464V48C32 39.156 24.844 32 16 32Z" })
  }
));
BarcodeLight.displayName = "BarcodeLight";
var Barcode_default = BarcodeLight;
