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
var MillSign_exports = {};
__export(MillSign_exports, {
  default: () => MillSign_default
});
module.exports = __toCommonJS(MillSign_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MillSignRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 203.985V423.996C384 437.246 373.25 447.997 360 447.997S336 437.246 336 423.996V203.985C336 170.89 309.094 143.982 276 143.982C269.752 143.982 263.844 145.209 258.176 146.988L216 258.902V423.996C216 437.246 205.25 447.997 192 447.997S168 437.246 168 423.996V386.267L126.469 496.468C122.844 506.093 113.688 512 104 512C101.188 512 98.312 511.5 95.531 510.469C83.125 505.781 76.875 491.937 81.531 479.53L168 250.089V203.985C168 170.89 141.094 143.982 108 143.982S48 170.89 48 203.985V423.996C48 437.246 37.25 447.997 24 447.997S0 437.246 0 423.996V119.981C0 106.73 10.75 95.98 24 95.98C35.48 95.98 44.631 104.217 46.992 114.992C64.371 103.041 85.357 95.98 108 95.98C142.105 95.98 172.195 112.174 192 136.931C199.861 127.104 209.232 118.67 220.012 112.078L256.406 15.507C261.094 3.069 275.031 -3.056 287.344 1.506C299.75 6.194 306 20.039 301.344 32.445L277.348 96.117C336.275 96.861 384 144.881 384 203.985Z" })
  }
));
MillSignRegular.displayName = "MillSignRegular";
var MillSign_default = MillSignRegular;
