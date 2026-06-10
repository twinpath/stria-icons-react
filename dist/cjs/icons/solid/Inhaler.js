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
var Inhaler_exports = {};
__export(Inhaler_exports, {
  default: () => Inhaler_default
});
module.exports = __toCommonJS(Inhaler_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const InhalerSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M32 320C14.375 320 0 334.374 0 351.999S14.375 383.999 32 383.999S64 369.624 64 351.999S49.625 320 32 320ZM32 415.999C14.375 415.999 0 430.374 0 447.999S14.375 479.998 32 479.998S64 465.624 64 447.999S49.625 415.999 32 415.999ZM128 367.999C110.375 367.999 96 382.374 96 399.999S110.375 431.999 128 431.999S160 417.624 160 399.999S145.625 367.999 128 367.999ZM32 224C14.375 224 0 238.375 0 256S14.375 288 32 288S64 273.625 64 256S49.625 224 32 224ZM128 272C110.375 272 96 286.375 96 304S110.375 335.999 128 335.999S160 321.625 160 304S145.625 272 128 272ZM327.578 224H224C206.326 224 192 238.328 192 256V447.991C192 465.592 206.4 479.991 224 479.991H470.35C483.146 479.991 494.303 471.459 497.475 459.1L540.262 296.047L356.785 112.571L327.578 224ZM555.223 65.243L434.693 32.978C419.709 28.931 404.396 37.791 400.35 52.775L388.092 98.618L535.746 246.273L575.02 99.587C579.066 84.603 570.207 69.29 555.223 65.243Z" })
  }
));
InhalerSolid.displayName = "InhalerSolid";
var Inhaler_default = InhalerSolid;
