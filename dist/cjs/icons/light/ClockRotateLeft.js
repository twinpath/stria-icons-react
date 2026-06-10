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
var ClockRotateLeft_exports = {};
__export(ClockRotateLeft_exports, {
  default: () => ClockRotateLeft_default
});
module.exports = __toCommonJS(ClockRotateLeft_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ClockRotateLeftLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 32C176.529 32 104.359 73.867 64 141.559V48C64 39.156 56.844 32 48 32S32 39.156 32 48V176C32 184.844 39.156 192 48 192H176C184.844 192 192 184.844 192 176S184.844 160 176 160H90.154C124.498 100.727 187.064 64 256 64C361.875 64 448 150.125 448 256S361.875 448 256 448C196.516 448 141.344 421.094 104.656 374.156C99.219 367.156 89.172 365.875 82.188 371.406C75.234 376.844 74 386.906 79.438 393.844C122.234 448.594 186.594 480 256 480C379.516 480 480 379.5 480 256S379.516 32 256 32ZM256 128C247.156 128 240 135.156 240 144V272C240 277.031 242.375 281.781 246.406 284.812L310.406 332.812C313.281 334.969 316.641 336 319.984 336C324.859 336 329.656 333.781 332.797 329.594C338.109 322.531 336.672 312.5 329.594 307.188L272 264V144C272 135.156 264.844 128 256 128Z" })
  }
));
ClockRotateLeftLight.displayName = "ClockRotateLeftLight";
var ClockRotateLeft_default = ClockRotateLeftLight;
