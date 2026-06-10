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
var FluxCapacitor_exports = {};
__export(FluxCapacitor_exports, {
  default: () => FluxCapacitor_default
});
module.exports = __toCommonJS(FluxCapacitor_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FluxCapacitorRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448 120V392C447.875 440.625 408.625 479.875 360 480H88C39.375 479.875 0.125 440.625 0 392V120C0.125 71.375 39.375 32.125 88 32H360C408.625 32.125 447.875 71.375 448 120ZM400 120C400 97.875 382.125 80 360 80H88C65.875 80 48 97.875 48 120V392C48 414.125 65.875 432 88 432H360C382.125 432 400 414.125 400 392V120ZM384 176C384 220.125 348.125 256 304 256C297.125 255.75 290.25 254.75 283.5 253L332.25 204.25C339 197.75 344.5 184.875 344.5 175.5C344.5 153.375 326.625 135.5 304.5 135.5C295.125 135.5 282.25 141 275.75 147.75L224 199.5L172.25 147.75C165.75 141 152.875 135.5 143.5 135.5C121.375 135.5 103.5 153.375 103.5 175.5C103.5 184.875 109 197.75 115.75 204.25L164.5 253C157.75 254.75 150.875 255.75 144 256C99.875 256 64 220.125 64 176S99.875 96 144 96S224 131.875 224 176C224 131.875 259.875 96 304 96S384 131.875 384 176ZM208 336V262.625L132.75 187.25C130 184.25 128.5 180.375 128.25 176.25C128.25 172 130 168 133 165C136 162.001 140.125 160.25 144.375 160.25C148.375 160.5 152.25 162.001 155.25 164.75L224 233.375L292.625 164.75C295.75 162.001 299.625 160.5 303.625 160.25C307.875 160.25 312 162.001 315 165C318 168 319.75 172 319.625 176.25C319.5 180.375 318 184.25 315.25 187.25L240 262.625V336C240 344.875 232.875 352 224 352S208 344.875 208 336ZM304 336.125C304 380.25 268.125 416.125 224 416.125S144 380.25 144 336.125C144 312.125 160.25 282.001 180.375 269L184 272.5V336C184 358.125 201.875 376 224 376S264 358.125 264 336V272.5L267.5 269C287.625 282.001 304 312.125 304 336.125Z" })
  }
));
FluxCapacitorRegular.displayName = "FluxCapacitorRegular";
var FluxCapacitor_default = FluxCapacitorRegular;
