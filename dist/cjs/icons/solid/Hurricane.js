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
var Hurricane_exports = {};
__export(Hurricane_exports, {
  default: () => Hurricane_default
});
module.exports = __toCommonJS(Hurricane_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HurricaneSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M224 223.99C206.25 223.99 192 238.24 192 255.99S206.25 287.99 224 287.99S256 273.74 256 255.99S241.75 223.99 224 223.99ZM208 95.994L232.5 21.243C236.25 9.993 226.875 -1.261 215.125 0.114C112 12.368 32 101.619 32 208.002C32 322.877 125.125 416.01 240 416.01L215.5 490.76C211.75 502.011 221.125 513.261 232.875 511.886C336 499.636 416 410.385 416 304.002C416 189.123 322.875 95.994 208 95.994ZM224 351.991C171 351.991 128 308.99 128 255.99S171 159.99 224 159.99S320 202.99 320 255.99S277 351.991 224 351.991Z" })
  }
));
HurricaneSolid.displayName = "HurricaneSolid";
var Hurricane_default = HurricaneSolid;
