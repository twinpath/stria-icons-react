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
var ImageLandscape_exports = {};
__export(ImageLandscape_exports, {
  default: () => ImageLandscape_default
});
module.exports = __toCommonJS(ImageLandscape_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ImageLandscapeLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M160 184C173.256 184 184 173.254 184 160S173.256 136 160 136C146.746 136 136 146.746 136 160S146.746 184 160 184ZM346.586 171.91C335.305 156.098 308.088 155.973 296.588 171.879L252.559 233.311L245.59 224.369C234.152 209.904 208.623 209.811 197.186 224.4L134.156 304.75C127.033 313.881 126.002 326.305 131.533 336.312C136.781 345.977 147.062 352 158.375 352H417.582C428.582 352 438.738 346.227 444.111 336.939C444.111 336.908 444.111 336.908 444.143 336.877C449.799 326.994 449.205 315.072 442.549 305.754L346.586 171.91ZM162.188 319.873L220.436 244.26L240.527 269.924C244.875 275.469 258.125 280.578 266.119 269.391L320.555 190.641L413.238 319.873H162.188ZM512 64H64C28.654 64 0 92.654 0 128V384C0 419.346 28.654 448 64 448H512C547.346 448 576 419.346 576 384V128C576 92.654 547.346 64 512 64ZM544 384C544 401.645 529.645 416 512 416H64C46.355 416 32 401.645 32 384V128C32 110.355 46.355 96 64 96H512C529.645 96 544 110.355 544 128V384Z" })
  }
));
ImageLandscapeLight.displayName = "ImageLandscapeLight";
var ImageLandscape_default = ImageLandscapeLight;
