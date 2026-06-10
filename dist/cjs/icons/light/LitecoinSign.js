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
const LitecoinSignLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 464C384 472.836 376.836 480 368 480H80C71.164 480 64 472.836 64 464V260.484L19.877 271.516C18.58 271.844 17.267 272 15.986 272C8.814 272 2.299 267.156 0.486 259.875C-1.67 251.313 3.549 242.625 12.127 240.484L64 227.516V48C64 39.156 71.156 32 80 32S96 39.156 96 48V219.516L268.123 176.484C276.685 174.266 285.373 179.531 287.514 188.125C289.67 196.687 284.451 205.375 275.873 207.516L96 252.484V448H368C376.836 448 384 455.162 384 464Z" })
  }
));
LitecoinSignLight.displayName = "LitecoinSignLight";
var LitecoinSign_default = LitecoinSignLight;
