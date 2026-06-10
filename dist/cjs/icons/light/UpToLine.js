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
var UpToLine_exports = {};
__export(UpToLine_exports, {
  default: () => UpToLine_default
});
module.exports = __toCommonJS(UpToLine_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const UpToLineLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M219.344 123.5C212.469 116.187 202.5 112 192 112S171.531 116.187 164.5 123.656L42.281 256.547C31.938 267.469 29.125 283.453 35.062 297.312C41.062 311.094 54.594 320 69.594 320H128V435.172C128 459.89 148.094 480 172.812 480H211.188C235.906 480 256 459.89 256 435.172V320H314.406C329.406 320 342.938 311.094 348.938 297.25C354.875 283.453 352.062 267.469 341.875 256.703L219.344 123.5ZM319.562 284.562C318.656 286.656 316.625 288 314.406 288H224V435.172C224 442.25 218.25 448 211.188 448H172.812C165.75 448 160 442.25 160 435.172V288H69.594C67.375 288 65.344 286.656 64.438 284.625C63.562 282.547 64 280.156 65.688 278.359L187.906 145.469C189.656 143.656 194.5 143.812 195.938 145.312L318.469 278.515C320 280.156 320.438 282.547 319.562 284.562ZM16 64H368C376.844 64 384 56.844 384 48S376.844 32 368 32H16C7.156 32 0 39.156 0 48S7.156 64 16 64Z" })
  }
));
UpToLineLight.displayName = "UpToLineLight";
var UpToLine_default = UpToLineLight;
