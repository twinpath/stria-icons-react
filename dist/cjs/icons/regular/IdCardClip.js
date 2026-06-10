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
var IdCardClip_exports = {};
__export(IdCardClip_exports, {
  default: () => IdCardClip_default
});
module.exports = __toCommonJS(IdCardClip_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const IdCardClipRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 128H320C337.674 128 352 113.672 352 96V32C352 14.326 337.674 0 320 0H256C238.326 0 224 14.326 224 32V96C224 113.672 238.326 128 256 128ZM288 304C323.346 304 352 275.346 352 240C352 204.652 323.346 176 288 176S224 204.652 224 240C224 275.346 252.654 304 288 304ZM512 64H384V112H512C520.822 112 528 119.178 528 128V448C528 456.822 520.822 464 512 464H64C55.178 464 48 456.822 48 448V128C48 119.178 55.178 112 64 112H192V64H64C28.654 64 0 92.654 0 128V448C0 483.346 28.654 512 64 512H512C547.346 512 576 483.346 576 448V128C576 92.654 547.346 64 512 64ZM192 432H384C392.836 432 400 424.836 400 416C400 371.816 364.184 336 320 336H256C211.816 336 176 371.816 176 416C176 424.836 183.164 432 192 432Z" })
  }
));
IdCardClipRegular.displayName = "IdCardClipRegular";
var IdCardClip_default = IdCardClipRegular;
