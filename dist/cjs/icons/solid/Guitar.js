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
var Guitar_exports = {};
__export(Guitar_exports, {
  default: () => Guitar_default
});
module.exports = __toCommonJS(Guitar_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const GuitarSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M502.625 39.003L473 9.376C460.5 -3.125 440.25 -3.125 427.75 9.376L381.501 55.754C377.626 59.63 374.626 64.255 372.876 69.505L360.751 106.008L284.501 182.264C272.376 173.513 259.001 166.513 244.376 163.137C211.001 155.387 177.377 162.262 154.502 185.139C145.252 194.515 138.252 206.016 134.252 218.642C128.252 237.143 111.127 251.269 92.127 253.019C68.502 255.395 46.377 264.52 29.502 281.522C-16.122 327.025 -7.873 409.031 47.627 464.536C103.002 519.915 185.002 528.041 230.501 482.537C247.501 465.661 256.751 443.659 259.001 419.782C260.751 401.031 274.876 383.654 293.501 377.654C306.001 373.779 317.501 366.778 326.876 357.402C349.751 334.526 356.626 301.023 348.876 267.646C345.501 253.019 338.501 239.643 329.751 227.517L406.001 151.262L442.5 139.136C447.625 137.386 452.375 134.385 456.25 130.51L502.625 84.256C515.125 71.756 515.125 51.504 502.625 39.003ZM208.001 352.027C181.502 352.027 160.002 330.525 160.002 304.023C160.002 277.521 181.502 256.02 208.001 256.02S256.001 277.521 256.001 304.023C256.001 330.525 234.501 352.027 208.001 352.027Z" })
  }
));
GuitarSolid.displayName = "GuitarSolid";
var Guitar_default = GuitarSolid;
