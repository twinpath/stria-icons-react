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
var StarSharpHalf_exports = {};
__export(StarSharpHalf_exports, {
  default: () => StarSharpHalf_default
});
module.exports = __toCommonJS(StarSharpHalf_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const StarSharpHalfLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M288.013 15.094C288.013 5.075 273.966 2.807 270.813 12.316L270.73 12.566L215.841 181.64H38.22C20.607 181.64 13.28 204.174 27.525 214.532L171.237 319.034L116.349 488.108C112.206 500.871 122.337 511.998 133.695 511.998C137.247 511.998 140.921 510.909 144.314 508.442L274.832 413.534C283.113 407.512 288.013 397.892 288.013 387.653V15.094ZM256.013 387.653L159.921 457.528L205.26 317.866C207.399 311.277 205.055 304.06 199.452 299.985L80.708 213.64H227.469C234.402 213.64 240.546 209.174 242.687 202.58L256.013 161.532V387.653Z" })
  }
));
StarSharpHalfLight.displayName = "StarSharpHalfLight";
var StarSharpHalf_default = StarSharpHalfLight;
