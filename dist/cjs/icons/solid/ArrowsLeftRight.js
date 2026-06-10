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
var ArrowsLeftRight_exports = {};
__export(ArrowsLeftRight_exports, {
  default: () => ArrowsLeftRight_default
});
module.exports = __toCommonJS(ArrowsLeftRight_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowsLeftRightSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M502.625 278.625L406.625 374.625C400.375 380.875 392.187 384 384 384S367.625 380.875 361.375 374.625C348.875 362.125 348.875 341.875 361.375 329.375L402.75 288H109.25L150.625 329.375C163.125 341.875 163.125 362.125 150.625 374.625C144.375 380.875 136.187 384 128 384S111.625 380.875 105.375 374.625L9.375 278.625C-3.125 266.125 -3.125 245.875 9.375 233.375L105.375 137.375C117.875 124.875 138.125 124.875 150.625 137.375S163.125 170.125 150.625 182.625L109.25 224H402.75L361.375 182.625C348.875 170.125 348.875 149.875 361.375 137.375S394.125 124.875 406.625 137.375L502.625 233.375C515.125 245.875 515.125 266.125 502.625 278.625Z" })
  }
));
ArrowsLeftRightSolid.displayName = "ArrowsLeftRightSolid";
var ArrowsLeftRight_default = ArrowsLeftRightSolid;
