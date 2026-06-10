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
var ShareNodes_exports = {};
__export(ShareNodes_exports, {
  default: () => ShareNodes_default
});
module.exports = __toCommonJS(ShareNodes_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ShareNodesSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448 384C448 437.02 405.02 480 352 480S256 437.02 256 384C256 380.016 256.701 376.223 257.174 372.365L162.498 325.025C145.236 341.656 121.863 352 96 352C42.98 352 0 309.02 0 256S42.98 160 96 160C121.863 160 145.236 170.344 162.498 186.975L257.174 139.635C256.701 135.777 256 131.984 256 128C256 74.98 298.98 32 352 32S448 74.98 448 128S405.02 224 352 224C326.137 224 302.766 213.658 285.504 197.027L190.826 244.361C191.299 248.221 192 252.014 192 256S191.299 263.779 190.826 267.639L285.504 314.973C302.766 298.342 326.137 288 352 288C405.02 288 448 330.98 448 384Z" })
  }
));
ShareNodesSolid.displayName = "ShareNodesSolid";
var ShareNodes_default = ShareNodesSolid;
