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
var Fence_exports = {};
__export(Fence_exports, {
  default: () => Fence_default
});
module.exports = __toCommonJS(Fence_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FenceDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M128 224H224V160H128V224ZM128 416H224V352H128V416ZM352 416H448V352H352V416ZM352 160V224H448V160H352Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M352 78.962C352 72.038 349.754 65.3 345.6 59.76L300.799 0.028C294.4 -8.507 281.6 -8.507 275.199 0.028L230.398 59.76C226.244 65.3 224 72.038 224 78.962V473.628C224 491.3 238.326 505.628 256 505.628H320C337.674 505.628 352 491.3 352 473.628V78.962ZM128 78.962C128 72.038 125.756 65.3 121.602 59.76L76.801 0.028C70.4 -8.507 57.6 -8.507 51.201 0.028L6.4 59.76C2.246 65.3 0 72.038 0 78.962V473.628C0 491.3 14.326 505.628 32 505.628H96C113.674 505.628 128 491.3 128 473.628V78.962ZM569.6 59.76L524.799 0.028C518.4 -8.507 505.6 -8.507 499.199 0.028L454.398 59.76C450.244 65.3 448 72.038 448 78.962V473.628C448 491.3 462.326 505.628 480 505.628H544C561.674 505.628 576 491.3 576 473.628V78.962C576 72.038 573.754 65.3 569.6 59.76Z" })
    ]
  }
));
FenceDuotone.displayName = "FenceDuotone";
var Fence_default = FenceDuotone;
