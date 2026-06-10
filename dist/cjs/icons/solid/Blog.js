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
var Blog_exports = {};
__export(Blog_exports, {
  default: () => Blog_default
});
module.exports = __toCommonJS(Blog_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BlogSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M217.561 96.102C204.607 95.477 192.904 105.258 192.045 118.477C191.186 131.691 201.217 143.129 214.436 143.973C293.965 149.16 362.871 218.059 368.043 297.582C368.871 310.27 379.434 320.016 391.98 320.016C392.496 320.016 393.027 319.984 393.559 319.953C406.777 319.109 416.809 307.676 415.949 294.457C409.262 191.75 320.262 102.758 217.561 96.102ZM224 0C206.328 0 192 14.312 192 32S206.328 64 224 64C347.516 64 448 164.5 448 288C448 305.688 462.328 320 480 320S512 305.688 512 288C512 129.188 382.797 0 224 0ZM172.283 226.758C157.656 223.883 144.027 235.758 144.027 250.633V301.008C144.027 311.258 151.154 319.379 160.781 323.004C178.91 329.754 192.037 347.379 192.037 368C192.037 394.5 170.533 416 144.027 416C117.523 416 96.02 394.5 96.02 368V120.016C96.02 106.766 85.268 96.016 72.014 96.016H24.004C10.752 96.016 0 106.766 0 120.016V368C0 457.496 82.141 528.242 175.035 508.742C229.42 497.242 273.303 453.246 284.807 399C302.184 316.129 247.799 241.758 172.283 226.758Z" })
  }
));
BlogSolid.displayName = "BlogSolid";
var Blog_default = BlogSolid;
