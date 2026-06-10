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
var Poo_exports = {};
__export(Poo_exports, {
  default: () => Poo_default
});
module.exports = __toCommonJS(Poo_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PooSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M451.375 369.125C468.75 356 480 335.375 480 312C480 272.25 447.75 240 408 240H393.875C407.25 228.25 416 211.25 416 192C416 156.75 387.25 128 352 128H346.125C349.75 117.875 352 107.25 352 96C352 43 309 0 256 0C250.75 0 245.75 0.75 240.875 1.5C250.25 14.625 256 30.625 256 48C256 92.25 220.25 128 176 128H160C124.75 128 96 156.75 96 192C96 211.25 104.75 228.25 118.125 240H104C64.25 240 32 272.25 32 312C32 335.375 43.25 356 60.625 369.125C26.25 374.625 0 404.125 0 440C0 479.75 32.25 512 72 512H440C479.75 512 512 479.75 512 440C512 404.125 485.75 374.625 451.375 369.125ZM192 256C209.75 256 224 270.25 224 288S209.75 320 192 320S160 305.75 160 288S174.25 256 192 256ZM351.479 395C340.98 422.875 292.992 448 256 448C219.01 448 171.02 422.875 160.521 395C158.523 389.75 162.521 384 168.27 384H343.73C349.479 384 353.479 389.75 351.479 395ZM320 320C302.25 320 288 305.75 288 288S302.25 256 320 256S352 270.25 352 288S337.75 320 320 320Z" })
  }
));
PooSolid.displayName = "PooSolid";
var Poo_default = PooSolid;
