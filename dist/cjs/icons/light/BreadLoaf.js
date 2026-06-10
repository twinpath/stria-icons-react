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
var BreadLoaf_exports = {};
__export(BreadLoaf_exports, {
  default: () => BreadLoaf_default
});
module.exports = __toCommonJS(BreadLoaf_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BreadLoafLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M400 32H240C107.5 32 0 103.625 0 192C0 227.375 30.875 256 64 256V448C64 465.625 78.375 480 96 480H544C561.625 480 576 465.625 576 448V256C609.125 256 640 227.375 640 192C640 103.625 532.5 32 400 32ZM384 240V448H96V240C96 231.162 88.838 224 80 224H64C48.5 224 32 209.625 32 192C32 122.625 127.25 64 240 64S448 122.625 448 192C448 209.625 435.5 224 420 224H400C391.164 224 384 231.162 384 240ZM544 448H416V256H544V448ZM580 224H471.625C477.125 214.25 480 203.25 480 192C480 139.625 442 93.125 383.5 64H400C512.75 64 608 122.625 608 192C608 209.625 595.5 224 580 224Z" })
  }
));
BreadLoafLight.displayName = "BreadLoafLight";
var BreadLoaf_default = BreadLoafLight;
