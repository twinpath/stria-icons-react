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
var W_exports = {};
__export(W_exports, {
  default: () => W_default
});
module.exports = __toCommonJS(W_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const WSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M399.995 480C399.667 480 399.354 480 399.011 480C378.48 479.562 360.481 466.126 354.263 446.565L288 238.329L221.737 446.565C215.519 466.126 197.52 479.562 176.989 480C155.772 480.031 137.913 467.688 130.898 448.408L2.904 96.432C-6.158 71.528 6.7 43.967 31.605 34.905C56.479 25.843 84.056 38.686 93.118 63.622L172.974 283.232L242.268 65.466C248.596 45.561 267.095 32.03 288 32.03S327.404 45.561 333.732 65.466L403.026 283.232L482.882 63.622C491.944 38.686 519.427 25.843 544.395 34.905C569.3 43.967 582.158 71.528 573.096 96.432L445.102 448.408C438.196 467.407 420.15 480 399.995 480Z" })
  }
));
WSolid.displayName = "WSolid";
var W_default = WSolid;
