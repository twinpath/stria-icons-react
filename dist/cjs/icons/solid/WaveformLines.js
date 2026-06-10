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
var WaveformLines_exports = {};
__export(WaveformLines_exports, {
  default: () => WaveformLines_default
});
module.exports = __toCommonJS(WaveformLines_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const WaveformLinesSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M224 96H224C206.327 96 192 110.327 192 128V384C192 401.673 206.327 416 224 416H224C241.673 416 256 401.673 256 384V128C256 110.327 241.673 96 224 96ZM32 224H32C14.327 224 0 238.327 0 256V256C0 273.673 14.327 288 32 288H32C49.673 288 64 273.673 64 256V256C64 238.327 49.673 224 32 224ZM320 0H320C302.327 0 288 14.327 288 32V480C288 497.673 302.327 512 320 512H320C337.673 512 352 497.673 352 480V32C352 14.327 337.673 0 320 0ZM128 192H128C110.327 192 96 206.327 96 224V288C96 305.673 110.327 320 128 320H128C145.673 320 160 305.673 160 288V224C160 206.327 145.673 192 128 192ZM608 224H608C590.327 224 576 238.327 576 256V256C576 273.673 590.327 288 608 288H608C625.673 288 640 273.673 640 256V256C640 238.327 625.673 224 608 224ZM416 128H416C398.327 128 384 142.327 384 160V352C384 369.673 398.327 384 416 384H416C433.673 384 448 369.673 448 352V160C448 142.327 433.673 128 416 128ZM512 64H512C494.327 64 480 78.327 480 96V416C480 433.673 494.327 448 512 448H512C529.673 448 544 433.673 544 416V96C544 78.327 529.673 64 512 64Z" })
  }
));
WaveformLinesSolid.displayName = "WaveformLinesSolid";
var WaveformLines_default = WaveformLinesSolid;
