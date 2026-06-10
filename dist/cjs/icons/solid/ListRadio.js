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
var ListRadio_exports = {};
__export(ListRadio_exports, {
  default: () => ListRadio_default
});
module.exports = __toCommonJS(ListRadio_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ListRadioSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M64 192C28.654 192 0 220.656 0 256S28.654 320 64 320C99.348 320 128 291.344 128 256S99.348 192 64 192ZM64 280C50.768 280 40 269.232 40 256C40 242.766 50.768 232 64 232C77.234 232 88 242.766 88 256C88 269.232 77.234 280 64 280ZM64 352C28.654 352 0 380.656 0 416S28.654 480 64 480C99.348 480 128 451.344 128 416S99.348 352 64 352ZM64 440C50.768 440 40 429.232 40 416C40 402.766 50.768 392 64 392C77.234 392 88 402.766 88 416C88 429.232 77.234 440 64 440ZM99.783 42.932C89.568 36.031 77.254 32 64 32C28.654 32 0 60.656 0 96S28.654 160 64 160C77.254 160 89.568 155.971 99.783 149.068C106.594 144.469 112.471 138.592 117.07 131.781C123.971 121.566 128 109.254 128 96S123.971 70.434 117.07 60.219C112.471 53.41 106.594 47.533 99.783 42.932ZM192 128H480C497.674 128 512 113.674 512 96S497.674 64 480 64H192C174.326 64 160 78.326 160 96S174.326 128 192 128ZM480 224H192C174.326 224 160 238.326 160 256S174.326 288 192 288H480C497.674 288 512 273.674 512 256S497.674 224 480 224ZM480 384H192C174.326 384 160 398.326 160 416S174.326 448 192 448H480C497.674 448 512 433.674 512 416S497.674 384 480 384Z" })
  }
));
ListRadioSolid.displayName = "ListRadioSolid";
var ListRadio_default = ListRadioSolid;
