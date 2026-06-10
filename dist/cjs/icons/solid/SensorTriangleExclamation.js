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
var SensorTriangleExclamation_exports = {};
__export(SensorTriangleExclamation_exports, {
  default: () => SensorTriangleExclamation_default
});
module.exports = __toCommonJS(SensorTriangleExclamation_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SensorTriangleExclamationSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M633.107 403.375L492.232 159.25C472.607 125.125 423.357 125.125 403.732 159.25L262.857 403.375C243.232 437.375 267.857 480 307.107 480H588.857C628.107 480 652.732 437.375 633.107 403.375ZM447.982 432C434.732 432 423.982 421.25 423.982 408S434.732 384 447.982 384S471.982 394.75 471.982 408S461.232 432 447.982 432ZM472 336C472 349.25 461.25 360 448 360S424 349.25 424 336V256C424 242.75 434.75 232 448 232S472 242.75 472 256V336ZM235.244 387.375L375.988 143.25C390.738 117.375 418.238 101.5 447.986 101.625V96C447.986 60.625 419.363 32 383.988 32H63.998C28.625 32 0 60.625 0 96V416C0 451.375 28.625 480 63.998 480H242.492C239.992 476.875 237.244 474 235.244 470.5C220.244 444.75 220.119 413 235.244 387.375ZM95.998 272C95.998 280.875 88.873 288 79.998 288S63.998 280.875 63.998 272V112C63.998 103.125 71.123 96 79.998 96S95.998 103.125 95.998 112V272ZM159.996 272C159.996 280.875 152.871 288 143.996 288S127.996 280.875 127.996 272V112C127.996 103.125 135.121 96 143.996 96S159.996 103.125 159.996 112V272ZM207.994 288C199.119 288 191.994 280.875 191.994 272V112C191.994 103.125 199.119 96 207.994 96S223.994 103.125 223.994 112V272C223.994 280.875 216.869 288 207.994 288Z" })
  }
));
SensorTriangleExclamationSolid.displayName = "SensorTriangleExclamationSolid";
var SensorTriangleExclamation_default = SensorTriangleExclamationSolid;
