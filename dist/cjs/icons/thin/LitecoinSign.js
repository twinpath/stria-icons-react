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
var LitecoinSign_exports = {};
__export(LitecoinSign_exports, {
  default: () => LitecoinSign_default
});
module.exports = __toCommonJS(LitecoinSign_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const LitecoinSignThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384.002 472C384.002 476.418 380.42 480 376.002 480H136.002C113.91 480 96.002 462.092 96.002 440V243.508L9.846 263.781C9.221 263.938 8.596 264 8.002 264C4.377 264 1.096 261.531 0.221 257.844C-0.811 253.531 1.877 249.219 6.158 248.219L96.002 227.078V40C96.002 35.594 99.596 32 104.002 32S112.002 35.594 112.002 40V223.312L278.156 184.219C282.656 183.187 286.781 185.875 287.781 190.156C288.812 194.469 286.125 198.781 281.844 199.781L112.002 239.742V440C112.002 453.199 122.803 464 136.002 464H376.002C380.42 464 384.002 467.582 384.002 472Z" })
  }
));
LitecoinSignThin.displayName = "LitecoinSignThin";
var LitecoinSign_default = LitecoinSignThin;
