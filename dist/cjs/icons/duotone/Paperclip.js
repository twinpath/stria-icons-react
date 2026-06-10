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
var Paperclip_exports = {};
__export(Paperclip_exports, {
  default: () => Paperclip_default
});
module.exports = __toCommonJS(Paperclip_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PaperclipDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M352 128V336C352 438.848 263.326 521.373 158.418 511.141C66.986 502.223 0 420.029 0 328.162V208C0 199.162 7.164 192 16 192H48C56.836 192 64 199.162 64 208V332.777C64 386.223 100.117 434.861 152.475 445.588C224.459 460.334 288 405.438 288 336V131.578C288 99.688 266.277 70.066 234.811 64.891C194.756 58.303 160 89.158 160 128V304C160 312.828 167.172 320 176 320S192 312.828 192 304V144C192 135.162 199.164 128 208 128H240C248.836 128 256 135.162 256 144V299.268C256 341.107 225.986 379.322 184.363 383.572C136.52 388.455 96 350.867 96 304V133.703C96 66.891 144.715 7.113 211.211 0.625C287.508 -6.818 352 53.201 352 128Z", className: "stria-secondary", style: { opacity: 0.4 } })
  }
));
PaperclipDuotone.displayName = "PaperclipDuotone";
var Paperclip_default = PaperclipDuotone;
