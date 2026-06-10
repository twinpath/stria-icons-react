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
var MoneyCheck_exports = {};
__export(MoneyCheck_exports, {
  default: () => MoneyCheck_default
});
module.exports = __toCommonJS(MoneyCheck_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MoneyCheckRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M512 64H64C28.654 64 0 92.654 0 128V384C0 419.346 28.654 448 64 448H512C547.346 448 576 419.346 576 384V128C576 92.654 547.346 64 512 64ZM528 384C528 392.822 520.822 400 512 400H64C55.178 400 48 392.822 48 384V128C48 119.178 55.178 112 64 112H512C520.822 112 528 119.178 528 128V384ZM264 208H120C106.75 208 96 218.75 96 232S106.75 256 120 256H264C277.25 256 288 245.25 288 232S277.25 208 264 208ZM232 304H120C106.75 304 96 314.75 96 328S106.75 352 120 352H232C245.25 352 256 341.25 256 328S245.25 304 232 304ZM456 304H408C394.75 304 384 314.75 384 328S394.75 352 408 352H456C469.25 352 480 341.25 480 328S469.25 304 456 304ZM448 160H384C366.326 160 352 174.326 352 192V224C352 241.672 366.326 256 384 256H448C465.674 256 480 241.672 480 224V192C480 174.326 465.674 160 448 160Z" })
  }
));
MoneyCheckRegular.displayName = "MoneyCheckRegular";
var MoneyCheck_default = MoneyCheckRegular;
