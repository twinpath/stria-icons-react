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
var ClockRotateLeft_exports = {};
__export(ClockRotateLeft_exports, {
  default: () => ClockRotateLeft_default
});
module.exports = __toCommonJS(ClockRotateLeft_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ClockRotateLeftRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 32C176.152 32 103.738 75.566 64 142.094V56C64 42.75 53.25 32 40 32S16 42.75 16 56V200C16 213.25 26.75 224 40 224H168C181.25 224 192 213.25 192 200S181.25 176 168 176H99.537C129.225 118.281 189.455 80 256 80C353.031 80 432 158.969 432 256S353.031 432 256 432C214.906 432 174.906 417.531 143.375 391.25C133.219 382.75 118.063 384.094 109.563 394.312C101.063 404.5 102.438 419.625 112.625 428.125C152.781 461.562 203.688 480 256 480C379.5 480 480 379.5 480 256S379.5 32 256 32ZM256 128C242.75 128 232 138.75 232 152V272C232 279.75 235.75 287.031 242.047 291.531L298.047 331.531C302.281 334.562 307.156 336 311.984 336C319.469 336 326.844 332.5 331.531 325.938C339.234 315.156 336.734 300.188 325.953 292.469L280 259.656V152C280 138.75 269.25 128 256 128Z" })
  }
));
ClockRotateLeftRegular.displayName = "ClockRotateLeftRegular";
var ClockRotateLeft_default = ClockRotateLeftRegular;
