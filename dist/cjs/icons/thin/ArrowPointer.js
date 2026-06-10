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
var ArrowPointer_exports = {};
__export(ArrowPointer_exports, {
  default: () => ArrowPointer_default
});
module.exports = __toCommonJS(ArrowPointer_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowPointerThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 320 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M296.684 266.191L51.887 53.381C47.867 49.84 42.779 48 37.609 48C34.607 48 31.576 48.621 28.713 49.893C20.979 53.381 16 61.087 16 69.581V400.794C16 409.851 21.654 417.951 30.146 421.072C32.58 421.959 35.098 422.394 37.6 422.394C43.816 422.394 49.877 419.709 54.053 414.787L138.92 311.963L208.766 459.422C210.141 462.312 213.016 464 216 464C217.156 464 218.312 463.75 219.422 463.234C223.422 461.344 225.125 456.562 223.234 452.578L152.855 303.992H282.396C291.383 303.992 299.426 298.437 302.604 290.026C305.783 281.631 303.42 272.139 296.684 266.191ZM287.637 284.37C286.818 286.536 284.713 287.991 282.396 287.991H145.5C140.727 287.991 136.201 290.124 133.16 293.806L41.854 404.432C40.797 405.679 39.246 406.394 37.6 406.394C36.936 406.394 36.273 406.274 35.666 406.054C33.473 405.247 32 403.134 32 400.794V69.581C32 67.384 33.293 65.38 35.205 64.516C35.977 64.175 36.787 64.001 37.609 64.001C38.98 64.001 40.295 64.493 41.391 65.458L286.094 278.186C287.836 279.723 288.457 282.203 287.637 284.37Z" })
  }
));
ArrowPointerThin.displayName = "ArrowPointerThin";
var ArrowPointer_default = ArrowPointerThin;
