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
const FenceSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M352 85.334C352 78.41 349.754 71.672 345.6 66.133L300.799 6.4C294.4 -2.135 281.6 -2.135 275.199 6.4L230.398 66.133C226.244 71.672 224 78.41 224 85.334V480C224 497.672 238.326 512 256 512H320C337.674 512 352 497.672 352 480V416H416V352H352V224H416V160H352V85.334ZM128 85.334C128 78.41 125.756 71.672 121.602 66.133L76.801 6.4C70.4 -2.135 57.6 -2.135 51.201 6.4L6.4 66.133C2.246 71.672 0 78.41 0 85.334V480C0 497.672 14.326 512 32 512H96C113.674 512 128 497.672 128 480V416H192V352H128V224H192V160H128V85.334ZM569.6 66.133L524.799 6.4C518.4 -2.135 505.6 -2.135 499.199 6.4L454.398 66.133C450.244 71.672 448 78.41 448 85.334V480C448 497.672 462.326 512 480 512H544C561.674 512 576 497.672 576 480V85.334C576 78.41 573.754 71.672 569.6 66.133Z" })
  }
));
FenceSolid.displayName = "FenceSolid";
var Fence_default = FenceSolid;
