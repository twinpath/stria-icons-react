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
var WeightScale_exports = {};
__export(WeightScale_exports, {
  default: () => WeightScale_default
});
module.exports = __toCommonJS(WeightScale_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const WeightScaleThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 320C344.365 320 416 248.365 416 160S344.365 0 256 0S96 71.635 96 160S167.635 320 256 320ZM256 16C335.402 16 400 80.598 400 160S335.402 304 256 304S112 239.402 112 160S176.598 16 256 16ZM440 64H424C419.594 64 416 67.594 416 72S419.594 80 424 80H440C470.875 80 496 105.125 496 136V440C496 470.875 470.875 496 440 496H72C41.125 496 16 470.875 16 440V136C16 105.125 41.125 80 72 80H88C92.406 80 96 76.406 96 72S92.406 64 88 64H72C32.312 64 0 96.312 0 136V440C0 479.688 32.312 512 72 512H440C479.688 512 512 479.688 512 440V136C512 96.312 479.688 64 440 64ZM256 264C278.062 264 296 246.062 296 224C296 210.906 289.268 199.818 279.518 192.518L319.25 107.375C321.125 103.375 319.375 98.625 315.375 96.75C311.406 94.969 306.594 96.625 304.75 100.625L264.992 185.818C262.018 185.111 259.188 184 256 184C233.938 184 216 201.938 216 224S233.938 264 256 264ZM256 200C269.219 200 280 210.781 280 224S269.219 248 256 248S232 237.219 232 224S242.781 200 256 200Z" })
  }
));
WeightScaleThin.displayName = "WeightScaleThin";
var WeightScale_default = WeightScaleThin;
