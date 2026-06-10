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
const IdCardClipDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M528 64H352V128H368C377.6 128 384 134.398 384 144S377.6 160 368 160H208C198.4 160 192 153.602 192 144S198.4 128 208 128H224V64H48C22.4 64 0 86.398 0 112V464C0 489.602 22.4 512 48 512H528C553.6 512 576 489.602 576 464V112C576 86.398 553.6 64 528 64ZM288 224C323.346 224 352 252.656 352 288S323.346 352 288 352S224 323.344 224 288S252.654 224 288 224ZM384 448H192C183.164 448 176 440.836 176 432C176 405.492 197.49 384 224 384H352C378.51 384 400 405.492 400 432C400 440.836 392.836 448 384 448Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M352 32C352 12.797 339.199 0 320 0H256C236.801 0 224 12.797 224 32V128H352V32ZM288 352C323.346 352 352 323.344 352 288S323.346 224 288 224S224 252.656 224 288S252.654 352 288 352ZM352 384H224C197.49 384 176 405.492 176 432C176 440.836 183.164 448 192 448H384C392.836 448 400 440.836 400 432C400 405.492 378.51 384 352 384Z" })
    ]
  }
));
IdCardClipDuotone.displayName = "IdCardClipDuotone";
var IdCardClip_default = IdCardClipDuotone;
