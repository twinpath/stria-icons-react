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
var BezierCurve_exports = {};
__export(BezierCurve_exports, {
  default: () => BezierCurve_default
});
module.exports = __toCommonJS(BezierCurve_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BezierCurveSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M368 32H272C254.375 32 240 46.375 240 64V160C240 177.625 254.375 192 272 192H368C385.625 192 400 177.625 400 160V64C400 46.375 385.625 32 368 32ZM208 88H123.25C113.75 64.5 90.875 48 64 48C28.625 48 0 76.625 0 112S28.625 176 64 176C90.875 176 113.75 159.5 123.25 136H203C147.625 168.5 107.125 223.375 93.5 288H142.875C154.125 246.375 179.625 210.75 213.875 186.5C210.125 178.375 208 169.5 208 160V88ZM160 320H64C46.375 320 32 334.375 32 352V448C32 465.625 46.375 480 64 480H160C177.625 480 192 465.625 192 448V352C192 334.375 177.625 320 160 320ZM576 48C549.125 48 526.25 64.5 516.75 88H432V160C432 169.5 429.75 178.375 426.125 186.5C460.375 210.75 485.875 246.375 497.125 288H546.5C532.875 223.375 492.375 168.5 437 136H516.75C526.25 159.5 549.125 176 576 176C611.375 176 640 147.375 640 112S611.375 48 576 48ZM576 320H480C462.375 320 448 334.375 448 352V448C448 465.625 462.375 480 480 480H576C593.625 480 608 465.625 608 448V352C608 334.375 593.625 320 576 320Z" })
  }
));
BezierCurveSolid.displayName = "BezierCurveSolid";
var BezierCurve_default = BezierCurveSolid;
