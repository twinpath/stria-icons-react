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
const ImageLandscapeSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M528 64H48C21.49 64 0 85.49 0 112V400C0 426.51 21.49 448 48 448H528C554.51 448 576 426.51 576 400V112C576 85.49 554.51 64 528 64ZM175.984 160C193.66 160 207.984 174.328 207.984 192S193.66 224 175.984 224C158.312 224 143.984 209.672 143.984 192S158.312 160 175.984 160ZM446.109 375.551C443.32 380.754 437.898 384 432 384H144C137.977 384 132.469 380.621 129.738 375.25C127.008 369.883 127.523 363.438 131.07 358.574L201.07 262.574C204.086 258.441 208.891 256 214 256C219.109 256 223.914 258.441 226.93 262.574L249.281 293.234L312.023 199.125C314.988 194.672 319.984 192 325.336 192C330.684 192 335.68 194.672 338.648 199.125L445.312 359.125C448.586 364.035 448.891 370.348 446.109 375.551Z" })
  }
));
ImageLandscapeSolid.displayName = "ImageLandscapeSolid";
var ImageLandscape_default = ImageLandscapeSolid;
