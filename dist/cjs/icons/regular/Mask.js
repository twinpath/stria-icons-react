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
var Mask_exports = {};
__export(Mask_exports, {
  default: () => Mask_default
});
module.exports = __toCommonJS(Mask_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MaskRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M288 64C39.52 64 0 182.096 0 273.455C0 379.492 78.799 448 176 448C203.328 448 227.207 441.484 242.107 411.205L262.033 370.709C268.299 358.576 278.1 352.447 288 352.076C297.9 352.447 307.701 358.576 313.967 370.709L333.893 411.205C348.795 441.484 372.674 448 400 448C497.201 448 576 379.492 576 273.455C576 182.096 536.48 64 288 64ZM400 400C381.877 400 380.438 397.076 376.961 390.014L356.615 348.684C342.744 321.822 317.766 305.158 289.799 304.109L288 304.043L286.201 304.109C258.236 305.158 233.258 321.822 218.965 349.518L199.039 390.012C195.564 397.076 194.125 400 176 400C100.637 400 48 347.963 48 273.455C48 229.297 48 112 288 112S528 229.297 528 273.455C528 347.963 475.365 400 400 400ZM160 192C124.654 192 96 220.654 96 256S124.654 320 160 320C195.348 320 224 291.346 224 256S195.348 192 160 192ZM416 192C380.654 192 352 220.654 352 256S380.654 320 416 320C451.348 320 480 291.346 480 256S451.348 192 416 192Z" })
  }
));
MaskRegular.displayName = "MaskRegular";
var Mask_default = MaskRegular;
