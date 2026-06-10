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
var Building_exports = {};
__export(Building_exports, {
  default: () => Building_default
});
module.exports = __toCommonJS(Building_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BuildingSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M336 0H48C21.49 0 0 21.49 0 48V480C0 497.673 14.327 512 32 512H144V432C144 405.49 165.49 384 192 384S240 405.49 240 432V512H352C369.673 512 384 497.673 384 480V48C384 21.49 362.51 0 336 0ZM160 304C160 312.836 152.836 320 144 320H112C103.164 320 96 312.836 96 304V272C96 263.162 103.164 256 112 256H144C152.836 256 160 263.162 160 272V304ZM160 208C160 216.836 152.836 224 144 224H112C103.164 224 96 216.836 96 208V176C96 167.162 103.164 160 112 160H144C152.836 160 160 167.162 160 176V208ZM160 112C160 120.836 152.836 128 144 128H112C103.164 128 96 120.836 96 112V80C96 71.162 103.164 64 112 64H144C152.836 64 160 71.162 160 80V112ZM288 304C288 312.836 280.836 320 272 320H240C231.164 320 224 312.836 224 304V272C224 263.162 231.164 256 240 256H272C280.836 256 288 263.162 288 272V304ZM288 208C288 216.836 280.836 224 272 224H240C231.164 224 224 216.836 224 208V176C224 167.162 231.164 160 240 160H272C280.836 160 288 167.162 288 176V208ZM288 112C288 120.836 280.836 128 272 128H240C231.164 128 224 120.836 224 112V80C224 71.162 231.164 64 240 64H272C280.836 64 288 71.162 288 80V112Z" })
  }
));
BuildingSolid.displayName = "BuildingSolid";
var Building_default = BuildingSolid;
