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
var GaugeMed_exports = {};
__export(GaugeMed_exports, {
  default: () => GaugeMed_default
});
module.exports = __toCommonJS(GaugeMed_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const GaugeMedSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M288 32C129 32 0 161 0 320C0 372.75 14.25 422.25 39 464.75C44.625 474.375 55.375 480 66.5 480H509.5C520.625 480 531.375 474.375 537 464.75C561.75 422.25 576 372.75 576 320C576 161 447 32 288 32ZM96 384C78.375 384 64 369.625 64 352S78.375 320 96 320S128 334.375 128 352S113.625 384 96 384ZM144 224C126.375 224 112 209.625 112 192S126.375 160 144 160S176 174.375 176 192S161.625 224 144 224ZM343.125 416H232.875C227.375 406.5 224 395.75 224 384C224 357.125 240.5 334.25 264 324.75V128C264 114.75 274.75 104 288 104S312 114.75 312 128V324.75C335.5 334.25 352 357.125 352 384C352 395.75 348.625 406.5 343.125 416ZM400 192C400 174.375 414.375 160 432 160S464 174.375 464 192S449.625 224 432 224S400 209.625 400 192ZM480 384C462.375 384 448 369.625 448 352S462.375 320 480 320S512 334.375 512 352S497.625 384 480 384Z" })
  }
));
GaugeMedSolid.displayName = "GaugeMedSolid";
var GaugeMed_default = GaugeMedSolid;
