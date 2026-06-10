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
var VolumeXmark_exports = {};
__export(VolumeXmark_exports, {
  default: () => VolumeXmark_default
});
module.exports = __toCommonJS(VolumeXmark_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const VolumeXmarkThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M301.367 34.932C297.078 32.963 292.512 32 287.979 32C280.482 32 273.08 34.631 267.182 39.713L164.199 159.996H32C14.328 159.996 0 174.322 0 191.996V319.998C0 337.67 14.328 351.998 32 351.998H164.199L267.182 472.281C273.088 477.375 280.494 480 287.994 480C292.523 480 297.086 479.031 301.367 477.062C312.711 471.844 319.992 460.5 319.992 448V63.994C319.992 51.494 312.711 40.15 301.367 34.932ZM303.992 448C303.992 454.223 300.336 459.924 294.684 462.525C292.555 463.504 290.305 464 287.994 464C284.518 464 281.15 462.867 278.412 460.793L176.352 341.592L171.562 335.998H32C23.176 335.998 16 328.82 16 319.998V191.996C16 183.174 23.176 175.996 32 175.996H171.562L176.352 170.402L278.408 51.203C281.15 49.131 284.51 48 287.979 48C290.301 48 292.562 48.496 294.68 49.467C300.336 52.068 303.992 57.771 303.992 63.994V448ZM491.312 255.998L557.656 189.656C560.781 186.531 560.781 181.469 557.656 178.344S549.469 175.219 546.344 178.344L480 244.686L413.656 178.344C410.531 175.219 405.469 175.219 402.344 178.344S399.219 186.531 402.344 189.656L468.688 255.998L402.344 322.342C399.219 325.467 399.219 330.529 402.344 333.654C405.471 336.781 410.529 336.781 413.656 333.654L480 267.311L546.344 333.654C549.471 336.781 554.529 336.781 557.656 333.654C560.781 330.529 560.781 325.467 557.656 322.342L491.312 255.998Z" })
  }
));
VolumeXmarkThin.displayName = "VolumeXmarkThin";
var VolumeXmark_default = VolumeXmarkThin;
