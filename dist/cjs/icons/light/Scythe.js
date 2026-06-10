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
var Scythe_exports = {};
__export(Scythe_exports, {
  default: () => Scythe_default
});
module.exports = __toCommonJS(Scythe_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ScytheLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M639.692 19.125L543.692 499.125C542.177 506.75 535.489 512 528.02 512C526.989 512 525.927 511.906 524.864 511.688C516.208 509.969 510.583 501.531 512.317 492.875L543.694 336H400.001C391.157 336 384.001 328.844 384.001 320S391.157 304 400.001 304H550.093L604.489 32.031C557.817 32.031 337.411 32 337.411 32C222.208 32 113.268 86.531 46.284 176H512.005C520.849 176 528.005 183.156 528.005 192S520.849 208 512.005 208H16.003C10.19 208 4.847 204.844 2.018 199.781C-0.81 194.688 -0.653 188.5 2.409 183.563C72.722 70.344 201.099 0 337.411 0C337.411 0 588.52 0.062 623.989 0H624.005C628.802 0 633.333 2.156 636.364 5.844C639.411 9.562 640.63 14.438 639.692 19.125Z" })
  }
));
ScytheLight.displayName = "ScytheLight";
var Scythe_default = ScytheLight;
