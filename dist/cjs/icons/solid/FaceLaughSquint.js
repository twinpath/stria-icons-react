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
var FaceLaughSquint_exports = {};
__export(FaceLaughSquint_exports, {
  default: () => FaceLaughSquint_default
});
module.exports = __toCommonJS(FaceLaughSquint_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FaceLaughSquintSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 16C123.461 16 16 123.419 16 256S123.461 496 256 496S496 388.581 496 256S388.539 16 256 16ZM289.785 169.75L369.828 121.75C381.453 114.75 393.805 129.375 385.207 139.75L351.543 180L385.207 220.25C393.926 230.75 381.332 245.125 369.828 238.25L289.785 190.25C282.156 185.625 282.156 174.375 289.785 169.75ZM126.793 139.75C118.195 129.375 130.547 114.75 142.172 121.75L222.215 169.75C229.965 174.375 229.965 185.625 222.215 190.25L142.172 238.25C130.668 245.125 118.195 230.75 126.793 220.25L160.457 180L126.793 139.75ZM406.883 306C398.043 377 337.375 432 263.992 432H248.008C174.625 432 113.957 377 105.117 306C103.906 296.5 111.414 288 120.98 288H391.02C400.586 288 408.094 296.375 406.883 306Z" })
  }
));
FaceLaughSquintSolid.displayName = "FaceLaughSquintSolid";
var FaceLaughSquint_default = FaceLaughSquintSolid;
