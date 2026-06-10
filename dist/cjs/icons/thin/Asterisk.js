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
var Asterisk_exports = {};
__export(Asterisk_exports, {
  default: () => Asterisk_default
});
module.exports = __toCommonJS(Asterisk_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const AsteriskThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M412.067 357.078C415.82 359.281 417.112 364.172 414.958 368C413.482 370.562 410.837 372 408.13 372C406.776 372 405.423 371.656 404.193 370.922L231.875 269.85V472C231.875 476.422 228.337 480 224 480S216.126 476.422 216.126 472V269.85L43.808 370.922C42.577 371.656 41.224 372 39.87 372C37.164 372 34.518 370.562 33.041 368C30.889 364.172 32.18 359.281 35.933 357.078L208.263 256L35.933 154.922C32.18 152.719 30.889 147.828 33.041 144C35.256 140.141 40.086 138.875 43.808 141.078L216.126 242.15V40C216.126 35.578 219.663 32 224 32S231.875 35.578 231.875 40V242.15L404.193 141.078C407.884 138.875 412.713 140.141 414.958 144C417.112 147.828 415.82 152.719 412.067 154.922L239.738 256L412.067 357.078Z" })
  }
));
AsteriskThin.displayName = "AsteriskThin";
var Asterisk_default = AsteriskThin;
