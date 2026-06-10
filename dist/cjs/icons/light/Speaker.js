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
var Speaker_exports = {};
__export(Speaker_exports, {
  default: () => Speaker_default
});
module.exports = __toCommonJS(Speaker_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SpeakerLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M192 192C227.375 192 256 163.375 256 128S227.375 64 192 64S128 92.625 128 128S156.625 192 192 192ZM192 96C209.625 96 224 110.375 224 128S209.625 160 192 160S160 145.625 160 128S174.375 96 192 96ZM192 224C130.125 224 80 274.125 80 336S130.125 448 192 448S304 397.875 304 336S253.875 224 192 224ZM192 416C147.875 416 112 380.125 112 336S147.875 256 192 256S272 291.875 272 336S236.125 416 192 416ZM320 0H64C28.654 0 0 28.652 0 64V448C0 483.346 28.654 512 64 512H320C355.346 512 384 483.346 384 448V64C384 28.652 355.346 0 320 0ZM352 448C352 465.672 337.674 480 320 480H64C46.326 480 32 465.672 32 448V64C32 46.326 46.326 32 64 32H320C337.674 32 352 46.326 352 64V448ZM192 312C178.781 312 168 322.781 168 336S178.781 360 192 360S216 349.219 216 336S205.219 312 192 312Z" })
  }
));
SpeakerLight.displayName = "SpeakerLight";
var Speaker_default = SpeakerLight;
