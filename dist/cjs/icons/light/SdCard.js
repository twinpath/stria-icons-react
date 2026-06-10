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
var SdCard_exports = {};
__export(SdCard_exports, {
  default: () => SdCard_default
});
module.exports = __toCommonJS(SdCard_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SdCardLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 384 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M240 64C231.164 64 224 71.162 224 80V144C224 152.836 231.164 160 240 160S256 152.836 256 144V80C256 71.162 248.836 64 240 64ZM176 64C167.164 64 160 71.162 160 80V144C160 152.836 167.164 160 176 160S192 152.836 192 144V80C192 71.162 184.836 64 176 64ZM304 64C295.164 64 288 71.162 288 80V144C288 152.836 295.164 160 304 160S320 152.836 320 144V80C320 71.162 312.836 64 304 64ZM320 0H154.51C137.535 0 121.258 6.742 109.254 18.744L18.746 109.254C6.742 121.256 0 137.535 0 154.51V448C0 483.199 28.801 512 64 512H320C355.199 512 384 483.199 384 448V64C384 28.799 355.199 0 320 0ZM352 448C352 465.6 337.6 480 320 480H64C46.4 480 32 465.6 32 448V154.504C32 146.018 35.371 137.879 41.373 131.877L131.877 41.373C137.879 35.371 146.018 32 154.504 32H320C337.6 32 352 46.4 352 64V448Z" })
  }
));
SdCardLight.displayName = "SdCardLight";
var SdCard_default = SdCardLight;
