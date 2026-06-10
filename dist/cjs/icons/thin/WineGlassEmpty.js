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
var WineGlassEmpty_exports = {};
__export(WineGlassEmpty_exports, {
  default: () => WineGlassEmpty_default
});
module.exports = __toCommonJS(WineGlassEmpty_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const WineGlassEmptyThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 320 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M303.398 192.658L288.746 29.104C287.269 12.621 273.652 0 257.341 0H62.659C46.348 0 32.731 12.621 31.254 29.104L16.602 192.658C9.174 275.564 71.458 346.783 152.346 351.17C152.308 351.484 152 351.676 152 352V496H63.999C59.592 496 55.999 499.594 55.999 504S59.592 512 63.999 512H256.001C260.408 512 264.001 508.406 264.001 504S260.408 496 256.001 496H168V352C168 351.676 167.691 351.484 167.654 351.17C248.542 346.783 310.826 275.564 303.398 192.658ZM160 336C124.037 336 90.747 321.256 66.264 294.482C41.537 267.439 29.244 230.848 32.537 194.086L47.19 30.531C47.932 22.246 54.583 16 62.659 16H257.341C265.417 16 272.068 22.246 272.81 30.531L287.463 194.086C290.756 230.848 278.463 267.439 253.736 294.482C229.253 321.256 195.963 336 160 336Z" })
  }
));
WineGlassEmptyThin.displayName = "WineGlassEmptyThin";
var WineGlassEmpty_default = WineGlassEmptyThin;
