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
var Download_exports = {};
__export(Download_exports, {
  default: () => Download_default
});
module.exports = __toCommonJS(Download_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DownloadLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M245.375 379.953C248.406 382.656 252.188 384 256 384S263.594 382.656 266.625 379.953L410.625 251.953C417.219 246.094 417.844 235.969 411.969 229.375C406.094 222.75 395.906 222.141 389.375 228.047L272 332.373V16C272 7.156 264.844 0 256 0S240 7.156 240 16V332.373L122.625 228.047C116.062 222.141 105.906 222.75 100.031 229.375C94.156 235.969 94.781 246.094 101.375 251.953L245.375 379.953ZM448 320H400C391.164 320 384 327.162 384 336C384 344.836 391.164 352 400 352H448C465.674 352 480 366.326 480 384V448C480 465.672 465.674 480 448 480H64C46.326 480 32 465.672 32 448V384C32 366.326 46.326 352 64 352H112C120.836 352 128 344.836 128 336C128 327.162 120.836 320 112 320H64C28.654 320 0 348.652 0 384V448C0 483.346 28.654 512 64 512H448C483.346 512 512 483.346 512 448V384C512 348.652 483.346 320 448 320ZM440 416C440 402.75 429.25 392 416 392S392 402.75 392 416S402.75 440 416 440S440 429.25 440 416Z" })
  }
));
DownloadLight.displayName = "DownloadLight";
var Download_default = DownloadLight;
