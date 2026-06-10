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
var Bandage_exports = {};
__export(Bandage_exports, {
  default: () => Bandage_default
});
module.exports = __toCommonJS(Bandage_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BandageLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M560 96H80C35.875 96 0 131.875 0 176V336C0 380.125 35.875 416 80 416H560C604.125 416 640 380.125 640 336V176C640 131.875 604.125 96 560 96ZM160 384H80C53.5 384 32 362.5 32 336V176C32 149.5 53.5 128 80 128H160V384ZM448 384H192V128H448V384ZM608 336C608 362.5 586.5 384 560 384H480V128H560C586.5 128 608 149.5 608 176V336ZM272 228C283 228 292 219 292 208S283 188 272 188S252 197 252 208S261 228 272 228ZM368 228C379 228 388 219 388 208S379 188 368 188S348 197 348 208S357 228 368 228ZM272 324C283 324 292 315 292 304S283 284 272 284S252 293 252 304S261 324 272 324ZM368 324C379 324 388 315 388 304S379 284 368 284S348 293 348 304S357 324 368 324Z" })
  }
));
BandageLight.displayName = "BandageLight";
var Bandage_default = BandageLight;
