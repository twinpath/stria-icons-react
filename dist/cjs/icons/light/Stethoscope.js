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
var Stethoscope_exports = {};
__export(Stethoscope_exports, {
  default: () => Stethoscope_default
});
module.exports = __toCommonJS(Stethoscope_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const StethoscopeLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M544 192.005C544 156.657 515.346 128.005 480 128.005S416 156.657 416 192.005C416 221.791 436.443 246.603 464 253.74V352.002C464 422.595 406.578 480 336 480S208 422.595 208 352.002V350.385C288.625 342.223 352 274.744 352 192.005V48.007C352 41.944 348.578 36.413 343.156 33.694L279.156 1.695C271.266 -2.274 261.641 0.976 257.688 8.851C253.734 16.757 256.938 26.351 264.844 30.319L320 57.881V192.005C320 262.597 262.578 320.003 192 320.003S64 262.597 64 192.005V57.881L119.156 30.319C127.062 26.351 130.266 16.757 126.312 8.851C122.359 0.976 112.734 -2.274 104.844 1.695L40.844 33.694C35.422 36.413 32 41.944 32 48.007V192.005C32 274.744 95.375 342.223 176 350.385V352.002C176 440.22 247.781 512 336 512S496 440.22 496 352.002V253.74C523.557 246.603 544 221.791 544 192.005ZM480 224.004C462.326 224.004 448 209.676 448 192.005C448 174.331 462.326 160.005 480 160.005S512 174.331 512 192.005C512 209.676 497.674 224.004 480 224.004Z" })
  }
));
StethoscopeLight.displayName = "StethoscopeLight";
var Stethoscope_default = StethoscopeLight;
