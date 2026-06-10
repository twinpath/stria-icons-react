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
var CircleThreeQuarters_exports = {};
__export(CircleThreeQuarters_exports, {
  default: () => CircleThreeQuarters_default
});
module.exports = __toCommonJS(CircleThreeQuarters_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CircleThreeQuartersLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M479.214 256H255.999V32.785C255.999 24 248.87 16.545 240.22 16.545C239.872 16.545 239.525 16.557 239.173 16.58C99.009 26.287 -8.03 156.348 20.685 304.148C38.864 397.727 114.273 473.135 207.851 491.314C224.161 494.484 240.259 496 255.999 496C382.894 496 486.782 397.523 495.419 272.824C496.05 263.709 488.351 256 479.214 256ZM255.999 464C242.093 464 227.946 462.621 213.954 459.902C132.89 444.152 67.845 379.107 52.097 298.045C40.294 237.289 54.079 177.412 90.915 129.445C123.681 86.777 171.48 58.598 223.999 50.451V256C223.999 273.672 238.325 288 255.999 288H461.552C446.075 388.002 358.956 464 255.999 464Z" })
  }
));
CircleThreeQuartersLight.displayName = "CircleThreeQuartersLight";
var CircleThreeQuarters_default = CircleThreeQuartersLight;
