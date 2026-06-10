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
const BlogDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M224.006 0C206.335 0 192.006 14.312 192.006 32S206.335 64 224.006 64C347.522 64 448.006 164.5 448.006 288C448.006 305.688 462.335 320 480.006 320S512.006 305.688 512.006 288C512.006 129.188 382.803 0 224.006 0ZM217.567 96.102C204.614 95.477 192.911 105.258 192.051 118.477C191.192 131.691 201.223 143.129 214.442 143.973C293.971 149.16 362.878 218.059 368.049 297.582C368.878 310.27 379.44 320.016 391.987 320.016C392.503 320.016 393.034 319.984 393.565 319.953C406.784 319.109 416.815 307.676 415.956 294.457C409.268 191.75 320.268 102.758 217.567 96.102Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M172.284 226.761C157.656 223.886 144.028 235.76 144.028 250.634V301.006C144.028 311.256 151.155 319.38 160.782 323.005C178.91 329.755 192.038 347.378 192.038 368.002C192.038 394.501 170.534 415.999 144.028 415.999S96.019 394.501 96.019 368.002V120.017C96.019 106.768 85.267 96.019 72.014 96.019H24.005C10.752 96.019 0 106.768 0 120.017V368.002C0 457.497 82.141 528.243 175.034 508.744C229.42 497.244 273.304 453.247 284.806 399C302.184 316.13 247.799 241.76 172.284 226.761Z" })
    ]
  }
));
BlogDuotone.displayName = "BlogDuotone";
var Blog_default = BlogDuotone;
