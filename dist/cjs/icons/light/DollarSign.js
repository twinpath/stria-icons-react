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
var DollarSign_exports = {};
__export(DollarSign_exports, {
  default: () => DollarSign_default
});
module.exports = __toCommonJS(DollarSign_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DollarSignLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 320 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M302.035 365.938C292.597 416.016 244.829 445.562 175.98 447.672V496C175.98 504.844 168.825 512 159.984 512C151.141 512 143.987 504.844 143.987 496V446.266C137.642 445.742 131.69 445.805 125.084 444.859C97.105 440.984 66.798 430.984 40.069 422.156L27.071 417.891C18.667 415.172 14.058 406.141 16.792 397.734C19.51 389.359 28.54 384.734 36.944 387.453L50.098 391.766C75.531 400.172 104.369 409.687 129.536 413.172C193.133 422.234 261.277 409.359 270.603 360C280.414 308.016 233.798 291.844 155.875 271.406L138.831 266.906C87.685 253.125 2.06 230.078 17.932 146.062C27.362 96.008 75.191 66.727 143.987 64.566V16C143.987 7.156 151.141 0 159.984 0C168.825 0 175.98 7.156 175.98 16V65.473C182.263 65.992 188.345 66.211 194.883 67.141C212.958 69.75 233.907 74.922 260.793 83.453C269.228 86.125 273.884 95.109 271.212 103.531C268.557 111.969 259.637 116.672 251.138 113.953C225.955 105.969 206.631 101.156 190.337 98.828C126.88 89.734 58.69 102.641 49.364 152C40.615 198.391 75.421 216.688 147.142 236L163.983 240.453C232.642 258.469 318.079 280.875 302.035 365.938Z" })
  }
));
DollarSignLight.displayName = "DollarSignLight";
var DollarSign_default = DollarSignLight;
