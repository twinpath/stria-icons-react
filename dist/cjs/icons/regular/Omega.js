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
var Omega_exports = {};
__export(Omega_exports, {
  default: () => Omega_default
});
module.exports = __toCommonJS(Omega_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const OmegaRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448 456C448 469.25 437.25 480 424 480H320C306.75 480 296 469.25 296 456V431.5C296 422.75 300.781 414.656 308.469 410.469C364.938 379.5 400 320.312 400 256C400 158.969 321.031 80 224 80S48 158.969 48 256C48 320.312 83.062 379.5 139.531 410.469C147.219 414.656 152 422.75 152 431.5V456C152 469.25 141.25 480 128 480H24C10.75 480 0 469.25 0 456S10.75 432 24 432H85.406C32 389.906 0 325.312 0 256C0 132.5 100.5 32 224 32S448 132.5 448 256C448 325.312 416 389.906 362.594 432H424C437.25 432 448 442.75 448 456Z" })
  }
));
OmegaRegular.displayName = "OmegaRegular";
var Omega_default = OmegaRegular;
