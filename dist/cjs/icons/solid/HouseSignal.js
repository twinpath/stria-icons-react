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
var HouseSignal_exports = {};
__export(HouseSignal_exports, {
  default: () => HouseSignal_default
});
module.exports = __toCommonJS(HouseSignal_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HouseSignalSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M0 320V383.875C70.748 384 128 441.25 128.125 512H192C192 405.998 106 320 0 320ZM0 416V512H96C96 458.998 52.998 416 0 416ZM640 223.994C640 215.237 636.403 206.67 629.707 200.492L575.996 150.912V47.986C575.996 39.148 568.832 31.986 559.996 31.986H527.996C519.16 31.986 511.998 39.148 511.998 47.984V91.836L421.703 8.486C415.576 2.83 407.791 0 400.004 0C400.001 0 399.999 0 399.996 0C392.211 0 384.424 2.828 378.297 8.486L170.293 200.492C163.598 206.67 160 215.236 160 223.993C160 232.306 162.801 236.559 163.088 237.189C172.721 242.928 181.998 249.148 190.947 255.834C191.309 255.846 191.635 255.994 191.998 255.994L194.488 258.484C245.967 298.07 285.277 352.695 305.232 416H527.996C554.395 416 575.996 394.398 575.996 367.998V255.994H608.002C625.775 255.994 640 241.556 640 223.994ZM447.996 271.994C447.996 280.869 440.871 287.996 431.996 287.996H367.996C359.121 287.996 351.996 280.869 351.996 271.994V207.992C351.996 199.117 359.121 191.992 367.996 191.992H431.996C440.871 191.992 447.996 199.117 447.996 207.992V271.994ZM0 224V287.875C123.75 287.875 224.125 388.25 224.125 512H288C288 353 159 224 0 224Z " })
  }
));
HouseSignalSolid.displayName = "HouseSignalSolid";
var HouseSignal_default = HouseSignalSolid;
