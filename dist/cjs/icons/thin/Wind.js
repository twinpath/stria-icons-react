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
var Wind_exports = {};
__export(Wind_exports, {
  default: () => Wind_default
});
module.exports = __toCommonJS(Wind_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const WindThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M188 336H8C3.594 336 0 339.594 0 344S3.594 352 8 352H188C216.688 352 240 375.312 240 404V412C240 440.688 216.688 464 188 464H136C131.594 464 128 467.594 128 472S131.594 480 136 480H188C225.5 480 256 449.5 256 412V404C256 366.5 225.5 336 188 336ZM8 176H380C417.5 176 448 145.5 448 108V100C448 62.5 417.5 32 380 32H328C323.594 32 320 35.594 320 40S323.594 48 328 48H380C408.688 48 432 71.312 432 100V108C432 136.688 408.688 160 380 160H8C3.594 160 0 163.594 0 168S3.594 176 8 176ZM444 248H8C3.594 248 0 251.594 0 256S3.594 264 8 264H444C472.688 264 496 287.312 496 316S472.688 368 444 368H392C387.594 368 384 371.594 384 376S387.594 384 392 384H444C481.5 384 512 353.5 512 316S481.5 248 444 248Z" })
  }
));
WindThin.displayName = "WindThin";
var Wind_default = WindThin;
