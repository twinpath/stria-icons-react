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
var PlanetRinged_exports = {};
__export(PlanetRinged_exports, {
  default: () => PlanetRinged_default
});
module.exports = __toCommonJS(PlanetRinged_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PlanetRingedRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M502.924 9.002C479.546 -14.375 414.665 9.127 335.908 63.882C310.53 53.381 283.403 48.005 256.025 48.005C141.139 48.005 48.005 141.139 48.005 256.025C48.005 283.403 53.381 310.53 63.882 335.908C9.127 414.665 -14.375 479.546 9.002 502.924C32.504 526.426 97.385 502.924 176.268 448.168C201.52 458.669 228.648 464.045 256.025 464.045C370.911 464.045 464.045 370.911 464.045 256.025C464.045 228.648 458.669 201.52 448.168 176.268C502.924 97.385 526.426 32.504 502.924 9.002ZM64.007 448.043C56.006 440.043 66.382 415.165 89.759 380.662C101.636 396.414 115.637 410.54 131.388 422.291C96.885 445.668 72.008 456.044 64.007 448.043ZM172.642 391.913C126.888 363.785 96.01 313.656 96.01 256.025C96.01 167.767 167.767 96.01 256.025 96.01C313.656 96.01 363.785 126.888 391.913 172.642C364.41 207.271 328.782 247.274 288.028 288.028C247.149 328.782 207.271 364.41 172.642 391.913ZM256.025 416.04C245.149 416.04 234.273 414.915 223.647 412.79C258.525 384.787 291.779 355.035 323.407 323.407S384.787 258.525 412.79 223.647C414.915 234.273 416.04 245.149 416.04 256.025C416.04 344.284 344.284 416.04 256.025 416.04ZM380.662 89.759C415.165 66.382 440.043 56.006 448.043 64.007C456.044 72.008 445.668 96.885 422.291 131.388C410.54 115.637 396.414 101.636 380.662 89.759Z" })
  }
));
PlanetRingedRegular.displayName = "PlanetRingedRegular";
var PlanetRinged_default = PlanetRingedRegular;
