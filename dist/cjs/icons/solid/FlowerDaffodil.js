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
var FlowerDaffodil_exports = {};
__export(FlowerDaffodil_exports, {
  default: () => FlowerDaffodil_default
});
module.exports = __toCommonJS(FlowerDaffodil_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FlowerDaffodilSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M495.912 319.997H448.654C385.645 319.997 328.761 342.247 288.005 377.873V281.247C325.261 297.622 368.892 283.497 389.27 248.246C409.648 212.996 400.397 168.12 367.517 143.995C392.771 125.369 404.773 93.744 398.272 62.993C391.646 32.368 367.642 8.368 337.012 1.742C306.258 -4.758 274.628 7.243 256 32.493C237.372 7.243 205.742 -4.758 174.988 1.742C144.358 8.368 120.354 32.368 113.728 62.993C107.227 93.744 119.229 125.369 144.483 143.995C111.728 168.12 102.352 212.996 122.73 248.246C143.233 283.372 186.739 297.622 223.995 281.247V377.873C183.239 342.247 126.355 319.997 63.346 319.997H16.088C6.962 319.997 -0.914 327.747 0.086 336.872C9.962 434.999 106.352 512 223.87 512H288.13C405.648 512 502.038 434.999 511.914 336.872C512.914 327.747 505.038 319.997 495.912 319.997ZM256 191.995C229.496 191.995 207.993 170.495 207.993 143.995S229.496 95.994 256 95.994S304.007 117.494 304.007 143.995S282.504 191.995 256 191.995Z" })
  }
));
FlowerDaffodilSolid.displayName = "FlowerDaffodilSolid";
var FlowerDaffodil_default = FlowerDaffodilSolid;
