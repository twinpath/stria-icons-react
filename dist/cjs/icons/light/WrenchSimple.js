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
var WrenchSimple_exports = {};
__export(WrenchSimple_exports, {
  default: () => WrenchSimple_default
});
module.exports = __toCommonJS(WrenchSimple_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const WrenchSimpleLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 179.395C384 248.555 347.455 311.398 287.963 345.68V496C287.963 504.844 280.805 512 271.957 512S255.951 504.844 255.951 496V336.18C255.951 330.18 259.326 324.68 264.672 321.93C318.537 294.43 351.988 239.805 351.988 179.395C351.988 121.555 321.258 69.617 271.957 41.363V181.301C271.957 186.336 269.58 191.086 265.549 194.117L201.523 242.117C198.699 244.227 195.352 245.266 192 245.281L192 245.281C188.648 245.266 185.301 244.227 182.477 242.117L118.451 194.117C114.42 191.086 112.043 186.336 112.043 181.301V41.363C62.742 69.617 32.012 121.555 32.012 179.395C32.012 239.805 65.463 294.43 119.328 321.93C124.674 324.68 128.049 330.18 128.049 336.18V496C128.049 504.844 120.891 512 112.043 512S96.037 504.844 96.037 496V345.68C36.545 311.398 0 248.555 0 179.395C0 100.18 47.955 30.176 122.203 1.082C127.174 -0.793 132.676 -0.23 137.053 2.77C141.43 5.738 144.057 10.707 144.057 15.988V173.301L192 209.25L239.943 173.301V15.988C239.943 10.707 242.57 5.738 246.947 2.77C251.324 -0.23 256.826 -0.793 261.797 1.082C336.045 30.176 384 100.18 384 179.395Z" })
  }
));
WrenchSimpleLight.displayName = "WrenchSimpleLight";
var WrenchSimple_default = WrenchSimpleLight;
