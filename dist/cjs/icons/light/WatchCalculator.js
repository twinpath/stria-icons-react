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
var WatchCalculator_exports = {};
__export(WatchCalculator_exports, {
  default: () => WatchCalculator_default
});
module.exports = __toCommonJS(WatchCalculator_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const WatchCalculatorLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 384 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M320 80V64C320 28.719 291.281 0 256 0H128C92.719 0 64 28.719 64 64V80C28.654 80 0 108.652 0 144V368C0 403.348 28.654 432 64 432V448C64 483.281 92.719 512 128 512H256C291.281 512 320 483.281 320 448V432C355.348 432 384 403.348 384 368V144C384 108.652 355.348 80 320 80ZM96 64C96 46.344 110.344 32 128 32H256C273.656 32 288 46.344 288 64V80H96V64ZM288 448C288 465.656 273.656 480 256 480H128C110.344 480 96 465.656 96 448V432H288V448ZM352 368C352 385.645 337.645 400 320 400H64C46.355 400 32 385.645 32 368V208H352V368ZM352 176H32V144C32 126.355 46.355 112 64 112H320C337.645 112 352 126.355 352 144V176ZM96 368H112C120.836 368 128 360.836 128 352V336C128 327.164 120.836 320 112 320H96C87.164 320 80 327.164 80 336V352C80 360.836 87.164 368 96 368ZM184 368H200C208.836 368 216 360.836 216 352V336C216 327.164 208.836 320 200 320H184C175.164 320 168 327.164 168 336V352C168 360.836 175.164 368 184 368ZM272 368H288C296.836 368 304 360.836 304 352V336C304 327.164 296.836 320 288 320H272C263.164 320 256 327.164 256 336V352C256 360.836 263.164 368 272 368ZM96 288H112C120.836 288 128 280.836 128 272V256C128 247.164 120.836 240 112 240H96C87.164 240 80 247.164 80 256V272C80 280.836 87.164 288 96 288ZM184 288H200C208.836 288 216 280.836 216 272V256C216 247.164 208.836 240 200 240H184C175.164 240 168 247.164 168 256V272C168 280.836 175.164 288 184 288ZM272 288H288C296.836 288 304 280.836 304 272V256C304 247.164 296.836 240 288 240H272C263.164 240 256 247.164 256 256V272C256 280.836 263.164 288 272 288Z" })
  }
));
WatchCalculatorLight.displayName = "WatchCalculatorLight";
var WatchCalculator_default = WatchCalculatorLight;
