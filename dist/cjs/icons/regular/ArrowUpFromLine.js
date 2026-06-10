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
var ArrowUpFromLine_exports = {};
__export(ArrowUpFromLine_exports, {
  default: () => ArrowUpFromLine_default
});
module.exports = __toCommonJS(ArrowUpFromLine_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowUpFromLineRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M360 431.968H24C10.75 431.968 0 442.725 0 455.984C0 469.243 10.75 480 24 480H360C373.25 480 384 469.243 384 455.984C384 442.725 373.25 431.968 360 431.968ZM81.469 208.257L168 116.282V359.92C168 373.179 178.75 383.936 192 383.936S216 373.179 216 359.92V116.282L302.531 208.257C307.25 213.292 313.625 215.825 320 215.825C325.906 215.825 331.812 213.667 336.438 209.289C346.094 200.221 346.562 185.023 337.469 175.361L209.469 39.27C200.406 29.577 183.594 29.577 174.531 39.27L46.531 175.361C37.438 185.023 37.906 200.221 47.562 209.289C57.188 218.389 72.375 217.951 81.469 208.257Z" })
  }
));
ArrowUpFromLineRegular.displayName = "ArrowUpFromLineRegular";
var ArrowUpFromLine_default = ArrowUpFromLineRegular;
