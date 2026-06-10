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
var BatteryExclamation_exports = {};
__export(BatteryExclamation_exports, {
  default: () => BatteryExclamation_default
});
module.exports = __toCommonJS(BatteryExclamation_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BatteryExclamationLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M272 336C280.838 336 288 328.836 288 320V80C288 71.162 280.838 64 272 64C263.164 64 256 71.162 256 80V320C256 328.836 263.164 336 272 336ZM272 368C254.361 368 240 382.354 240 400.002C240 417.643 254.361 432 272 432S304 417.643 304 400.002C304 382.354 289.639 368 272 368ZM64 128H176C184.836 128 192 120.836 192 112C192 103.162 184.836 96 176 96H64C28.654 96 0 124.652 0 160V352C0 387.346 28.654 416 64 416H176C184.836 416 192 408.836 192 400C192 391.162 184.836 384 176 384H64C46.326 384 32 369.672 32 352V160C32 142.326 46.326 128 64 128ZM560 192C551.156 192 544 199.156 544 208V304C544 312.844 551.156 320 560 320S576 312.844 576 304V208C576 199.156 568.844 192 560 192ZM448 96H368C359.164 96 352 103.162 352 112C352 120.836 359.164 128 368 128H448C465.674 128 480 142.326 480 160V352C480 369.672 465.674 384 448 384H368C359.164 384 352 391.162 352 400C352 408.836 359.164 416 368 416H448C483.346 416 512 387.346 512 352V160C512 124.652 483.346 96 448 96Z" })
  }
));
BatteryExclamationLight.displayName = "BatteryExclamationLight";
var BatteryExclamation_default = BatteryExclamationLight;
