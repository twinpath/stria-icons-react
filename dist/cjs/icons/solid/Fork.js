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
var Fork_exports = {};
__export(Fork_exports, {
  default: () => Fork_default
});
module.exports = __toCommonJS(Fork_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ForkSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M509.625 126.009L448.328 234.157C427.992 265.532 395.033 285.794 357.818 289.736C336.537 291.978 315.734 288.142 296.664 279.985L82.973 503.751C78.059 508.908 71.272 511.9 64.122 511.998C57.018 512.095 50.135 509.298 45.1 504.263L7.739 466.9C2.704 461.869 -0.095 454.982 0.002 447.88C0.1 440.728 3.092 433.943 8.249 429.029L232.031 215.353C223.877 196.282 220.043 175.481 222.283 154.204C226.225 116.985 246.486 84.024 278.764 63.18L386.01 2.395C393.672 -1.96 403.402 -0.355 408.703 7.04C414.055 14.048 413.373 23.923 407.146 30.149L295.063 142.235L308.707 155.88L433.369 53.888C440.373 48.149 450.566 48.657 456.963 55.055C463.359 61.454 463.871 71.645 458.131 78.649L356.139 203.314L369.785 216.958L481.871 104.872C488.097 98.645 497.972 97.962 504.978 103.313C512.3 108.544 513.978 118.345 509.625 126.009Z" })
  }
));
ForkSolid.displayName = "ForkSolid";
var Fork_default = ForkSolid;
