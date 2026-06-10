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
var ChartPie_exports = {};
__export(ChartPie_exports, {
  default: () => ChartPie_default
});
module.exports = __toCommonJS(ChartPie_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ChartPieLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M559.731 288L361.124 288C346.869 288 339.73 305.234 349.809 315.313L480.487 446C485.088 450.602 494.977 453.863 502.735 446.75C541.348 410.259 567.968 361.149 575.847 305.914C577.203 296.41 569.332 288 559.731 288ZM491.861 412.125L399.743 320H540.608C532.483 354.125 515.609 386 491.861 412.125ZM256.002 288V50.75C256.002 41.875 248.878 34.5 240.253 34.5C239.629 34.5 238.879 34.5 238.129 34.625C119.012 51.5 27.893 155.625 32.143 280.375C36.517 407.5 145.135 512 272.126 512C273.126 512 274.001 512 275.001 512C325.498 511.375 371.994 495.125 410.242 468C418.241 462.375 418.741 450.75 411.867 443.875L256.002 288ZM274.626 480C158.856 480 67.777 384.826 64.141 279.25C60.766 179.125 128.386 92.25 224.005 69.875V287.995C224.005 296.482 227.376 304.621 233.377 310.623L375.244 452.5C344.621 470.125 310.249 479.5 274.626 480ZM543.973 223.154C535.682 103.699 440.207 8.248 320.748 0C310.137 0 303.999 8.192 303.999 16.25V224C303.999 232.837 311.163 240 319.999 240L527.734 240C536.905 240 544.608 232.303 543.973 223.154ZM335.997 208V33.875C425.241 47.75 496.236 118.75 510.11 208H335.997Z" })
  }
));
ChartPieLight.displayName = "ChartPieLight";
var ChartPie_default = ChartPieLight;
