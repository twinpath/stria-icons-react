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
var MartiniGlassCitrus_exports = {};
__export(MartiniGlassCitrus_exports, {
  default: () => MartiniGlassCitrus_default
});
module.exports = __toCommonJS(MartiniGlassCitrus_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MartiniGlassCitrusLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M304 480H224V358.24L411.752 154.844C416.064 150.188 417.205 143.406 414.658 137.594C412.111 131.75 406.361 128 400.002 128H15.998C9.638 128 3.888 131.75 1.341 137.594C-1.206 143.406 -0.065 150.188 4.248 154.844L192 358.24V480H112C103.164 480 96 487.162 96 496C96 504.836 103.164 512 112 512H304C312.835 512 320 504.836 320 496C320 487.162 312.835 480 304 480ZM52.544 160H363.455L208 328.406L52.544 160ZM432 0C379.687 0 331.406 28.438 305.999 74.25C301.703 81.969 304.5 91.719 312.218 96C319.968 100.219 329.687 97.5 333.968 89.75C353.75 54.125 391.296 32 432 32C493.75 32 544 82.25 544 144S493.75 256 432 256C417.484 256 403.359 253.25 389.999 247.844C381.843 244.625 372.484 248.531 369.171 256.688C365.859 264.875 369.812 274.219 377.999 277.531C395.187 284.469 413.359 288 432 288C511.406 288 576 223.406 576 144S511.406 0 432 0Z" })
  }
));
MartiniGlassCitrusLight.displayName = "MartiniGlassCitrusLight";
var MartiniGlassCitrus_default = MartiniGlassCitrusLight;
