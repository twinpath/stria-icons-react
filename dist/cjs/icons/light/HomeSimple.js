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
var HomeSimple_exports = {};
__export(HomeSimple_exports, {
  default: () => HomeSimple_default
});
module.exports = __toCommonJS(HomeSimple_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HomeSimpleLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M576.001 256.01C576.001 251.575 574.169 247.161 570.577 244L298.579 4C295.563 1.344 291.782 0.016 288.001 0.016S280.438 1.344 277.422 4L5.424 244C1.832 247.161 0 251.575 0 256.01C0 264.93 7.24 271.993 16.044 271.993C19.8 271.993 23.563 270.68 26.58 268L64.002 234.982V432C64.002 476.125 99.892 512 144.001 512H432C476.109 512 511.999 476.125 511.999 432V234.982L549.421 268C552.452 270.688 556.233 272 559.999 272C568.726 272 576.001 264.947 576.001 256.01ZM479.999 208V432C479.999 458.469 458.468 480 432 480H144.001C117.533 480 96.002 458.469 96.002 432V208C96.002 207.623 95.812 207.309 95.787 206.938L288.001 37.344L480.214 206.938C480.189 207.309 479.999 207.623 479.999 208Z " })
  }
));
HomeSimpleLight.displayName = "HomeSimpleLight";
var HomeSimple_default = HomeSimpleLight;
