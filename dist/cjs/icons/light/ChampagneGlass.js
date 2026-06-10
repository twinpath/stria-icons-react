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
var ChampagneGlass_exports = {};
__export(ChampagneGlass_exports, {
  default: () => ChampagneGlass_default
});
module.exports = __toCommonJS(ChampagneGlass_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ChampagneGlassLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 256 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M208 480H144V349.877C206.912 341.746 256 287.973 256 221.812C256 186.719 242.734 91.688 222.984 6.188C222.141 2.562 218.906 0 215.188 0H40.812C37.094 0 33.859 2.562 33.016 6.188C13.266 91.688 0 186.719 0 221.812C0 287.973 49.088 341.746 112 349.877V480H48C39.164 480 32 487.162 32 496C32 504.836 39.164 512 48 512H208C216.836 512 224 504.836 224 496C224 487.162 216.836 480 208 480ZM195.967 32C203.023 64.584 209.029 97.877 213.715 128H42.285C46.973 97.873 52.979 64.576 60.033 32H195.967ZM32 221.812C32 209.109 34.096 186.885 37.656 160H218.344C221.904 186.887 224 209.111 224 221.812C224 273.342 184.338 316.152 133.707 319.271C126.697 319.703 129.41 319.709 122.295 319.271C71.662 316.152 32 273.342 32 221.812Z" })
  }
));
ChampagneGlassLight.displayName = "ChampagneGlassLight";
var ChampagneGlass_default = ChampagneGlassLight;
