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
var ImageSlash_exports = {};
__export(ImageSlash_exports, {
  default: () => ImageSlash_default
});
module.exports = __toCommonJS(ImageSlash_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ImageSlashSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M630.812 469.109L574.865 425.26C575.322 422.195 575.986 419.195 575.986 416V96C575.986 60.654 547.331 32 511.986 32H127.986C113.552 32 100.429 36.98 89.777 45.059L38.812 5.113C28.343 -3.059 13.312 -1.246 5.109 9.191C-3.063 19.629 -1.235 34.723 9.187 42.895L601.187 506.891C605.593 510.328 610.796 512 615.984 512C623.109 512 630.156 508.844 634.89 502.812C643.062 492.375 641.234 477.281 630.812 469.109ZM223.14 149.586L158.853 99.197C164.169 97.146 169.933 96 175.986 96C202.496 96 223.986 117.492 223.986 144C223.986 145.945 223.365 147.701 223.14 149.586ZM331.234 234.307L354.687 199.125C357.654 194.672 362.65 192 367.999 192S378.345 194.672 381.312 199.125L485.236 355.01L331.234 234.307ZM145.999 416C139.978 416 134.466 412.621 131.738 407.25C129.007 401.883 129.523 395.438 133.072 390.574L203.072 294.574C206.083 290.441 210.888 288 215.999 288S225.915 290.441 228.927 294.574L261.382 339.086L277.814 314.439L63.986 146.846V416C63.986 451.346 92.64 480 127.986 480H489.048L407.392 416H145.999Z" })
  }
));
ImageSlashSolid.displayName = "ImageSlashSolid";
var ImageSlash_default = ImageSlashSolid;
