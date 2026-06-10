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
var FaceDizzy_exports = {};
__export(FaceDizzy_exports, {
  default: () => FaceDizzy_default
});
module.exports = __toCommonJS(FaceDizzy_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FaceDizzySolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 16C123.461 16 16 123.419 16 256S123.461 496 256 496S496 388.581 496 256S388.539 16 256 16ZM159.973 214.625L131.273 243.25C116.5 258.125 93.492 235.75 108.75 220.75L137.449 192L108.75 163.25C93.734 148.25 116.379 125.75 131.273 140.75L159.973 169.375L188.672 140.75C203.687 125.75 226.332 148.375 211.316 163.25L182.617 192L211.316 220.75C226.453 235.875 203.445 258.125 188.672 243.25L159.973 214.625ZM256 416C220.641 416 191.941 387.25 191.941 352S220.641 288 256 288S320.059 316.75 320.059 352S291.359 416 256 416ZM403.25 220.75C418.508 235.875 395.379 258.125 380.727 243.25L352.027 214.625L323.328 243.25C308.555 258.125 285.547 235.75 300.684 220.75L329.383 192L300.684 163.25C285.668 148.25 308.434 125.75 323.328 140.75L352.027 169.375L380.727 140.75C395.742 125.75 418.266 148.375 403.25 163.25L374.551 192L403.25 220.75Z" })
  }
));
FaceDizzySolid.displayName = "FaceDizzySolid";
var FaceDizzy_default = FaceDizzySolid;
