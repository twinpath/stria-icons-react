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
var UpRight_exports = {};
__export(UpRight_exports, {
  default: () => UpRight_default
});
module.exports = __toCommonJS(UpRight_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const UpRightLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M25.373 370.742L93.254 438.625C99.502 444.875 107.691 448 115.881 448S132.26 444.875 138.51 438.625L264.873 312.266L326.791 374.184C333.201 380.594 341.775 384 350.498 384C354.814 384 359.166 383.164 363.31 381.449C375.842 376.258 384 364.051 384 350.484V113.508C384 104.254 380.25 95.879 374.187 89.812C368.123 83.75 359.746 80 350.488 80H113.513C99.951 80 87.744 88.156 82.549 100.688C77.365 113.207 80.234 127.629 89.816 137.207L151.734 199.125L25.373 325.492C12.875 337.984 12.877 358.25 25.373 370.742ZM48.002 348.113L174.361 221.75L196.988 199.125L174.361 176.496L112.443 114.578C112.013 114.148 111.883 113.488 112.115 112.93C112.349 112.359 112.888 112 113.513 112H350.488L352 113.508V350.484C352 351.109 351.64 351.645 351.062 351.887L349.418 351.555L287.5 289.637L264.873 267.012L242.246 289.637L115.883 415.996L48.002 348.113Z" })
  }
));
UpRightLight.displayName = "UpRightLight";
var UpRight_default = UpRightLight;
