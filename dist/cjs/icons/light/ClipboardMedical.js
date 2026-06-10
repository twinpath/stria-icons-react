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
var ClipboardMedical_exports = {};
__export(ClipboardMedical_exports, {
  default: () => ClipboardMedical_default
});
module.exports = __toCommonJS(ClipboardMedical_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ClipboardMedicalLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M112 128H272C280.844 128 288 120.844 288 112S280.844 96 272 96H247.123C252.621 86.555 256 75.719 256 64C256 28.656 227.346 0 192 0S128 28.656 128 64C128 75.719 131.379 86.555 136.877 96H112C103.156 96 96 103.156 96 112S103.156 128 112 128ZM192 32C209.645 32 224 46.355 224 64S209.645 96 192 96S160 81.645 160 64S174.355 32 192 32ZM320 64C311.156 64 304 71.156 304 80S311.156 96 320 96C337.641 96 352 110.344 352 128V448C352 465.656 337.641 480 320 480H64C46.359 480 32 465.656 32 448V128C32 110.344 46.359 96 64 96C72.844 96 80 88.844 80 80S72.844 64 64 64C28.703 64 0 92.719 0 128V448C0 483.281 28.703 512 64 512H320C355.297 512 384 483.281 384 448V128C384 92.719 355.297 64 320 64ZM112 336H160V384C160 392.836 167.164 400 176 400H208C216.836 400 224 392.836 224 384V336H272C280.836 336 288 328.836 288 320V288C288 279.164 280.836 272 272 272H224V224C224 215.164 216.836 208 208 208H176C167.164 208 160 215.164 160 224V272H112C103.164 272 96 279.164 96 288V320C96 328.836 103.164 336 112 336Z" })
  }
));
ClipboardMedicalLight.displayName = "ClipboardMedicalLight";
var ClipboardMedical_default = ClipboardMedicalLight;
