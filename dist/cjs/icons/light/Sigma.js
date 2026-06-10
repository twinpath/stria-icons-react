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
var Sigma_exports = {};
__export(Sigma_exports, {
  default: () => Sigma_default
});
module.exports = __toCommonJS(Sigma_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SigmaLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 384 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M336 144V80H66.496L220.217 245.656C225.248 251.625 225.248 260.375 220.217 266.344L66.496 432H336V368C336 359.156 343.156 352 352 352C360.844 352 368 359.156 368 368V448C368 456.844 360.844 464 352 464H31.995C25.777 464 20.089 460.375 17.495 454.719C14.87 449.094 15.745 442.406 19.777 437.656L187.029 256L19.777 74.344C15.745 69.594 14.87 62.906 17.495 57.281C20.089 51.625 25.777 48 31.995 48H352C360.844 48 368 55.156 368 64V144C368 152.844 360.844 160 352 160C343.156 160 336 152.844 336 144Z" })
  }
));
SigmaLight.displayName = "SigmaLight";
var Sigma_default = SigmaLight;
