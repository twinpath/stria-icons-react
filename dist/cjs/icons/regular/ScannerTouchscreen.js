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
var ScannerTouchscreen_exports = {};
__export(ScannerTouchscreen_exports, {
  default: () => ScannerTouchscreen_default
});
module.exports = __toCommonJS(ScannerTouchscreen_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ScannerTouchscreenRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M192 16C192 7.199 184.801 0 176 0H144C135.201 0 128 7.199 128 16V64H192V16ZM256 16C256 7.199 248.801 0 240 0S224 7.199 224 16V64H256V16ZM496 0H464C455.201 0 448 7.199 448 16V272C448 280.801 455.201 288 464 288H496C504.801 288 512 280.801 512 272V16C512 7.199 504.801 0 496 0ZM288 96H64C28.654 96 0 124.654 0 160V448C0 483.346 28.654 512 64 512H288C323.348 512 352 483.346 352 448V160C352 124.654 323.348 96 288 96ZM304 448C304 456.822 296.822 464 288 464H64C55.178 464 48 456.822 48 448V160C48 151.178 55.178 144 64 144H288C296.822 144 304 151.178 304 160V448ZM400 0C391.199 0 384 7.199 384 16V272C384 280.799 391.199 288 400 288S416 280.799 416 272V16C416 7.199 408.801 0 400 0ZM336 0H304C295.201 0 288 7.199 288 16V64H352V16C352 7.199 344.801 0 336 0Z" })
  }
));
ScannerTouchscreenRegular.displayName = "ScannerTouchscreenRegular";
var ScannerTouchscreen_default = ScannerTouchscreenRegular;
