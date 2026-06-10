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
var PumpMedical_exports = {};
__export(PumpMedical_exports, {
  default: () => PumpMedical_default
});
module.exports = __toCommonJS(PumpMedical_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PumpMedicalThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 384 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M235.631 160H84.369C51.268 160 23.629 185.24 20.631 218.205L0.268 442.205C-3.138 479.686 26.371 512 64.006 512H255.994C293.629 512 323.139 479.686 319.733 442.205L299.369 218.205C296.371 185.24 268.733 160 235.631 160ZM291.44 480.369C282.233 490.449 269.647 496 255.994 496H64.006C50.356 496 37.768 490.449 28.563 480.369C19.356 470.289 14.967 457.25 16.203 443.654L36.567 219.654C38.828 194.768 59.379 176 84.369 176H235.631C260.619 176 281.172 194.768 283.436 219.654L303.799 443.652C305.034 457.248 300.645 470.287 291.44 480.369ZM365.657 114.344L319.032 67.719C311.469 60.156 301.438 56 290.75 56H224V32C224 14.326 209.674 0 192 0H128C110.328 0 96 14.326 96 32V120C96 124.418 99.582 128 104 128S112 124.418 112 120V32C112 23.164 119.164 16 128 16H192C200.838 16 208 23.164 208 32V120C208 124.418 211.582 128 216 128S224 124.418 224 120V72H290.75C297.063 72 303.25 74.562 307.719 79.031L354.344 125.656C355.907 127.219 357.953 128 360 128S364.094 127.219 365.657 125.656C368.782 122.531 368.782 117.469 365.657 114.344ZM232 280H200V248C200 239.164 192.838 232 184 232H136C127.164 232 120 239.164 120 248V280H88C79.164 280 72 287.164 72 296V344C72 352.836 79.164 360 88 360H120V392C120 400.836 127.164 408 136 408H184C192.838 408 200 400.836 200 392V360H232C240.838 360 248 352.836 248 344V296C248 287.164 240.838 280 232 280ZM232 344H184V392H136V344H88V296H136V248H184V296H232V344Z" })
  }
));
PumpMedicalThin.displayName = "PumpMedicalThin";
var PumpMedical_default = PumpMedicalThin;
