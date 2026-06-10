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
var FilmSlash_exports = {};
__export(FilmSlash_exports, {
  default: () => FilmSlash_default
});
module.exports = __toCommonJS(FilmSlash_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FilmSlashLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M633.923 483.436L25.921 3.42C18.984 -2.033 8.921 -0.83 3.437 6.061C-2.032 12.998 -0.845 23.061 6.077 28.545L614.079 508.562C617.017 510.875 620.517 512 623.985 512C628.72 512 633.407 509.906 636.564 505.922C642.032 498.984 640.845 488.92 633.923 483.436ZM447.999 64V275.486L479.999 300.75V272H543.999V351.279L575.999 376.543V96C575.999 60.654 547.345 32 511.999 32H139.591L180.122 64H447.999ZM479.999 64H511.999C529.644 64 543.999 78.355 543.999 96V144H479.999V64ZM479.999 176H543.999V240H479.999V176ZM191.999 448V236.48L159.999 211.217V240H95.999V160.689L63.999 135.426V416C63.999 451.346 92.653 480 127.999 480H500.446L459.913 448H191.999ZM159.999 448H127.999C110.355 448 95.999 433.645 95.999 416V368H159.999V448ZM159.999 336H95.999V272H159.999V336Z" })
  }
));
FilmSlashLight.displayName = "FilmSlashLight";
var FilmSlash_default = FilmSlashLight;
