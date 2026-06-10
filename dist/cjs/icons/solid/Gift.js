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
var Gift_exports = {};
__export(Gift_exports, {
  default: () => Gift_default
});
module.exports = __toCommonJS(Gift_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const GiftSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M32 480C32 497.703 46.312 512 64 512H224V288H32V480ZM480 128H437.854C449.818 105.082 452.871 77.453 437.824 46.602C423.385 16.992 392.562 -0.016 359.484 0C317.703 0.016 290.666 21.316 256 68.297C221.334 21.316 194.297 0.016 152.516 0C119.438 -0.016 88.615 16.992 74.176 46.602C59.129 77.453 62.182 105.082 74.146 128H32C14.326 128 0 142.328 0 160V224C0 241.602 14.4 256 32 256H480C497.6 256 512 241.602 512 224V160C512 142.328 497.674 128 480 128ZM153.906 128C131.812 128 113.906 110.094 113.906 88S131.812 48 153.906 48C173.812 48 188.5 51.297 240 128H153.906ZM358.094 128H272C323.5 51.297 338.188 48 358.094 48C380.188 48 398.094 65.906 398.094 88S380.188 128 358.094 128ZM288 512H448C465.688 512 480 497.703 480 480V288H288V512Z" })
  }
));
GiftSolid.displayName = "GiftSolid";
var Gift_default = GiftSolid;
