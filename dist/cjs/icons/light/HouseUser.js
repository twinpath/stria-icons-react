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
var HouseUser_exports = {};
__export(HouseUser_exports, {
  default: () => HouseUser_default
});
module.exports = __toCommonJS(HouseUser_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HouseUserLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 351.987C211.817 351.987 176.001 387.801 176.001 431.982C176.001 440.818 183.165 447.981 192.001 447.981C200.837 447.981 208.001 440.818 208.001 431.982C208.001 405.474 229.491 383.985 256 383.985H320C346.509 383.985 367.999 405.474 367.999 431.982C367.999 440.818 375.163 447.981 383.999 447.981S399.999 440.818 399.999 431.982C399.999 387.801 364.183 351.987 320 351.987H256ZM224.001 255.992C224.001 291.336 252.655 319.989 288 319.989S351.999 291.336 351.999 255.992S323.345 191.996 288 191.996S224.001 220.648 224.001 255.992ZM320 255.992C320 273.636 305.644 287.99 288 287.99S256 273.636 256 255.992S270.356 223.994 288 223.994S320 238.349 320 255.992ZM576 255.995C576 251.563 574.172 247.152 570.59 243.993L511.946 192.25C511.948 192.16 511.997 192.086 511.997 191.996V48.004C511.997 39.161 504.841 32.005 495.997 32.005H399.999C391.155 32.005 383.999 39.161 383.999 48.004V79.362L298.594 4.007C295.562 1.35 291.781 0.022 288 0.022S280.438 1.35 277.406 4.007L5.41 243.993C1.828 247.152 0 251.563 0 255.995C0 264.823 7.137 271.984 16.012 271.984C19.769 271.984 23.544 270.671 26.597 267.992L64.003 234.988V431.982C64.003 476.105 99.877 511.978 144.002 511.978H431.998C476.123 511.978 511.997 476.105 511.997 431.982V234.988L549.403 267.992C552.465 270.679 556.215 271.991 559.997 271.991C568.836 271.991 576 264.839 576 255.995ZM415.998 64.003H479.998V164.062L415.998 107.594V64.003ZM479.998 207.995V431.982C479.998 458.449 458.467 479.979 431.998 479.979H144.002C117.533 479.979 96.002 458.449 96.002 431.982V207.995C96.002 207.62 95.815 207.307 95.79 206.94L288 37.348L480.21 206.94C480.185 207.307 479.998 207.62 479.998 207.995Z " })
  }
));
HouseUserLight.displayName = "HouseUserLight";
var HouseUser_default = HouseUserLight;
