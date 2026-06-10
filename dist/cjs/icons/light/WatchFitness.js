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
var WatchFitness_exports = {};
__export(WatchFitness_exports, {
  default: () => WatchFitness_default
});
module.exports = __toCommonJS(WatchFitness_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const WatchFitnessLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M320 80V64C320 28.719 291.281 0 256 0H128C92.719 0 64 28.719 64 64V80C28.654 80 0 108.652 0 144V368C0 403.348 28.654 432 64 432V448C64 483.281 92.719 512 128 512H256C291.281 512 320 483.281 320 448V432C355.346 432 384 403.348 384 368V144C384 108.652 355.346 80 320 80ZM96 64C96 46.344 110.344 32 128 32H256C273.656 32 288 46.344 288 64V80H96V64ZM288 448C288 465.656 273.656 480 256 480H128C110.344 480 96 465.656 96 448V432H288V448ZM352 368C352 385.645 337.645 400 320 400H64C46.355 400 32 385.645 32 368V144C32 126.355 46.355 112 64 112H320C337.645 112 352 126.355 352 144V368ZM192.029 187.742C149.385 144.746 115.621 161.617 101.738 173.242C74.227 196.242 72.852 237.375 97.486 262.25L182.025 347.875C187.527 353.375 196.281 353.375 201.783 347.875L286.57 262.25C311.207 237.375 309.707 196.242 282.193 173.242C268.312 161.617 234.549 144.746 192.029 187.742ZM263.936 239.75L191.904 312.375L120.123 239.75C109.742 229.375 107.742 209.75 122.123 197.75C135.879 186.242 153.387 194.367 160.641 201.5L192.029 233.25L223.418 201.5C230.547 194.242 248.055 186.242 261.811 197.75C276.191 209.75 274.191 229.375 263.936 239.75Z" })
  }
));
WatchFitnessLight.displayName = "WatchFitnessLight";
var WatchFitness_default = WatchFitnessLight;
