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
var LocationQuestion_exports = {};
__export(LocationQuestion_exports, {
  default: () => LocationQuestion_default
});
module.exports = __toCommonJS(LocationQuestion_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const LocationQuestionSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M192 0C86.375 0 0 86.37 0 191.988C0 268.734 25.625 291.232 172.75 502.344C182.375 515.219 201.625 515.219 211.25 502.344C358.375 291.232 384 268.734 384 191.988C384 86.37 297.625 0 192 0ZM192 351.979C174.375 351.979 160 337.604 160 319.98S174.375 287.982 192 287.982S224 302.357 224 319.98S209.625 351.979 192 351.979ZM218.625 238.735V240.11C218.625 248.86 211.625 255.984 202.875 255.984H186.5C177.75 255.984 170.625 248.86 170.625 240.11V223.986C170.625 214.862 175.875 206.612 184 202.488C214.625 187.239 234.625 175.989 234.625 159.99C234.625 140.616 220.625 119.993 194.625 119.993C176.75 119.993 161.5 131.867 156.5 148.116C154.375 154.991 148.375 159.99 141.125 159.99H124.25C113.999 159.99 106.625 150.491 108.875 140.491C117.75 101.244 152.875 71.996 194.625 71.996C249.75 71.996 282.625 116.743 282.625 159.99C282.625 200.988 249.875 222.486 218.625 238.735Z" })
  }
));
LocationQuestionSolid.displayName = "LocationQuestionSolid";
var LocationQuestion_default = LocationQuestionSolid;
