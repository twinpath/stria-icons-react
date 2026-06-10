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
var EngineWarning_exports = {};
__export(EngineWarning_exports, {
  default: () => EngineWarning_default
});
module.exports = __toCommonJS(EngineWarning_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const EngineWarningRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M288 384C270.375 384 256 398.375 256 416C256 433.75 270.375 448 288 448S320 433.75 320 416C320 398.375 305.625 384 288 384ZM287.998 352C301.248 352 311.998 341.25 311.998 328V216C311.998 202.75 301.248 192 287.998 192S263.998 202.75 263.998 216V328C263.998 341.25 274.748 352 287.998 352ZM592 192H560C533.49 192 512 213.49 512 240V256H496V207.98C496 203.125 493.793 198.531 489.999 195.5L418.723 138.498C410.223 131.703 399.664 128 388.781 128H312V112H376C389.254 112 400 101.254 400 88C400 74.744 389.254 64 376 64H200C186.746 64 176 74.744 176 88C176 101.254 186.746 112 200 112H264V128H128C101.49 128 80 149.49 80 176V232H48V152C48 138.744 37.254 128 24 128S0 138.744 0 152V360C0 373.254 10.746 384 24 384S48 373.254 48 360V280H80V336C80 362.51 101.49 384 128 384H169.375L219.32 433.945C222.289 436.912 225.695 439.273 229.264 441.344C225.902 433.566 224 425.012 224 416C224 403.129 227.879 391.195 234.418 381.16L189.258 336H128V176H388.762L448 223.373V400L349.738 400.004C351.07 405.146 352 410.441 352 416C352 427.717 348.621 438.555 343.123 448H448C474.51 448 496 426.51 496 400V384H512V400C512 426.51 533.49 448 560 448H592C618.51 448 640 426.51 640 400V240C640 213.49 618.51 192 592 192ZM592 400H560V336H496V304H560V240H592V400Z" })
  }
));
EngineWarningRegular.displayName = "EngineWarningRegular";
var EngineWarning_default = EngineWarningRegular;
