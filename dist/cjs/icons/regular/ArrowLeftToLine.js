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
var ArrowLeftToLine_exports = {};
__export(ArrowLeftToLine_exports, {
  default: () => ArrowLeftToLine_default
});
module.exports = __toCommonJS(ArrowLeftToLine_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowLeftToLineRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M48.032 424V88C48.032 74.75 37.275 64 24.016 64S0 74.75 0 88V424C0 437.25 10.757 448 24.016 448S48.032 437.25 48.032 424ZM272.321 366.531L180.346 280H423.984C437.243 280 448 269.25 448 256C448 242.75 437.243 232 423.984 232H180.346L272.321 145.469C277.356 140.75 279.889 134.375 279.889 128C279.889 122.094 277.731 116.188 273.353 111.563C264.285 101.906 249.087 101.438 239.424 110.531L103.334 238.531C93.64 247.594 93.64 264.406 103.334 273.469L239.424 401.469C249.087 410.562 264.285 410.094 273.353 400.437C282.453 390.812 282.015 375.625 272.321 366.531Z" })
  }
));
ArrowLeftToLineRegular.displayName = "ArrowLeftToLineRegular";
var ArrowLeftToLine_default = ArrowLeftToLineRegular;
