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
const ArrowPointerLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M311.871 277.99L39.875 37.979C35.408 34.045 29.754 32 24.012 32C20.674 32 17.307 32.691 14.125 34.104C5.531 37.979 0 46.541 0 55.98V423.998C0 434.061 6.281 443.061 15.719 446.529C18.422 447.514 21.219 447.998 24 447.998C30.906 447.998 37.641 445.014 42.281 439.545L132.461 333.438L193.373 470.5C196.029 476.469 201.873 480 208.014 480C210.17 480 212.389 479.562 214.498 478.625C222.576 475.031 226.201 465.578 222.623 457.498L161.512 319.992H295.996C305.98 319.992 314.918 313.82 318.449 304.477C321.98 295.146 319.355 284.6 311.871 277.99ZM129.09 287.99L119.506 299.268L32 402.229V73.707L274.838 287.99H129.09Z" })
  }
));
ArrowPointerLight.displayName = "ArrowPointerLight";
var ArrowPointer_default = ArrowPointerLight;
