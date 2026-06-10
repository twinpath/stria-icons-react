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
var Bath_exports = {};
__export(Bath_exports, {
  default: () => Bath_default
});
module.exports = __toCommonJS(Bath_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BathSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M32 384C32 412.32 44.494 437.514 64 455.086V496C64 504.836 71.164 512 80 512H112C120.836 512 128 504.836 128 496V480H384V496C384 504.836 391.164 512 400 512H432C440.836 512 448 504.836 448 496V455.086C467.506 437.514 480 412.32 480 384V352H32V384ZM496 256H96V77.25C95.969 66.453 111 60.234 118.625 67.875L132.414 81.664C123.555 108.648 129.428 134.48 144.174 153.207L144.004 153.377C137.756 159.625 137.756 169.756 144.004 176.004L155.314 187.314C161.563 193.563 171.693 193.563 177.941 187.314L283.314 81.941C289.563 75.693 289.563 65.563 283.314 59.314L272.004 48.004C265.756 41.756 255.625 41.756 249.377 48.004L249.207 48.174C230.48 33.432 204.662 27.551 177.67 36.408L163.906 22.641C149.531 8.25 129.625 0 109.25 0C66.656 0 32 34.656 32 77.25V256H16C7.164 256 0 263.164 0 272V304C0 312.836 7.164 320 16 320H496C504.836 320 512 312.836 512 304V272C512 263.164 504.836 256 496 256Z" })
  }
));
BathSolid.displayName = "BathSolid";
var Bath_default = BathSolid;
