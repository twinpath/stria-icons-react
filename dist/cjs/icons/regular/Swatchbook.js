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
var Swatchbook_exports = {};
__export(Swatchbook_exports, {
  default: () => Swatchbook_default
});
module.exports = __toCommonJS(Swatchbook_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SwatchbookRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 512 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M112 424C125.25 424 136 413.25 136 400S125.25 376 112 376S88 386.75 88 400S98.75 424 112 424ZM480 288H382.375L451.375 219C463.875 206.5 463.875 186.25 451.375 173.75L338.25 60.625C332 54.375 323.875 51.25 315.625 51.25C307.5 51.25 299.25 54.375 293 60.625L224 129.625V32C224 14.375 209.625 0 192 0H32C14.375 0 0 14.375 0 32V400C0 461.875 50.125 512 112 512H480C497.625 512 512 497.625 512 480V320C512 302.375 497.625 288 480 288ZM176 400C176 404.365 175.541 407.873 174.889 411.018C169.643 441.08 143.561 464 112 464C76.666 464 48 435.332 48 400V304H176V400ZM176 256H48V176H176V256ZM176 128H48V48H176V128ZM224 197.5L315.625 105.875L406.125 196.375L224 378.5V197.5ZM464 464H206.375L334.375 336H464V464Z" })
  }
));
SwatchbookRegular.displayName = "SwatchbookRegular";
var Swatchbook_default = SwatchbookRegular;
