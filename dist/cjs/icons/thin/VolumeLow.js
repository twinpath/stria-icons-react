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
var VolumeLow_exports = {};
__export(VolumeLow_exports, {
  default: () => VolumeLow_default
});
module.exports = __toCommonJS(VolumeLow_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const VolumeLowThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M301.375 34.932C297.086 32.963 292.52 32 287.984 32C280.488 32 273.086 34.631 267.188 39.713L164.203 159.996H32C14.328 159.996 0 174.322 0 191.996V319.998C0 337.67 14.328 351.998 32 351.998H164.203L267.188 472.281C273.094 477.375 280.5 480 288 480C292.531 480 297.094 479.031 301.375 477.062C312.719 471.844 320 460.5 320 448V63.995C320 51.494 312.719 40.15 301.375 34.932ZM304 448C304 454.222 300.344 459.924 294.691 462.525C292.562 463.504 290.312 464 288 464C284.523 464 281.156 462.867 278.418 460.793L176.355 341.592L171.566 335.998H164.203H32C23.176 335.998 16 328.82 16 319.998V191.996C16 183.174 23.176 175.996 32 175.996H164.203H171.566L176.355 170.402L278.414 51.203C281.156 49.131 284.516 48 287.984 48C290.309 48 292.57 48.496 294.688 49.467C300.344 52.069 304 57.772 304 63.995V448ZM407.188 195.465C404.375 198.871 404.875 203.934 408.312 206.715C423.375 219.028 432 236.997 432 255.997S423.375 292.966 408.312 305.279C404.875 308.06 404.375 313.123 407.188 316.529C408.75 318.467 411.063 319.467 413.375 319.467C415.156 319.467 416.969 318.873 418.438 317.654C437.219 302.31 448 279.81 448 255.997S437.219 209.684 418.438 194.34C415 191.559 409.938 192.027 407.188 195.465Z" })
  }
));
VolumeLowThin.displayName = "VolumeLowThin";
var VolumeLow_default = VolumeLowThin;
