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
var CircleDivide_exports = {};
__export(CircleDivide_exports, {
  default: () => CircleDivide_default
});
module.exports = __toCommonJS(CircleDivide_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CircleDivideDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256.002 16C123.438 16 16 123.438 16 256S123.438 496 256.002 496C388.562 496 496 388.562 496 256S388.562 16 256.002 16ZM256 128C273.674 128 288 142.326 288 160C288 177.672 273.674 192 256 192S224 177.672 224 160C224 142.326 238.326 128 256 128ZM256 384C238.326 384 224 369.672 224 352C224 334.326 238.326 320 256 320S288 334.326 288 352C288 369.672 273.674 384 256 384ZM352.002 280H160.002C146.801 280 136 269.197 136 256C136 242.799 146.801 232 160.002 232H352.002C365.199 232 376 242.799 376 256C376 269.197 365.199 280 352.002 280Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M352.002 232H160.002C146.801 232 136 242.799 136 256C136 269.197 146.801 280 160.002 280H352.002C365.199 280 376 269.197 376 256C376 242.799 365.199 232 352.002 232ZM256 192C273.674 192 288 177.672 288 160C288 142.326 273.674 128 256 128S224 142.326 224 160C224 177.672 238.326 192 256 192ZM256 320C238.326 320 224 334.326 224 352C224 369.672 238.326 384 256 384S288 369.672 288 352C288 334.326 273.674 320 256 320Z" })
    ]
  }
));
CircleDivideDuotone.displayName = "CircleDivideDuotone";
var CircleDivide_default = CircleDivideDuotone;
