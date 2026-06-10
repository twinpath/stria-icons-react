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
const ScannerTouchscreenDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M320 96H32C14.328 96 0 110.326 0 128V480C0 497.674 14.328 512 32 512H320C337.674 512 352 497.674 352 480V128C352 110.326 337.674 96 320 96ZM288 432C288 440.836 280.838 448 272 448H80C71.164 448 64 440.836 64 432V176C64 167.164 71.164 160 80 160H272C280.838 160 288 167.164 288 176V432Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M272 160H80C71.164 160 64 167.164 64 176V432C64 440.836 71.164 448 80 448H272C280.838 448 288 440.836 288 432V176C288 167.164 280.838 160 272 160ZM192 16C192 7.199 184.801 0 176 0H144C135.201 0 128 7.199 128 16V64H192V16ZM256 8C256 3.625 252.375 0 248 0H232C227.625 0 224 3.625 224 8V64H256V8ZM496 0H464C455.201 0 448 7.199 448 16V272C448 280.801 455.201 288 464 288H496C504.801 288 512 280.801 512 272V16C512 7.199 504.801 0 496 0ZM408 0H392C387.625 0 384 3.625 384 8V280C384 284.375 387.625 288 392 288H408C412.375 288 416 284.375 416 280V8C416 3.625 412.375 0 408 0ZM336 0H304C295.201 0 288 7.199 288 16V64H352V16C352 7.199 344.801 0 336 0Z" })
    ]
  }
));
ScannerTouchscreenDuotone.displayName = "ScannerTouchscreenDuotone";
var ScannerTouchscreen_default = ScannerTouchscreenDuotone;
