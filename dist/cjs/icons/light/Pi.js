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
var Pi_exports = {};
__export(Pi_exports, {
  default: () => Pi_default
});
module.exports = __toCommonJS(Pi_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PiLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M441.078 372.469C448.359 377.469 450.188 387.437 445.172 394.719L425.688 422.969C414.844 438.656 397 448 377.969 448C346 448 320 422 320 390.031V96H160V269C160 305.125 150.531 340.812 132.594 372.219L93.891 439.938C90.938 445.094 85.547 448 79.984 448C77.297 448 74.562 447.312 72.062 445.906C64.391 441.5 61.719 431.719 66.109 424.062L104.813 356.344C119.984 329.781 128 299.562 128 269V96H16C7.164 96 0 88.836 0 80C0 71.162 7.164 64 16 64H432C440.836 64 448 71.162 448 80C448 88.836 440.836 96 432 96H352V390.031C352 404.344 363.656 416 377.969 416C386.5 416 394.5 411.812 399.359 404.781L418.828 376.531C423.859 369.25 433.812 367.375 441.078 372.469Z" })
  }
));
PiLight.displayName = "PiLight";
var Pi_default = PiLight;
