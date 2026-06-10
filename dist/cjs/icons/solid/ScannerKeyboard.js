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
var ScannerKeyboard_exports = {};
__export(ScannerKeyboard_exports, {
  default: () => ScannerKeyboard_default
});
module.exports = __toCommonJS(ScannerKeyboard_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ScannerKeyboardSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M192 16C192 7.199 184.801 0 176 0H144C135.201 0 128 7.199 128 16V64H192V16ZM256 8C256 3.625 252.375 0 248 0H232C227.625 0 224 3.625 224 8V64H256V8ZM320 96H32C14.328 96 0 110.326 0 128V480C0 497.674 14.328 512 32 512H320C337.674 512 352 497.674 352 480V128C352 110.326 337.674 96 320 96ZM160 432C160 440.836 152.838 448 144 448H80C71.164 448 64 440.836 64 432V400C64 391.164 71.164 384 80 384H144C152.838 384 160 391.164 160 400V432ZM160 336C160 344.836 152.838 352 144 352H80C71.164 352 64 344.836 64 336V304C64 295.164 71.164 288 80 288H144C152.838 288 160 295.164 160 304V336ZM288 432C288 440.836 280.838 448 272 448H208C199.164 448 192 440.836 192 432V400C192 391.164 199.164 384 208 384H272C280.838 384 288 391.164 288 400V432ZM288 336C288 344.836 280.838 352 272 352H208C199.164 352 192 344.836 192 336V304C192 295.164 199.164 288 208 288H272C280.838 288 288 295.164 288 304V336ZM288 208C288 216.836 280.838 224 272 224H80C71.164 224 64 216.836 64 208V176C64 167.164 71.164 160 80 160H272C280.838 160 288 167.164 288 176V208ZM336 0H304C295.201 0 288 7.199 288 16V64H352V16C352 7.199 344.801 0 336 0ZM496 0H464C455.201 0 448 7.199 448 16V272C448 280.801 455.201 288 464 288H496C504.801 288 512 280.801 512 272V16C512 7.199 504.801 0 496 0ZM408 0H392C387.625 0 384 3.625 384 8V280C384 284.375 387.625 288 392 288H408C412.375 288 416 284.375 416 280V8C416 3.625 412.375 0 408 0Z" })
  }
));
ScannerKeyboardSolid.displayName = "ScannerKeyboardSolid";
var ScannerKeyboard_default = ScannerKeyboardSolid;
