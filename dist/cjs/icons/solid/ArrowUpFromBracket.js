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
var ArrowUpFromBracket_exports = {};
__export(ArrowUpFromBracket_exports, {
  default: () => ArrowUpFromBracket_default
});
module.exports = __toCommonJS(ArrowUpFromBracket_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowUpFromBracketSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 351.967V415.967C384 433.641 369.672 447.967 352 447.967H96C78.328 447.967 64 433.641 64 415.967V351.967C64 334.293 49.672 319.967 32 319.967S0 334.293 0 351.967V415.967C0 468.986 42.98 511.967 96 511.967H352C405.02 511.967 448 468.986 448 415.967V351.967C448 334.293 433.672 319.967 416 319.967S384 334.293 384 351.967ZM201.375 9.342L73.375 137.342C60.867 149.85 60.883 170.1 73.375 182.592C85.875 195.092 106.125 195.092 118.625 182.592L192 109.217V319.967C192 337.654 206.312 351.967 224 351.967S256 337.654 256 319.967V109.217L329.375 182.592C341.875 195.092 362.125 195.092 374.625 182.592S387.125 149.842 374.625 137.342L246.625 9.342C234.125 -3.158 213.875 -3.158 201.375 9.342Z" })
  }
));
ArrowUpFromBracketSolid.displayName = "ArrowUpFromBracketSolid";
var ArrowUpFromBracket_default = ArrowUpFromBracketSolid;
