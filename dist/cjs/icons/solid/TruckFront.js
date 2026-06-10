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
var TruckFront_exports = {};
__export(TruckFront_exports, {
  default: () => TruckFront_default
});
module.exports = __toCommonJS(TruckFront_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TruckFrontSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M64 0C28.654 0 0 28.654 0 64V368C0 391.629 12.953 412.037 32 423.123V480C32 497.673 46.327 512 64 512H96C113.673 512 128 497.673 128 480V432H384V480C384 497.673 398.327 512 416 512H448C465.673 512 480 497.673 480 480V423.123C499.047 412.037 512 391.629 512 368V64C512 28.654 483.346 0 448 0H64ZM96 352C78.328 352 64 337.672 64 320C64 302.326 78.328 288 96 288S128 302.326 128 320C128 337.672 113.672 352 96 352ZM110.129 224L134.836 149.881C139.195 136.793 151.398 128 165.195 128H346.805C360.602 128 372.805 136.793 377.164 149.881L401.871 224H110.129ZM416 352C398.328 352 384 337.672 384 320C384 302.326 398.328 288 416 288S448 302.326 448 320C448 337.672 433.672 352 416 352Z" })
  }
));
TruckFrontSolid.displayName = "TruckFrontSolid";
var TruckFront_default = TruckFrontSolid;
