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
const MoneyCheckLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M272 224H80C71.164 224 64 231.162 64 240C64 248.836 71.164 256 80 256H272C280.836 256 288 248.836 288 240C288 231.162 280.836 224 272 224ZM240 319.998H80C71.164 319.998 64 327.16 64 335.998C64 344.834 71.164 351.998 80 351.998H240C248.836 351.998 256 344.834 256 335.998C256 327.16 248.836 319.998 240 319.998ZM480 160H384C366.326 160 352 174.326 352 192V256C352 273.672 366.326 288 384 288H480C497.674 288 512 273.672 512 256V192C512 174.326 497.674 160 480 160ZM480 256H384V192H480V256ZM496 319.998H400C391.164 319.998 384 327.16 384 335.998C384 344.834 391.164 351.998 400 351.998H496C504.836 351.998 512 344.834 512 335.998C512 327.16 504.836 319.998 496 319.998ZM512 64H64C28.654 64 0 92.654 0 128V384C0 419.346 28.654 448 64 448H512C547.346 448 576 419.346 576 384V128C576 92.654 547.346 64 512 64ZM544 384C544 401.645 529.645 416 512 416H64C46.355 416 32 401.645 32 384V128C32 110.355 46.355 96 64 96H512C529.645 96 544 110.355 544 128V384Z" })
  }
));
MoneyCheckLight.displayName = "MoneyCheckLight";
var MoneyCheck_default = MoneyCheckLight;
