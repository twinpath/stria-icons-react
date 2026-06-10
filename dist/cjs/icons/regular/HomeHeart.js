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
var HomeHeart_exports = {};
__export(HomeHeart_exports, {
  default: () => HomeHeart_default
});
module.exports = __toCommonJS(HomeHeart_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HomeHeartRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M280.493 239.724C270.086 229.479 256.045 223.99 242.095 223.99C208.517 223.99 191.988 252.454 191.988 273.763C191.988 286.588 196.959 299.419 206.913 309.256L279.53 380.557C281.886 382.85 284.939 383.996 287.991 383.996S294.096 382.85 296.451 380.557L369.068 309.256C379.011 299.43 383.983 286.617 383.983 273.808C383.983 252.675 367.236 223.99 333.813 223.99C319.84 223.99 305.74 229.479 295.274 239.724L287.885 247.019L280.493 239.724ZM575.997 247.992C575.997 241.19 573.12 234.435 567.526 229.679L303.529 5.672C299.045 1.891 293.522 0 287.998 0S276.952 1.891 272.467 5.672L8.471 229.679C2.877 234.435 0 241.19 0 247.992C0 264.023 13.694 271.992 24.016 271.992C29.5 271.992 35.016 270.125 39.533 266.305L64.001 245.541V448C64.001 483.346 92.655 512 128.001 512H447.996C483.342 512 511.996 483.346 511.996 448V245.541L536.464 266.305C540.98 270.118 546.495 271.993 551.979 271.993C562.14 271.993 575.997 263.963 575.997 247.992ZM463.996 447.999C463.996 456.799 456.796 463.999 447.996 463.999H128.001C119.201 463.999 112.001 456.799 112.001 447.999V207.991C112.001 207.028 111.563 206.207 111.452 205.274L287.998 55.455L463.996 204.809V447.999Z " })
  }
));
HomeHeartRegular.displayName = "HomeHeartRegular";
var HomeHeart_default = HomeHeartRegular;
