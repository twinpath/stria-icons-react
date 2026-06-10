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
var RadioTuner_exports = {};
__export(RadioTuner_exports, {
  default: () => RadioTuner_default
});
module.exports = __toCommonJS(RadioTuner_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const RadioTunerLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M191.998 400.002H95.999C87.155 400.002 79.999 407.158 79.999 416.002S87.155 432.001 95.999 432.001H191.998C200.842 432.001 207.998 424.845 207.998 416.002S200.842 400.002 191.998 400.002ZM79.999 368.003H207.998C216.842 368.003 223.998 360.846 223.998 352.003C223.998 343.159 216.842 336.003 207.998 336.003H79.999C71.156 336.003 63.999 343.159 63.999 352.003C63.999 360.846 71.156 368.003 79.999 368.003ZM367.997 448.001C412.121 448.001 447.996 412.127 447.996 368.003S412.121 288.004 367.997 288.004S287.997 323.878 287.997 368.003S323.872 448.001 367.997 448.001ZM367.997 320.003C394.497 320.003 415.996 341.503 415.996 368.003C415.996 394.502 394.497 416.002 367.997 416.002C341.497 416.002 319.997 394.502 319.997 368.003C319.997 341.503 341.497 320.003 367.997 320.003ZM447.996 128.007H198.481L500.871 31.243C509.292 28.555 513.933 19.555 511.23 11.134C508.542 2.728 499.589 -1.944 491.121 0.775L93.517 128.007H63.999C28.625 128.007 0 156.631 0 192.006V448.001C0 483.375 28.625 512 63.999 512H447.996C483.371 512 511.996 483.375 511.996 448.001V192.006C511.996 156.631 483.371 128.007 447.996 128.007ZM479.996 448.001C479.996 465.626 465.621 480.001 447.996 480.001H63.999C46.375 480.001 32 465.626 32 448.001V256.004H479.996V448.001ZM479.996 224.005H32V192.006C32 174.381 46.375 160.006 63.999 160.006H447.996C465.621 160.006 479.996 174.381 479.996 192.006V224.005Z" })
  }
));
RadioTunerLight.displayName = "RadioTunerLight";
var RadioTuner_default = RadioTunerLight;
