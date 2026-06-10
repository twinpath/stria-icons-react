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
var BreadLoaf_exports = {};
__export(BreadLoaf_exports, {
  default: () => BreadLoaf_default
});
module.exports = __toCommonJS(BreadLoaf_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BreadLoafThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M400 32C397.91 32 242.396 32 240 32C107.5 32 0 103.625 0 192C0 227.375 26.875 256 60 256H64V448C64 465.625 78.375 480 96 480H544C561.625 480 576 465.625 576 448V256H580C613.125 256 640 227.375 640 192C640 103.625 532.5 32 400 32ZM96 464C87.178 464 80 456.822 80 448V240H60C35.738 240 16 218.467 16 192C16 112.598 116.486 48 240 48S464 112.598 464 192C464 218.467 444.262 240 420 240H400V448C400 456.822 392.822 464 384 464H96ZM580 240H560V448C560 456.822 552.822 464 544 464H411.072C413.92 459.219 416 453.949 416 448V256H420C453.125 256 480 227.375 480 192C480 128.529 424.41 73.861 344.072 48H384V48.025L400 48C523.514 48 624 112.598 624 192C624 218.467 604.262 240 580 240Z" })
  }
));
BreadLoafThin.displayName = "BreadLoafThin";
var BreadLoaf_default = BreadLoafThin;
