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
var Bomb_exports = {};
__export(Bomb_exports, {
  default: () => Bomb_default
});
module.exports = __toCommonJS(Bomb_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BombSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M390.477 144.148L403.312 131.313C409.562 125.063 409.562 114.938 403.312 108.688S386.937 102.438 380.688 108.688L367.852 121.523L332.646 86.32C324.219 77.893 310.555 77.893 302.127 86.32L279.547 108.9C257.207 100.703 233.182 96 208 96C93.125 96 0 189.125 0 304S93.125 512 208 512S416 418.875 416 304C416 278.818 411.297 254.791 403.1 232.451L425.68 209.873C434.107 201.445 434.107 187.781 425.68 179.352L390.477 144.148ZM208 192C146.25 192 96 242.25 96 304C96 312.844 88.844 320 80 320S64 312.844 64 304C64 224.594 128.594 160 208 160C216.844 160 224 167.156 224 176S216.844 192 208 192ZM509.11 59.226L469.352 42.65L452.773 2.901C450.818 -1.031 445.114 -0.902 443.224 2.901L426.645 42.65L386.889 59.226C382.972 61.187 383.103 66.881 386.889 68.776L426.645 85.352L443.224 125.099C445.1 128.874 450.805 129.059 452.773 125.099L469.352 85.352L509.11 68.776C512.886 66.888 513.04 61.191 509.11 59.226Z" })
  }
));
BombSolid.displayName = "BombSolid";
var Bomb_default = BombSolid;
