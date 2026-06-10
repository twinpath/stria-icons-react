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
var HourglassEmpty_exports = {};
__export(HourglassEmpty_exports, {
  default: () => HourglassEmpty_default
});
module.exports = __toCommonJS(HourglassEmpty_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HourglassEmptyRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M360 464H352V445.031C352 404.406 336.188 366.25 307.484 337.531L225.938 256L307.484 174.469C336.188 145.75 352 107.594 352 66.969V48H360C373.25 48 384 37.25 384 24S373.25 0 360 0H24C10.75 0 0 10.75 0 24S10.75 48 24 48H32V69.25C32 108.125 46.672 145.125 73.312 173.406L151.047 256L73.328 338.594C46.672 366.875 32 403.875 32 442.75V464H24C10.75 464 0 474.75 0 488S10.75 512 24 512H360C373.25 512 384 501.25 384 488S373.25 464 360 464ZM108.266 140.531C90.047 121.156 80 95.844 80 69.25V48H304V66.969C304 94.781 293.188 120.875 273.547 140.531L188.4 225.664L108.266 140.531ZM304 464H80V442.75C80 416.156 90.047 390.844 108.281 371.469L188.402 286.336L273.547 371.469C293.188 391.125 304 417.219 304 445.031V464Z" })
  }
));
HourglassEmptyRegular.displayName = "HourglassEmptyRegular";
var HourglassEmpty_default = HourglassEmptyRegular;
