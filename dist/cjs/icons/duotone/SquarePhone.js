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
var SquarePhone_exports = {};
__export(SquarePhone_exports, {
  default: () => SquarePhone_default
});
module.exports = __toCommonJS(SquarePhone_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SquarePhoneDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 32H64C28.654 32 0 60.654 0 96V416C0 451.346 28.654 480 64 480H384C419.348 480 448 451.346 448 416V96C448 60.654 419.348 32 384 32ZM351.602 321.5L339.977 371.891C338.344 379.016 332.076 384 324.74 384C198.615 384 95.996 281.391 95.996 155.248C95.996 147.92 100.98 141.654 108.105 140.029L158.482 128.404C165.826 126.701 173.365 130.514 176.412 137.467L199.678 191.748C202.396 198.139 200.561 205.576 195.186 209.967L168.271 232.016C185.264 266.625 213.412 294.766 248.037 311.766L270.061 284.859C274.404 279.469 281.912 277.609 288.303 280.375L342.547 303.625C349.5 306.625 353.289 314.203 351.602 321.5Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M351.605 321.5L339.98 371.891C338.348 379.016 332.08 384 324.744 384C198.619 384 96 281.39 96 155.247C96 147.919 100.984 141.654 108.109 140.029L158.486 128.404C165.83 126.7 173.369 130.513 176.416 137.466L199.682 191.748C202.4 198.138 200.564 205.576 195.189 209.966L168.275 232.015C185.268 266.625 213.416 294.765 248.041 311.765L270.064 284.859C274.408 279.468 281.916 277.609 288.307 280.375L342.551 303.625C349.504 306.625 353.293 314.203 351.605 321.5Z" })
    ]
  }
));
SquarePhoneDuotone.displayName = "SquarePhoneDuotone";
var SquarePhone_default = SquarePhoneDuotone;
