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
var FaceRollingEyes_exports = {};
__export(FaceRollingEyes_exports, {
  default: () => FaceRollingEyes_default
});
module.exports = __toCommonJS(FaceRollingEyes_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FaceRollingEyesLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M320.059 368H191.941C183.223 368 175.957 375.25 175.957 384S183.223 400 191.941 400H320.059C328.777 400 336.043 392.75 336.043 384S328.777 368 320.059 368ZM232.023 224C232.023 184.25 199.812 152 159.973 152C120.254 152 88.043 184.25 88.043 224S120.254 296 159.973 296C199.812 296 232.023 263.75 232.023 224ZM159.973 264C137.934 264 120.012 246.125 120.012 224C120.012 210.375 127.277 198.875 137.691 191.75C136.723 194.25 135.996 197 135.996 200C135.996 213.25 146.652 224 159.973 224S183.949 213.25 183.949 200C183.949 197.125 183.344 194.25 182.254 191.75C192.668 198.875 200.055 210.375 200.055 224C200.055 246.125 182.133 264 159.973 264ZM352.027 152C312.188 152 279.977 184.25 279.977 224S312.188 296 352.027 296C391.746 296 423.957 263.75 423.957 224S391.746 152 352.027 152ZM352.027 264C329.867 264 311.945 246.125 311.945 224C311.945 210.375 319.332 198.875 329.746 191.75C328.656 194.25 328.051 197 328.051 200C328.051 213.25 338.707 224 352.027 224S376.004 213.25 376.004 200C376.004 197.125 375.277 194.25 374.309 191.75C384.723 198.875 391.988 210.375 391.988 224C391.988 246.125 374.066 264 352.027 264ZM256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM256 464C141.309 464 48 370.691 48 256S141.309 48 256 48S464 141.309 464 256S370.691 464 256 464Z" })
  }
));
FaceRollingEyesLight.displayName = "FaceRollingEyesLight";
var FaceRollingEyes_default = FaceRollingEyesLight;
