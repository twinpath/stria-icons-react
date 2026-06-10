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
var CarRear_exports = {};
__export(CarRear_exports, {
  default: () => CarRear_default
});
module.exports = __toCommonJS(CarRear_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CarRearLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M461.137 203.762L428.625 90C418.875 55.844 387.25 32 351.719 32H160.281C124.75 32 93.125 55.844 83.375 90L50.863 203.762C20.729 219.955 0 251.393 0 288V352C0 375.629 12.951 396.037 32 407.123V464C32 472.836 39.164 480 48 480C56.838 480 64 472.836 64 464V416H448V464C448 472.836 455.164 480 464 480C472.838 480 480 472.836 480 464V407.123C499.049 396.037 512 375.629 512 352V288C512 251.393 491.271 219.955 461.137 203.762ZM114.125 98.812C120 78.312 138.969 64 160.281 64H351.719C373.031 64 392 78.312 397.875 98.812L424.76 192.883C421.83 192.613 419 192 416 192H96C93 192 90.17 192.613 87.24 192.883L114.125 98.812ZM320 384H192V352H320V384ZM432 320H480V352C480 369.645 465.645 384 448 384H352V352C352 334.326 337.674 320 320 320H192C174.326 320 160 334.326 160 352V384H64C46.355 384 32 369.645 32 352V320H80C88.836 320 96 312.836 96 304C96 295.162 88.836 288 80 288H32C32 252.709 60.711 224 96 224H416C451.291 224 480 252.709 480 288H432C423.164 288 416 295.162 416 304C416 312.836 423.164 320 432 320Z" })
  }
));
CarRearLight.displayName = "CarRearLight";
var CarRear_default = CarRearLight;
