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
var ArrowsFromLine_exports = {};
__export(ArrowsFromLine_exports, {
  default: () => ArrowsFromLine_default
});
module.exports = __toCommonJS(ArrowsFromLine_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowsFromLineSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M160 127.969C168.188 127.969 176.375 124.844 182.625 118.594L192 109.219V159.969C192 177.66 206.312 191.977 224 191.977S256 177.66 256 159.969V109.219L265.375 118.594C271.625 124.844 279.812 127.969 288 127.969C306.279 127.969 320 113.023 320 95.969C320 87.777 316.875 79.59 310.625 73.34L246.666 9.375C238.621 1.301 228.943 0 224 0C219.102 0 209.404 1.273 201.334 9.375L137.375 73.34C131.125 79.59 128 87.777 128 95.969C128 113.023 141.73 127.969 160 127.969ZM288 383.988C279.812 383.988 271.625 387.117 265.375 393.367L256 402.742V351.984C256 334.297 241.688 319.984 224 319.984S192 334.297 192 351.984V402.742L182.625 393.367C176.375 387.117 168.188 383.988 160 383.988C141.721 383.988 128 398.938 128 415.992C128 424.18 131.125 432.367 137.375 438.617L201.334 502.586C209.344 510.625 219.145 512 224 512C228.848 512 238.654 510.629 246.666 502.586L310.625 438.617C316.875 432.367 320 424.18 320 415.992C320 398.938 306.27 383.988 288 383.988ZM416 223.977H32C14.312 223.977 0 238.289 0 255.977S14.312 287.977 32 287.977H416C433.688 287.977 448 273.664 448 255.977S433.688 223.977 416 223.977Z" })
  }
));
ArrowsFromLineSolid.displayName = "ArrowsFromLineSolid";
var ArrowsFromLine_default = ArrowsFromLineSolid;
