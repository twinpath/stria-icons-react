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
var ArrowUpLeftFromCircle_exports = {};
__export(ArrowUpLeftFromCircle_exports, {
  default: () => ArrowUpLeftFromCircle_default
});
module.exports = __toCommonJS(ArrowUpLeftFromCircle_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowUpLeftFromCircleLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M320 336C324.094 336 328.188 334.438 331.312 331.312C337.562 325.062 337.562 314.937 331.312 308.688L54.625 32H176C184.844 32 192 24.844 192 16S184.844 0 176 0H16C7.156 0 0 7.156 0 16V176C0 184.844 7.156 192 16 192S32 184.844 32 176V54.625L308.688 331.312C311.812 334.438 315.906 336 320 336ZM288 64C264.5 64 241.312 67.625 219.094 74.812C210.688 77.5 206.062 86.531 208.781 94.938S220.531 108 228.906 105.25C247.969 99.125 267.844 96 288 96C393.875 96 480 182.125 480 288S393.875 480 288 480S96 393.875 96 288C96 267.844 99.125 247.969 105.25 228.906C107.969 220.5 103.344 211.469 94.938 208.781C86.625 206.094 77.531 210.688 74.812 219.094C67.625 241.312 64 264.5 64 288C64 411.5 164.5 512 288 512S512 411.5 512 288S411.5 64 288 64Z" })
  }
));
ArrowUpLeftFromCircleLight.displayName = "ArrowUpLeftFromCircleLight";
var ArrowUpLeftFromCircle_default = ArrowUpLeftFromCircleLight;
