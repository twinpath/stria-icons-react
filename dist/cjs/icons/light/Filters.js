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
var Filters_exports = {};
__export(Filters_exports, {
  default: () => Filters_default
});
module.exports = __toCommonJS(Filters_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FiltersLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M288.88 275.629L263.367 306.395L256 315.279V440.607L192 395.82V315.279L184.632 306.395L36.695 128H168C176.836 128 184 120.836 184 112C184 103.163 176.836 96 168 96H28.613C4.561 96 -8.719 123.365 6.453 141.662L160 326.822V400C160 407.828 163.812 415.172 170.25 419.656L250.25 475.641C254.533 478.639 259.275 480 263.906 480C276.339 480 288 470.203 288 455.984V326.822L313.513 296.057C317.472 291.283 318.315 284.65 315.677 279.037C310.69 268.427 296.363 266.605 288.88 275.629ZM611.386 32H220.613C196.56 32 183.281 59.365 198.453 77.662L352 262.822V368C352 375.828 355.812 383.172 362.25 387.656L442.25 443.641C446.533 446.639 451.275 448 455.906 448C468.339 448 480 438.203 480 423.984V262.822L633.546 77.662C648.718 59.365 635.437 32 611.386 32ZM455.367 242.395L448 251.279V408.607L384 363.82V251.279L376.632 242.395L228.695 64H603.304L455.367 242.395Z" })
  }
));
FiltersLight.displayName = "FiltersLight";
var Filters_default = FiltersLight;
