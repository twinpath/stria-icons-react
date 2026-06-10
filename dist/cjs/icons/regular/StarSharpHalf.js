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
const StarSharpHalfRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M270.719 12.566L215.83 181.641H38.225C20.608 181.641 13.279 204.182 27.527 214.543L171.227 319.035L116.338 488.109C112.196 500.873 122.327 512 133.684 512C137.237 512 140.911 510.91 144.303 508.443L274.822 413.535C283.103 407.514 288.002 397.893 288.002 387.654V15.761C288.002 5.991 273.937 3.063 270.802 12.316C270.774 12.399 270.746 12.483 270.719 12.566ZM218.248 293.879L129.907 229.641H240.002V379.506L190.338 415.621L224.055 311.76C226.196 305.17 223.85 297.953 218.248 293.879Z" })
  }
));
StarSharpHalfRegular.displayName = "StarSharpHalfRegular";
var StarSharpHalf_default = StarSharpHalfRegular;
