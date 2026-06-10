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
const BlogRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M216.998 0.08C204.045 -1.045 192.576 9.798 192.014 23.047C191.467 36.296 201.748 47.482 214.998 48.013C346.793 53.544 458.511 165.252 464.011 297.021C464.558 309.926 475.183 320.018 487.979 320.018C488.307 320.018 488.651 320.018 488.995 319.987C502.245 319.456 512.526 308.27 511.979 295.021C505.448 138.911 373.121 6.611 216.998 0.08ZM217.56 96.102C204.607 95.477 192.904 105.258 192.045 118.475S201.217 143.129 214.435 143.973C293.966 149.16 362.871 218.059 368.043 297.583C368.871 310.269 379.434 320.018 391.98 320.018C392.496 320.018 393.027 319.987 393.558 319.956C406.777 319.112 416.808 307.676 415.949 294.458C409.261 191.749 320.262 102.758 217.56 96.102ZM143.999 224.028H119.999C106.749 224.028 95.999 234.777 95.999 248.025C95.999 261.274 106.749 272.023 119.999 272.023H143.999C196.935 272.023 239.998 315.081 239.998 368.014S196.935 464.005 143.999 464.005S48 420.946 48 368.014V120.038C48 106.789 37.25 96.04 24 96.04S0 106.789 0 120.038V368.014C0 447.412 64.593 512 143.999 512S287.997 447.412 287.997 368.014S223.404 224.028 143.999 224.028Z" })
  }
));
BlogRegular.displayName = "BlogRegular";
var Blog_default = BlogRegular;
