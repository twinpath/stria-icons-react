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
var ShoePrints_exports = {};
__export(ShoePrints_exports, {
  default: () => ShoePrints_default
});
module.exports = __toCommonJS(ShoePrints_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ShoePrintsSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M192 159.993H224V32H192C156.625 32 128 60.623 128 95.996S156.625 159.993 192 159.993ZM0 415.978C0 451.351 28.625 479.974 64 479.974H96V351.981H64C28.625 351.981 0 380.605 0 415.978ZM337.5 287.985C302.5 287.985 261.25 301.109 232.75 319.983C208 336.357 188.25 351.981 128 351.981V479.974L185.5 495.973C211.75 503.223 238.5 509.097 265.875 510.972C298.5 513.347 331.5 511.722 363.375 504.848C472.875 481.224 512 429.227 512 383.98C512 319.983 427.875 287.985 337.5 287.985ZM491.375 7.252C459.5 0.377 426.5 -1.373 393.875 1.002C366.5 2.877 339.75 8.751 313.5 16.001L256 32V159.993C316.25 159.993 336 175.617 360.75 191.991C389.25 210.865 430.5 223.989 465.5 223.989C555.875 223.989 640 191.991 640 127.994C640 82.747 600.875 30.75 491.375 7.252Z" })
  }
));
ShoePrintsSolid.displayName = "ShoePrintsSolid";
var ShoePrints_default = ShoePrintsSolid;
