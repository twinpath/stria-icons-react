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
var PlaneDeparture_exports = {};
__export(PlaneDeparture_exports, {
  default: () => PlaneDeparture_default
});
module.exports = __toCommonJS(PlaneDeparture_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PlaneDepartureSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M80.475 341.252C86.85 348.125 95.6 352 104.85 352L235.348 351.75C245.723 351.75 255.848 349.375 264.973 344.625L555.969 197.016C582.719 183.518 606.717 164.145 622.967 138.771C641.342 110.275 643.342 89.652 636.092 75.152C628.842 60.529 611.342 49.781 577.844 47.656C547.969 45.656 518.344 53.529 491.594 67.154L393.096 117.148L174.348 35.031C168.975 31.408 162.1 31.033 156.35 33.908L90.6 67.279C79.975 72.779 77.35 87.027 85.475 95.9L241.598 193.891L138.475 246.26L66.1 209.889C60.975 207.266 55.1 207.266 49.975 209.889L9.852 230.262C-0.523 235.512 -3.273 249.385 4.352 258.26L80.475 341.252ZM608 448H32C14.327 448 0 462.327 0 480V480C0 497.673 14.327 512 32 512H608C625.673 512 640 497.673 640 480V480C640 462.327 625.673 448 608 448Z" })
  }
));
PlaneDepartureSolid.displayName = "PlaneDepartureSolid";
var PlaneDeparture_default = PlaneDepartureSolid;
