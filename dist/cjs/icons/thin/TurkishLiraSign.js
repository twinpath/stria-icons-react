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
var TurkishLiraSign_exports = {};
__export(TurkishLiraSign_exports, {
  default: () => TurkishLiraSign_default
});
module.exports = __toCommonJS(TurkishLiraSign_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TurkishLiraSignThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 384 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 264C384 383.094 287.094 480 168.001 480H136.001C113.939 480 96.001 462.062 96.001 440V243.508L9.845 263.781C9.22 263.938 8.595 264 8.002 264C4.377 264 1.096 261.531 0.221 257.844C-0.811 253.531 1.877 249.219 6.158 248.219L96.001 227.078V147.508L9.845 167.781C9.22 167.938 8.595 168 8.002 168C4.377 168 1.096 165.531 0.221 161.844C-0.811 157.531 1.877 153.219 6.158 152.219L96.001 131.078V40C96.001 35.594 99.595 32 104.001 32C108.408 32 112.001 35.594 112.001 40V127.312L278.157 88.219C282.657 87.156 286.782 89.875 287.782 94.156C288.813 98.469 286.125 102.781 281.844 103.781L112.001 143.742V223.313L278.157 184.219C282.657 183.188 286.782 185.875 287.782 190.156C288.813 194.469 286.125 198.781 281.844 199.781L112.001 239.742V440C112.001 453.219 122.782 464 136.001 464H168.001C278.282 464 368 374.281 368 264C368 259.594 371.594 256 376 256C380.406 256 384 259.594 384 264Z" })
  }
));
TurkishLiraSignThin.displayName = "TurkishLiraSignThin";
var TurkishLiraSign_default = TurkishLiraSignThin;
