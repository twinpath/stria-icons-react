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
var FaceGrinSquint_exports = {};
__export(FaceGrinSquint_exports, {
  default: () => FaceGrinSquint_default
});
module.exports = __toCommonJS(FaceGrinSquint_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FaceGrinSquintSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 16C123.461 16 16 123.419 16 256S123.461 496 256 496S496 388.581 496 256S388.539 16 256 16ZM289.785 197.75L369.828 149.75C381.453 142.75 393.805 157.375 385.207 167.75L351.543 208L385.207 248.25C393.926 258.75 381.332 273.125 369.828 266.25L289.785 218.25C282.156 213.625 282.156 202.375 289.785 197.75ZM126.793 167.75C118.195 157.375 130.547 142.75 142.172 149.75L222.215 197.75C229.965 202.375 229.965 213.625 222.215 218.25L142.172 266.25C130.668 273.125 118.195 258.75 126.793 248.25L160.457 208L126.793 167.75ZM256 432C195.453 432 121.465 393.75 112.141 338.75C110.203 326.75 121.586 317.125 132.848 320.75C163.121 330.5 208.047 336 256 336S348.879 330.5 379.152 320.75C390.656 317.125 401.676 327 399.859 338.75C390.535 393.75 316.547 432 256 432Z" })
  }
));
FaceGrinSquintSolid.displayName = "FaceGrinSquintSolid";
var FaceGrinSquint_default = FaceGrinSquintSolid;
