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
const HomeSimpleRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M575.997 247.992C575.997 241.19 573.12 234.435 567.526 229.679L303.529 5.672C299.045 1.891 293.522 0 287.998 0S276.952 1.891 272.467 5.672L8.471 229.679C2.877 234.435 0 241.19 0 247.992C0 264.053 13.727 271.992 24.028 271.992C29.511 271.992 35.023 270.125 39.533 266.305L64.001 245.541V448C64.001 483.346 92.655 512 128.001 512H447.996C483.342 512 511.996 483.346 511.996 448V245.541L536.464 266.305C540.98 270.118 546.495 271.993 551.979 271.993C562.14 271.993 575.997 263.963 575.997 247.992ZM463.996 207.991V447.999C463.996 456.835 456.833 463.999 447.996 463.999H128.001C119.164 463.999 112.001 456.835 112.001 447.999V207.991C112.001 207.028 111.563 206.207 111.452 205.274L287.998 55.455L464.545 205.274C464.434 206.207 463.996 207.028 463.996 207.991Z " })
  }
));
HomeSimpleRegular.displayName = "HomeSimpleRegular";
var HomeSimple_default = HomeSimpleRegular;
