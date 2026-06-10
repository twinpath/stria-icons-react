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
var Baby_exports = {};
__export(Baby_exports, {
  default: () => Baby_default
});
module.exports = __toCommonJS(Baby_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BabyDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M191.983 160C236.236 160 271.99 124.25 271.99 80S236.236 0 191.983 0S111.975 35.75 111.975 80S147.729 160 191.983 160ZM124.824 411.75L156.045 380.529L96.01 327.437L43.723 379.719C29.629 393.797 28.065 416.078 40.004 432L88.008 496C95.854 506.484 107.885 512 120.043 512C128.387 512 136.826 509.391 144.014 504C161.703 490.75 165.266 465.672 152.014 448L124.824 411.75ZM376.75 145C363.998 126.875 339.121 122.625 320.994 135.25L280.365 163.75C227.736 200.75 156.231 200.75 103.6 163.75L62.971 135.25C44.844 122.625 19.967 127 7.215 145C-5.41 163.125 -1.035 188 16.967 200.75L57.596 229.25C69.74 237.732 82.734 244.338 96.01 250.205V288H288.027V250.291C301.277 244.424 314.248 237.807 326.371 229.25L366.998 200.75C385.125 188 389.377 163.125 376.75 145ZM288.027 327.438L227.99 380.529L259.211 411.75L232.022 448C218.77 465.672 222.334 490.75 240.022 504C247.211 509.391 255.649 512 263.994 512C276.15 512 288.184 506.484 296.027 496L344.031 432C355.971 416.078 354.408 393.797 340.313 379.719L288.027 327.438Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M288.018 288V327.438L227.981 380.529H156.037L96 327.438V288H288.018Z" })
    ]
  }
));
BabyDuotone.displayName = "BabyDuotone";
var Baby_default = BabyDuotone;
