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
var Signal_exports = {};
__export(Signal_exports, {
  default: () => Signal_default
});
module.exports = __toCommonJS(Signal_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SignalSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M544 0C526.326 0 512 14.326 512 32V480C512 497.672 526.326 512 544 512S576 497.672 576 480V32C576 14.326 561.674 0 544 0ZM160 288C142.326 288 128 302.326 128 320V480C128 497.672 142.326 512 160 512S192 497.672 192 480V320C192 302.326 177.674 288 160 288ZM32 384C14.326 384 0 398.326 0 416V480C0 497.672 14.326 512 32 512S64 497.672 64 480V416C64 398.326 49.674 384 32 384ZM416 96C398.326 96 384 110.326 384 128V480C384 497.672 398.326 512 416 512S448 497.672 448 480V128C448 110.326 433.674 96 416 96ZM288 192C270.326 192 256 206.326 256 224V480C256 497.672 270.326 512 288 512S320 497.672 320 480V224C320 206.326 305.674 192 288 192Z" })
  }
));
SignalSolid.displayName = "SignalSolid";
var Signal_default = SignalSolid;
