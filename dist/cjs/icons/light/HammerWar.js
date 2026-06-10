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
var HammerWar_exports = {};
__export(HammerWar_exports, {
  default: () => HammerWar_default
});
module.exports = __toCommonJS(HammerWar_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HammerWarLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M352.125 32C350.375 32 348.5 32.125 346.75 32.5L240 50.25L208 55.586V16C208 7.156 200.844 0 192 0S176 7.156 176 16V55.586L144 50.25L37.25 32.5C35.5 32.125 33.625 32 31.875 32C14.625 32 0 46 0 64V256C0 274 14.625 288 32 288C33.75 288 35.5 287.875 37.25 287.5L144 269.75L192 261.75L240 269.75L346.75 287.5C348.5 287.875 350.25 288 352.125 288C369.375 288 384 274 384 256V64C384 46 369.375 32 352.125 32ZM352 256L192 229.375L32 256V64L192 90.625L352 64V256ZM192 288C183.156 288 176 295.156 176 304V496C176 504.844 183.156 512 192 512S208 504.844 208 496V304C208 295.156 200.844 288 192 288Z" })
  }
));
HammerWarLight.displayName = "HammerWarLight";
var HammerWar_default = HammerWarLight;
