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
var CircleNotch_exports = {};
__export(CircleNotch_exports, {
  default: () => CircleNotch_default
});
module.exports = __toCommonJS(CircleNotch_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CircleNotchSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M496 256C496 390.859 384.773 499.734 249.053 495.898C126.41 492.438 23.129 392.086 16.375 269.582C9.703 148.543 92.83 45.91 205.143 21.664C214.887 19.562 224 27.535 224 37.5V70.414C224 77.828 218.803 83.938 211.631 85.809C136.012 105.527 80 174.289 80 256C80 353.941 160.416 433.453 258.689 431.977C349.396 430.617 426.855 356.266 431.738 265.684C436.369 179.758 378.947 106.289 300.35 85.805C293.187 83.938 288 77.836 288 70.438V37.523C288 27.551 297.133 19.562 306.883 21.672C414.957 45.016 496 140.938 496 256Z" })
  }
));
CircleNotchSolid.displayName = "CircleNotchSolid";
var CircleNotch_default = CircleNotchSolid;
