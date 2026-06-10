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
const CircleNotchDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 256.003C384 326.696 326.692 384.003 256 384.003S128 326.696 128 256.003S185.308 128.003 256 128.003S384 185.311 384 256.003Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M496 256.003C496 390.863 384.773 499.738 249.053 495.902C126.41 492.441 23.129 392.089 16.375 269.585C9.703 148.546 92.83 45.913 205.143 21.667C214.887 19.566 224 27.538 224 37.503V70.417C224 77.831 218.803 83.941 211.631 85.812C136.012 105.531 80 174.292 80 256.003C80 353.945 160.416 433.456 258.689 431.98C349.396 430.62 426.855 356.269 431.738 265.687C436.369 179.761 378.947 106.292 300.35 85.808C293.187 83.941 288 77.839 288 70.441V37.527C288 27.554 297.133 19.566 306.883 21.675C414.957 45.019 496 140.941 496 256.003Z" })
    ]
  }
));
CircleNotchDuotone.displayName = "CircleNotchDuotone";
var CircleNotch_default = CircleNotchDuotone;
