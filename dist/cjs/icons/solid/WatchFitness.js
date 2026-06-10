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
const WatchFitnessSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M320 32C320 14.375 305.625 0 288 0H96C78.375 0 64 14.375 64 32V48H320V32ZM64 480C64 497.625 78.375 512 96 512H288C305.625 512 320 497.625 320 480V464H64V480ZM320 80H64C28.625 80 0 108.625 0 144V368C0 403.375 28.625 432 64 432H320C355.375 432 384 403.375 384 368V144C384 108.625 355.375 80 320 80ZM286.625 262.25L201.875 347.875C199.25 350.5 195.75 352 192 352S184.75 350.5 182.125 347.875L97.375 262.25C72.875 237.375 74.25 196.125 101.75 173.125C125.75 153.125 161.375 156.75 183.375 179L192 187.625L200.625 179C222.625 156.75 258.25 153.125 282.25 173.125C309.75 196.125 311.125 237.375 286.625 262.25Z" })
  }
));
WatchFitnessSolid.displayName = "WatchFitnessSolid";
var WatchFitness_default = WatchFitnessSolid;
