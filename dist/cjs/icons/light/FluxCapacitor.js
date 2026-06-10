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
const FluxCapacitorLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448 112V400C447.875 444.125 412.125 479.875 368 480H80C35.875 479.875 0.125 444.125 0 400V112C0.125 67.875 35.875 32.125 80 32H368C412.125 32.125 447.875 67.875 448 112ZM416 112C416 85.5 394.5 64 368 64H80C53.5 64 32 85.5 32 112V400C32 426.5 53.5 448 80 448H368C394.5 448 416 426.5 416 400V112ZM384 176C384 220.125 348.125 256 304 256C300.25 255.875 296.5 255.5 292.75 255L337.875 210.001C345.5 202.25 351.75 187.125 351.75 176.25C351.75 149.75 330.25 128.25 303.75 128.25C292.875 128.25 277.75 134.5 270 142.001L224 188.125L177.875 142.001C170.125 134.375 155.125 128.25 144.25 128.25C117.75 128.25 96.25 149.75 96.25 176.25C96.25 187.125 102.5 202.125 110 209.875L155.25 255C151.5 255.5 147.75 255.875 144 256C99.875 256 64 220.125 64 176S99.875 96 144 96S224 131.875 224 176C224 131.875 259.875 96 304 96S384 131.875 384 176ZM208 336V262.625L132.75 187.25C130 184.25 128.5 180.375 128.25 176.25C128.25 172 130 168 133 165C136 162.001 140.125 160.25 144.375 160.25C148.375 160.5 152.25 162.001 155.25 164.75L224 233.375L292.625 164.75C295.75 162.001 299.625 160.5 303.625 160.25C307.875 160.25 312 162.001 315 165C318 168 319.75 172 319.625 176.25C319.5 180.375 318 184.25 315.25 187.25L240 262.625V336C240 344.875 232.875 352 224 352S208 344.875 208 336ZM304 336C304.25 373.375 278.5 405.875 242.125 414.375C205.75 422.875 168.375 405 152 371.375C135.75 337.75 144.875 297.375 174 274.001L176 275.875V336C176 362.5 197.5 384 224 384S272 362.5 272 336V275.875L273.875 274.001C292.875 289 304 311.875 304 336Z" })
  }
));
FluxCapacitorLight.displayName = "FluxCapacitorLight";
var FluxCapacitor_default = FluxCapacitorLight;
