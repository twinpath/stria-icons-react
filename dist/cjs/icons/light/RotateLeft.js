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
var RotateLeft_exports = {};
__export(RotateLeft_exports, {
  default: () => RotateLeft_default
});
module.exports = __toCommonJS(RotateLeft_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const RotateLeftLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 32C203.781 32 152.938 50.375 112.875 83.688C111.625 84.727 110.793 86.031 109.945 87.32L59.312 36.688C54.75 32.125 47.812 30.812 41.875 33.219C35.906 35.688 32 41.531 32 48V176C32 184.844 39.156 192 48 192H176C182.469 192 188.312 188.094 190.781 182.125S191.875 169.25 187.313 164.687L131.771 109.148C132.268 108.82 132.848 108.703 133.312 108.313C167.688 79.719 211.25 64 256 64C361.875 64 448 150.125 448 256S361.875 448 256 448C196.531 448 141.344 421.094 104.625 374.125C99.156 367.156 89.125 365.906 82.156 371.406C75.219 376.844 74 386.906 79.438 393.875C122.25 448.594 186.625 480 256 480C379.5 480 480 379.5 480 256S379.5 32 256 32ZM64 160V86.625L137.375 160H64Z" })
  }
));
RotateLeftLight.displayName = "RotateLeftLight";
var RotateLeft_default = RotateLeftLight;
