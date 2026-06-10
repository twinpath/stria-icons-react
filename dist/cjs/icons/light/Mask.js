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
const MaskLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M288 64C39.52 64 0 182.096 0 273.455C0 379.492 78.799 448 176 448C203.328 448 227.207 441.484 242.107 411.205L262.033 370.709C268.299 358.576 278.1 352.447 288 352.076C297.9 352.447 307.701 358.576 313.967 370.709L333.893 411.205C348.795 441.484 372.674 448 400 448C497.201 448 576 379.492 576 273.455C576 182.096 536.48 64 288 64ZM400 416C376.121 416 368.914 409.896 362.605 397.078L342.4 356.025C331.211 334.359 311.322 320.928 289.199 320.098L288 320.055L286.801 320.098C264.678 320.928 244.791 334.359 233.32 356.582L213.396 397.076C207.086 409.898 199.881 416 176 416C91.215 416 32 357.383 32 273.455C32 197.277 58.537 96 288 96S544 197.277 544 273.455C544 357.383 484.785 416 400 416ZM160 192C124.654 192 96 220.654 96 256S124.654 320 160 320C195.348 320 224 291.346 224 256S195.348 192 160 192ZM160 288C142.355 288 128 273.645 128 256S142.355 224 160 224S192 238.355 192 256S177.645 288 160 288ZM416 192C380.654 192 352 220.654 352 256S380.654 320 416 320C451.348 320 480 291.346 480 256S451.348 192 416 192ZM416 288C398.355 288 384 273.645 384 256S398.355 224 416 224S448 238.355 448 256S433.645 288 416 288Z" })
  }
));
MaskLight.displayName = "MaskLight";
var Mask_default = MaskLight;
