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
const IdCardClipSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 128H320C337.674 128 352 113.672 352 96V32C352 14.328 337.674 0 320 0H256C238.326 0 224 14.328 224 32V96C224 113.672 238.326 128 256 128ZM528 64H384V112C384 138.508 362.51 160 336 160H240C213.49 160 192 138.508 192 112V64H48C21.49 64 0 85.492 0 112V464C0 490.508 21.49 512 48 512H528C554.51 512 576 490.508 576 464V112C576 85.492 554.51 64 528 64ZM288 224C323.346 224 352 252.656 352 288S323.346 352 288 352S224 323.344 224 288S252.654 224 288 224ZM384 448H192C183.164 448 176 440.836 176 432C176 405.492 197.49 384 224 384H352C378.51 384 400 405.492 400 432C400 440.836 392.836 448 384 448Z" })
  }
));
IdCardClipSolid.displayName = "IdCardClipSolid";
var IdCardClip_default = IdCardClipSolid;
