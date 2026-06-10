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
const FenceLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M569.6 66.135L524.799 6.402C521.6 2.135 516.799 0 512 0C507.199 0 502.4 2.135 499.199 6.402L454.398 66.135C450.244 71.674 448 78.412 448 85.336V160H352V85.336C352 78.412 349.754 71.674 345.6 66.135L300.799 6.402C297.6 2.135 292.799 0 288 0C283.199 0 278.4 2.135 275.199 6.402L230.398 66.135C226.244 71.674 224 78.412 224 85.336V160H128V85.336C128 78.412 125.756 71.674 121.602 66.135L76.801 6.402C73.6 2.135 68.801 0 64 0C59.201 0 54.4 2.135 51.201 6.402L6.4 66.135C2.246 71.674 0 78.412 0 85.336V480C0 497.672 14.326 512 32 512H96C113.674 512 128 497.672 128 480V384H224V480C224 497.672 238.326 512 256 512H320C337.674 512 352 497.672 352 480V384H448V480C448 497.672 462.326 512 480 512H544C561.674 512 576 497.672 576 480V85.336C576 78.412 573.754 71.674 569.6 66.135ZM96 480H32V85.336L64 42.67L96 85.336V480ZM224 352H128V192H224V352ZM320 480H256L255.998 85.336L287.998 42.668L320 85.336V480ZM448 352H352V192H448V352ZM544 480H480L479.998 85.336L511.998 42.668L544 85.336V480Z" })
  }
));
FenceLight.displayName = "FenceLight";
var Fence_default = FenceLight;
