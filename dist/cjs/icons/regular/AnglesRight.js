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
var AnglesRight_exports = {};
__export(AnglesRight_exports, {
  default: () => AnglesRight_default
});
module.exports = __toCommonJS(AnglesRight_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const AnglesRightRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M238.119 115.995L359.769 252L238.119 388.005C234.026 392.567 231.994 398.286 231.994 404.005C231.994 410.599 234.682 417.162 239.994 421.881C249.868 430.725 265.055 429.881 273.867 420.006L409.86 268.001C418.047 258.875 418.047 245.125 409.86 235.999L273.867 83.994C265.055 74.119 249.868 73.275 239.994 82.119C230.088 90.932 229.276 106.151 238.119 115.995ZM217.87 268.001C226.057 258.875 226.057 245.125 217.87 235.999L81.878 83.994C73.066 74.119 57.879 73.275 48.004 82.119C38.099 90.932 37.286 106.151 46.129 115.995L167.779 252L46.13 388.005C42.036 392.567 40.005 398.286 40.005 404.005C40.005 410.599 42.692 417.162 48.004 421.881C57.879 430.725 73.066 429.881 81.878 420.006L217.87 268.001Z" })
  }
));
AnglesRightRegular.displayName = "AnglesRightRegular";
var AnglesRight_default = AnglesRightRegular;
