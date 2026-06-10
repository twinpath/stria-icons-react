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
var BreadSlice_exports = {};
__export(BreadSlice_exports, {
  default: () => BreadSlice_default
});
module.exports = __toCommonJS(BreadSlice_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BreadSliceLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 32C102.875 32 0 115.234 0 192.969C0 227.805 26.668 253.262 64 255.555V434C64 459.359 84.625 480 110 480H402C427.375 480 448 459.359 448 434V255.555C485.332 253.262 512 227.805 512 192.969C512 115.234 409.125 32 256 32ZM442.656 224C427.934 224 416 235.934 416 250.656V434C416 441.732 409.732 448 402 448H110C102.268 448 96 441.732 96 434V250.656C96 235.934 84.066 224 69.344 224C47 224 32 211.531 32 192.969C32 140.25 111.781 64 256 64S480 140.25 480 192.969C480 211.531 465 224 442.656 224Z" })
  }
));
BreadSliceLight.displayName = "BreadSliceLight";
var BreadSlice_default = BreadSliceLight;
