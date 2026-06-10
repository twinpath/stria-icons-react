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
var BusSimple_exports = {};
__export(BusSimple_exports, {
  default: () => BusSimple_default
});
module.exports = __toCommonJS(BusSimple_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BusSimpleThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M352 392C374.07 392 392 374.09 392 352S374.07 312 352 312S312 329.91 312 352S329.93 392 352 392ZM352 328C365.234 328 376 338.766 376 352C376 365.232 365.234 376 352 376S328 365.232 328 352C328 338.766 338.766 328 352 328ZM224 0C99.188 0 0 35.203 0 80V416C0 433.673 14.327 448 32 448H48V504C48 508.418 51.582 512 56 512H56C60.418 512 64 508.418 64 504V448H384V504C384 508.418 387.582 512 392 512L392 512C396.418 512 400 508.418 400 504V448H422.406C438.406 448 448 435.203 448 422.406V80C448 35.203 348.812 0 224 0ZM432 422.406C432 425.725 429.996 432 422.406 432H32C23.176 432 16 424.822 16 416V272H432V422.406ZM432 256H16V112H432V256ZM432 96H16V80C16 53.275 95.129 16 224 16S432 53.275 432 80V96ZM96 392C118.07 392 136 374.09 136 352S118.07 312 96 312S56 329.91 56 352S73.93 392 96 392ZM96 328C109.234 328 120 338.766 120 352C120 365.232 109.234 376 96 376S72 365.232 72 352C72 338.766 82.766 328 96 328Z" })
  }
));
BusSimpleThin.displayName = "BusSimpleThin";
var BusSimple_default = BusSimpleThin;
