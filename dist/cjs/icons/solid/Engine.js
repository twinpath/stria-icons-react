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
var Engine_exports = {};
__export(Engine_exports, {
  default: () => Engine_default
});
module.exports = __toCommonJS(Engine_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const EngineSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M608 192H576C558.326 192 544 206.326 544 224V416C544 433.672 558.326 448 576 448H608C625.674 448 640 433.672 640 416V224C640 206.326 625.674 192 608 192ZM434.723 154.498C426.223 147.703 415.664 144 404.781 144H328V112H392C405.254 112 416 101.254 416 88C416 74.744 405.254 64 392 64H216C202.746 64 192 74.744 192 88C192 101.254 202.746 112 216 112H280V144H128C101.49 144 80 165.49 80 192V232H48V152C48 138.744 37.254 128 24 128S0 138.744 0 152V360C0 373.254 10.746 384 24 384S48 373.254 48 360V280H80V336C80 362.51 101.49 384 128 384H169.375L219.32 433.945C228.32 442.943 240.523 448 253.25 448H464C490.51 448 512 426.51 512 400V223.98C512 219.125 509.793 214.531 505.999 211.5L434.723 154.498ZM192 280C178.746 280 168 269.254 168 256C168 242.744 178.746 232 192 232S216 242.744 216 256C216 269.254 205.254 280 192 280ZM288 280C274.746 280 264 269.254 264 256C264 242.744 274.746 232 288 232S312 242.744 312 256C312 269.254 301.254 280 288 280ZM384 280C370.746 280 360 269.254 360 256C360 242.744 370.746 232 384 232S408 242.744 408 256C408 269.254 397.254 280 384 280Z" })
  }
));
EngineSolid.displayName = "EngineSolid";
var Engine_default = EngineSolid;
