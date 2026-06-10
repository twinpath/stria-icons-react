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
var OctagonPlus_exports = {};
__export(OctagonPlus_exports, {
  default: () => OctagonPlus_default
});
module.exports = __toCommonJS(OctagonPlus_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const OctagonPlusDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M482.758 157.094L354.789 29.242C346.352 20.805 334.984 16 323.031 16H188.852C177.016 16 165.531 20.805 157.094 29.242L29.242 157.211C20.805 165.648 16 177.016 16 188.969V323.148C16 334.984 20.805 346.469 29.242 354.906L157.211 482.758C165.648 491.195 177.016 496 188.969 496H323.148C334.984 496 346.469 491.195 354.906 482.758L482.758 354.789C491.195 346.352 496 334.984 496 323.031V188.852C496 177.016 491.195 165.531 482.758 157.094ZM351.998 280H279.996V352C279.996 365.197 269.195 376 255.998 376C242.797 376 231.996 365.197 231.996 352V280H159.998C146.797 280 135.996 269.197 135.996 256C135.996 242.799 146.797 232 159.998 232H231.996V160C231.996 146.799 242.797 136 255.998 136C269.195 136 279.996 146.799 279.996 160V232H351.998C365.195 232 375.996 242.799 375.996 256C375.996 269.197 365.195 280 351.998 280Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M352.002 280H280V352C280 365.197 269.199 376 256.002 376C242.801 376 232 365.197 232 352V280H160.002C146.801 280 136 269.197 136 256C136 242.799 146.801 232 160.002 232H232V160C232 146.799 242.801 136 256.002 136C269.199 136 280 146.799 280 160V232H352.002C365.199 232 376 242.799 376 256C376 269.197 365.199 280 352.002 280Z" })
    ]
  }
));
OctagonPlusDuotone.displayName = "OctagonPlusDuotone";
var OctagonPlus_default = OctagonPlusDuotone;
