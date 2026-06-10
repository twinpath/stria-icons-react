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
var AustralSign_exports = {};
__export(AustralSign_exports, {
  default: () => AustralSign_default
});
module.exports = __toCommonJS(AustralSign_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const AustralSignLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M432 320H356.449L329.371 256H432C440.844 256 448 248.844 448 240S440.844 224 432 224H315.834L238.734 41.766C233.734 29.922 214.266 29.922 209.266 41.766L132.166 224H16C7.156 224 0 231.156 0 240S7.156 256 16 256H118.629L91.551 320H16C7.156 320 0 327.156 0 336S7.156 352 16 352H78.012L33.266 457.766C29.828 465.906 33.625 475.297 41.766 478.734C49.812 482.141 59.281 478.391 62.734 470.234L112.756 352H335.244L385.266 470.234C387.844 476.344 393.766 480 400 480C402.078 480 404.203 479.594 406.234 478.734C414.375 475.297 418.172 465.906 414.734 457.766L369.988 352H432C440.844 352 448 344.844 448 336S440.844 320 432 320ZM224 89.062L281.09 224H166.91L224 89.062ZM126.295 320L153.373 256H294.627L321.705 320H126.295Z" })
  }
));
AustralSignLight.displayName = "AustralSignLight";
var AustralSign_default = AustralSignLight;
