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
const AustralSignSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M416 320H369.709L356.492 288H416C433.672 288 448 273.672 448 256S433.672 224 416 224H330.057L260.969 56.734C254.781 41.766 240.188 32 224 32S193.219 41.766 187.031 56.734L117.943 224H32C14.328 224 0 238.328 0 256S14.328 288 32 288H91.508L78.291 320H32C14.328 320 0 334.328 0 352S14.328 384 32 384H51.855L35.031 424.734C26.594 445.141 36.313 468.531 56.734 476.969C77.109 485.406 100.531 475.687 108.969 455.266L138.406 384H309.594L339.031 455.266C345.406 470.688 360.297 480.016 376.016 480.016C381.109 480.016 386.281 479.031 391.266 476.969C411.688 468.531 421.406 445.141 412.969 424.734L396.145 384H416C433.672 384 448 369.672 448 352S433.672 320 416 320ZM224 176.781L243.504 224H204.496L224 176.781ZM164.842 320L178.061 288H269.939L283.158 320H164.842Z" })
  }
));
AustralSignSolid.displayName = "AustralSignSolid";
var AustralSign_default = AustralSignSolid;
