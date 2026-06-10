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
var AppleCore_exports = {};
__export(AppleCore_exports, {
  default: () => AppleCore_default
});
module.exports = __toCommonJS(AppleCore_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const AppleCoreSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M287.951 32V0H255.951C211.77 0 175.947 35.816 175.947 80V112H207.949C252.135 112 287.951 76.184 287.951 32ZM287.938 304C287.938 241.072 321.066 186.018 370.729 154.902C353.85 138.357 331.914 128 303.951 128C271.951 128 223.949 144 191.961 160C159.947 144 111.945 128.006 79.945 128.004C51.881 128.002 29.893 138.291 13 154.812C62.744 185.91 95.938 241.012 95.938 304C95.938 364.107 65.76 417.117 19.775 448.869C47.256 486.23 84.289 512 127.939 512C159.939 512 175.939 496 191.941 496C207.941 496 223.941 512 255.943 512C299.701 512 336.779 486.346 364.262 448.99C318.186 417.252 287.938 364.18 287.938 304Z" })
  }
));
AppleCoreSolid.displayName = "AppleCoreSolid";
var AppleCore_default = AppleCoreSolid;
