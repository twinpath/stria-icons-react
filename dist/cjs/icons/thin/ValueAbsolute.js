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
var ValueAbsolute_exports = {};
__export(ValueAbsolute_exports, {
  default: () => ValueAbsolute_default
});
module.exports = __toCommonJS(ValueAbsolute_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ValueAbsoluteThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M8 32C3.594 32 0 35.594 0 40V472C0 476.406 3.594 480 8 480S16 476.406 16 472V40C16 35.594 12.406 32 8 32ZM504 32C499.594 32 496 35.594 496 40V472C496 476.406 499.594 480 504 480S512 476.406 512 472V40C512 35.594 508.406 32 504 32ZM381.656 130.344C378.531 127.219 373.469 127.219 370.344 130.344L256 244.688L141.656 130.344C138.531 127.219 133.469 127.219 130.344 130.344S127.219 138.531 130.344 141.656L244.688 256L130.344 370.344C127.219 373.469 127.219 378.531 130.344 381.656C131.906 383.219 133.938 384 136 384S140.094 383.219 141.656 381.656L256 267.312L370.344 381.656C371.906 383.219 373.938 384 376 384S380.094 383.219 381.656 381.656C384.781 378.531 384.781 373.469 381.656 370.344L267.312 256L381.656 141.656C384.781 138.531 384.781 133.469 381.656 130.344Z" })
  }
));
ValueAbsoluteThin.displayName = "ValueAbsoluteThin";
var ValueAbsolute_default = ValueAbsoluteThin;
