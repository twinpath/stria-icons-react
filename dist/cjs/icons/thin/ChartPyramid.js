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
var ChartPyramid_exports = {};
__export(ChartPyramid_exports, {
  default: () => ChartPyramid_default
});
module.exports = __toCommonJS(ChartPyramid_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ChartPyramidThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M506.273 417L292.951 53C284.783 39 270.396 32 255.994 32S227.175 39 218.953 53L5.742 417C-10.592 444.891 9.851 480 42.74 480H469.275C502.052 480 522.605 445 506.273 417ZM440.259 336H71.728L156.076 192H355.867L440.259 336ZM232.75 61.102C237.568 52.898 246.257 48 255.994 48C265.711 48 274.359 52.883 279.146 61.09L346.49 176H165.449L232.75 61.102ZM492.523 450.674C487.73 459.018 479.039 464 469.275 464H42.74C32.955 464 24.256 459.014 19.466 450.662C14.785 442.492 14.814 433.17 19.547 425.086L62.357 352H449.634L492.453 425.061C497.185 433.176 497.213 442.512 492.523 450.674Z" })
  }
));
ChartPyramidThin.displayName = "ChartPyramidThin";
var ChartPyramid_default = ChartPyramidThin;
