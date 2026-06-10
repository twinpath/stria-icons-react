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
var ArrowUpToLine_exports = {};
__export(ArrowUpToLine_exports, {
  default: () => ArrowUpToLine_default
});
module.exports = __toCommonJS(ArrowUpToLine_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowUpToLineRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M24 80.032H360C373.25 80.032 384 69.275 384 56.016S373.25 32 360 32H24C10.75 32 0 42.757 0 56.016S10.75 80.032 24 80.032ZM81.469 304.173L168 212.12V455.964C168 469.234 178.75 480 192 480S216 469.234 216 455.964V212.12L302.531 304.173C307.25 309.212 313.625 311.747 320 311.747C325.906 311.747 331.812 309.587 336.438 305.206C346.094 296.129 346.562 280.919 337.469 271.248L209.469 135.043C200.406 125.341 183.594 125.341 174.531 135.043L46.531 271.248C37.438 280.919 37.906 296.129 47.563 305.206C57.188 314.313 72.375 313.875 81.469 304.173Z" })
  }
));
ArrowUpToLineRegular.displayName = "ArrowUpToLineRegular";
var ArrowUpToLine_default = ArrowUpToLineRegular;
