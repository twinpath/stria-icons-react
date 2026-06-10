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
var TemperatureArrowUp_exports = {};
__export(TemperatureArrowUp_exports, {
  default: () => TemperatureArrowUp_default
});
module.exports = __toCommonJS(TemperatureArrowUp_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TemperatureArrowUpLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M223.987 79.955C223.987 35.855 188.118 0 144 0S64.014 35.855 64.014 79.955V321.697C20.895 365.674 21.395 436.135 65.139 479.486C108.756 522.838 179.245 522.838 222.862 479.486C266.606 436.135 267.106 365.674 223.987 321.697V79.955ZM219.864 425.141C208.991 457.748 178.37 479.736 144 479.736S79.01 457.748 68.137 425.141S68.512 356.678 96.008 336.064V79.955C96.008 53.471 117.504 31.982 144 31.982S191.993 53.471 191.993 79.955V336.064C219.489 356.678 230.737 392.533 219.864 425.141ZM159.998 354.68V79.955C159.998 71.086 152.873 63.965 144 63.965S128.002 71.086 128.002 79.955V354.68C106.006 362.551 92.758 385.037 96.758 408.025C100.633 431.137 120.629 447.879 144 447.879S187.368 431.137 191.243 408.025C195.243 385.037 181.995 362.551 159.998 354.68ZM507.313 132.688L411.313 36.688C405.063 30.438 394.938 30.438 388.688 36.688L292.688 132.688C286.438 138.938 286.438 149.063 292.688 155.312S309.063 161.562 315.313 155.312L384 86.625V464C384 472.844 391.157 480 400 480S416 472.844 416 464V86.625L484.688 155.312C487.813 158.438 491.907 160 496 160S504.188 158.438 507.313 155.312C513.563 149.062 513.563 138.938 507.313 132.688Z" })
  }
));
TemperatureArrowUpLight.displayName = "TemperatureArrowUpLight";
var TemperatureArrowUp_default = TemperatureArrowUpLight;
