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
var Mars_exports = {};
__export(Mars_exports, {
  default: () => Mars_default
});
module.exports = __toCommonJS(Mars_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MarsLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M446.77 41.891C445.148 37.973 442.027 34.852 438.109 33.23C436.154 32.422 434.082 32 432 32H304C295.156 32 288 39.156 288 48S295.156 64 304 64H393.375L288.6 168.775C258.08 143.334 218.84 128 176 128C78.797 128 0 206.799 0 304S78.797 480 176 480S352 401.201 352 304C352 261.16 336.664 221.922 311.223 191.402L416 86.625V176C416 184.844 423.156 192 432 192S448 184.844 448 176V48C448 45.918 447.578 43.846 446.77 41.891ZM320 304C320 383.402 255.402 448 176 448S32 383.402 32 304S96.598 160 176 160S320 224.598 320 304Z" })
  }
));
MarsLight.displayName = "MarsLight";
var Mars_default = MarsLight;
