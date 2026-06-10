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
var FaceAngry_exports = {};
__export(FaceAngry_exports, {
  default: () => FaceAngry_default
});
module.exports = __toCommonJS(FaceAngry_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FaceAngryLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M200 240C200 236.188 198.92 232.711 197.338 229.508C202.873 231.168 204.797 232 208 232C214.875 232 221.25 227.531 223.312 220.594C225.875 212.141 221.062 203.219 212.594 200.672L132.594 176.672C124.188 174.234 115.219 178.938 112.688 187.406C110.125 195.859 114.938 204.781 123.406 207.328L164.178 219.559C157.029 223.715 152 231.137 152 240C152 253.254 162.746 264 176 264S200 253.254 200 240ZM256 336C224.758 336 195.453 349.75 175.352 373.75C169.66 380.625 170.629 390.75 177.41 396.25C184.191 401.875 194.242 401.125 199.934 394.25C227.785 360.875 284.094 360.875 311.945 394.25C317.273 400.75 327.445 402.25 334.469 396.25C341.25 390.625 342.219 380.5 336.527 373.75C316.547 349.75 287.242 336 256 336ZM256 16C123.461 16 16 123.42 16 256S123.461 496 256 496S496 388.58 496 256S388.539 16 256 16ZM256 464C141.309 464 48 370.691 48 256S141.309 48 256 48S464 141.309 464 256S370.691 464 256 464ZM379.406 176.672L299.406 200.672C290.938 203.219 286.125 212.141 288.688 220.594C290.75 227.531 297.125 232 304 232C307.23 232 309.256 231.129 314.662 229.508C313.08 232.711 312 236.188 312 240C312 253.254 322.746 264 336 264S360 253.254 360 240C360 231.137 354.971 223.715 347.822 219.559L388.594 207.328C397.062 204.781 401.875 195.859 399.312 187.406C396.781 178.922 387.844 174.219 379.406 176.672Z" })
  }
));
FaceAngryLight.displayName = "FaceAngryLight";
var FaceAngry_default = FaceAngryLight;
