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
var EarListen_exports = {};
__export(EarListen_exports, {
  default: () => EarListen_default
});
module.exports = __toCommonJS(EarListen_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const EarListenLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M240 64.009C141.312 64.009 64 141.32 64 240.006C64 248.849 71.156 256.005 80 256.005S96 248.849 96 240.006C96 159.257 159.25 96.009 240 96.009C319.406 96.009 384 162.148 384 243.427C384 292.63 366.203 334.988 329.609 372.894L325.797 376.847L325.219 382.3C319.453 436.173 274.047 480.001 224 480.001C215.156 480.001 208 487.157 208 496S215.156 512 224 512C288.156 512 346.422 458.314 356.328 391.221C396.469 348.035 416 299.629 416 243.427C416 144.492 337.047 64.009 240 64.009ZM160 240.006C160 195.897 195.891 160.007 240 160.007S320 195.897 320 240.006C320 248.849 327.156 256.005 336 256.005S352 248.849 352 240.006C352 178.257 301.75 128.008 240 128.008S128 178.257 128 240.006C128 248.849 135.156 256.005 144 256.005S160 248.849 160 240.006ZM32 456.001C18.746 456.001 8 466.747 8 480.001C8 493.254 18.746 504 32 504C45.256 504 56 493.254 56 480.001C56 466.747 45.256 456.001 32 456.001ZM160 328.004C146.746 328.004 136 338.75 136 352.003S146.746 376.003 160 376.003C173.256 376.003 184 365.257 184 352.003S173.256 328.004 160 328.004ZM75.312 372.69C69.062 366.44 58.937 366.44 52.688 372.69S46.438 389.065 52.688 395.315L116.688 459.314C119.812 462.439 123.906 464.001 128 464.001S136.188 462.439 139.312 459.314C145.562 453.064 145.562 442.939 139.312 436.689L75.312 372.69ZM357.062 0.839C348.594 -1.989 339.609 2.573 336.828 10.948C334.031 19.338 338.562 28.401 346.938 31.182C426.531 57.728 480 131.914 480 215.803V224.006C480 232.849 487.156 240.006 496 240.006S512 232.849 512 224.006V215.803C512 118.117 449.734 31.729 357.062 0.839Z" })
  }
));
EarListenLight.displayName = "EarListenLight";
var EarListen_default = EarListenLight;
