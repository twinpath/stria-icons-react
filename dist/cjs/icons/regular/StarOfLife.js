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
var StarOfLife_exports = {};
__export(StarOfLife_exports, {
  default: () => StarOfLife_default
});
module.exports = __toCommonJS(StarOfLife_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const StarOfLifeRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M476.764 384.031C472.311 391.719 464.248 396 455.982 396C451.889 396 447.748 394.969 443.951 392.75L280 297.656V488C280 501.25 269.25 512 256 512S232 501.25 232 488V297.656L68.049 392.75C64.252 394.969 60.111 396 56.018 396C47.752 396 39.689 391.719 35.236 384.031C28.596 372.563 32.502 357.875 43.955 351.25L208.178 256L43.955 160.75C32.502 154.125 28.596 139.438 35.236 127.969C41.877 116.469 56.58 112.562 68.049 119.25L232 214.344V24C232 10.75 242.75 0 256 0S280 10.75 280 24V214.344L443.951 119.25C455.436 112.562 470.107 116.469 476.764 127.969C483.404 139.437 479.498 154.125 468.045 160.75L303.822 256L468.045 351.25C479.498 357.875 483.404 372.562 476.764 384.031Z" })
  }
));
StarOfLifeRegular.displayName = "StarOfLifeRegular";
var StarOfLife_default = StarOfLifeRegular;
