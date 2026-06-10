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
var Alien8bit_exports = {};
__export(Alien8bit_exports, {
  default: () => Alien8bit_default
});
module.exports = __toCommonJS(Alien8bit_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const Alien8bitDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M560 128H528C519.125 128 512 135.125 512 144V224H480V176C480 167.125 472.875 160 464 160H416V96H464C472.875 96 480 88.875 480 80V48C480 39.125 472.875 32 464 32H432C423.125 32 416 39.125 416 48V64H368C359.125 64 352 71.125 352 80V128H224V80C224 71.125 216.875 64 208 64H160V48C160 39.125 152.875 32 144 32H112C103.125 32 96 39.125 96 48V80C96 88.875 103.125 96 112 96H160V160H112C103.125 160 96 167.125 96 176V224H64V144C64 135.125 56.875 128 48 128H16C7.125 128 0 135.125 0 144V272C0 280.875 7.125 288 16 288H64V368C64 376.875 71.125 384 80 384H128V464C128 472.875 135.125 480 144 480H240C248.875 480 256 472.875 256 464V432C256 423.125 248.875 416 240 416H192V384H384V416H336C327.125 416 320 423.125 320 432V464C320 472.875 327.125 480 336 480H432C440.875 480 448 472.875 448 464V384H496C504.875 384 512 376.875 512 368V288H560C568.875 288 576 280.875 576 272V144C576 135.125 568.875 128 560 128ZM224 320H160V224H224V320ZM416 320H352V224H416V320Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M160 320H224V224H160V320ZM352 224V320H416V224H352Z" })
    ]
  }
));
Alien8bitDuotone.displayName = "Alien8bitDuotone";
var Alien8bit_default = Alien8bitDuotone;
