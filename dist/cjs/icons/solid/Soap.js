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
var Soap_exports = {};
__export(Soap_exports, {
  default: () => Soap_default
});
module.exports = __toCommonJS(Soap_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SoapSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M320 256C355.346 256 384 227.346 384 192C384 156.652 355.346 128 320 128S256 156.652 256 192C256 227.346 284.654 256 320 256ZM160 288C124.654 288 96 316.652 96 352C96 387.346 124.654 416 160 416H352C387.346 416 416 387.346 416 352C416 316.652 387.346 288 352 288H160ZM384 64C401.674 64 416 49.672 416 32C416 14.326 401.674 0 384 0S352 14.326 352 32C352 49.672 366.326 64 384 64ZM208 96C234.51 96 256 74.51 256 48S234.51 0 208 0S160 21.49 160 48S181.49 96 208 96ZM416 192C416 219.824 403.977 244.676 385.062 262.209C421.719 275.721 448 310.652 448 352C448 405.02 405.02 448 352 448H160C106.98 448 64 405.02 64 352S106.98 256 160 256H248.914C233.59 238.988 224 216.699 224 192H96C42.98 192 0 234.98 0 288V416C0 469.02 42.98 512 96 512H416C469.02 512 512 469.02 512 416V288C512 234.98 469.02 192 416 192Z" })
  }
));
SoapSolid.displayName = "SoapSolid";
var Soap_default = SoapSolid;
