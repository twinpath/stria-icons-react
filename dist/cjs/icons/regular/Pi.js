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
var Pi_exports = {};
__export(Pi_exports, {
  default: () => Pi_default
});
module.exports = __toCommonJS(Pi_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PiRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M437.312 356.032C448.344 363.375 451.312 378.282 443.969 389.313L424.344 418.75C412.156 437.063 391.719 448 369.688 448C333.469 448 304 418.531 304 382.313V112.002V112H160V284.845C160 311.251 154.156 337.907 143.094 361.938L109.781 434.063C105.75 442.844 97.062 448 88 448C84.625 448 81.188 447.281 77.938 445.781C65.906 440.25 60.656 425.969 66.219 413.938L99.5 341.844C107.656 324.094 112 304.376 112 284.845V112H24C10.746 112 0 101.256 0 88C0 74.746 10.746 64 24 64H424C437.254 64 448 74.746 448 88C448 101.256 437.254 112 424 112H352V112.002V382.313C352 392.063 359.938 400 369.688 400C375.625 400 381.125 397.063 384.406 392.125L404.031 362.688C411.375 351.688 426.281 348.719 437.312 356.032Z" })
  }
));
PiRegular.displayName = "PiRegular";
var Pi_default = PiRegular;
