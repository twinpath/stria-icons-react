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
const Alien8bitThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M560 128.001H528C519.125 128.001 512 135.126 512 144.001V224.001H480V176.001C480 167.126 472.875 160.001 464 160.001H416V96.001H448C456.875 96.001 464 88.876 464 80.001V48.001C464 39.126 456.875 32.001 448 32.001H400C391.125 32.001 384 39.126 384 48.001V64.001H368C359.125 64.001 352 71.126 352 80.001V128.001H224V80.001C224 71.126 216.875 64.001 208 64.001H192V48.001C192 39.126 184.875 32.001 176 32.001H128C119.125 32.001 112 39.126 112 48.001V80.001C112 88.876 119.125 96.001 128 96.001H160V160.001H112C103.125 160.001 96 167.126 96 176.001V224.001H64V144.001C64 135.126 56.875 128.001 48 128.001H16C7.125 128.001 0 135.126 0 144.001V272.001C0 280.876 7.125 288.001 16 288.001H64V368.001C64 376.876 71.125 384.001 80 384.001H128V464.001C128 472.876 135.125 480.001 144 480.001H240C248.875 480.001 256 472.876 256 464.001V432.001C256 423.126 248.875 416.001 240 416.001H192V384.001H384V416.001H336C327.125 416.001 320 423.126 320 432.001V464.001C320 472.876 327.125 480.001 336 480.001H432C440.875 480.001 448 472.876 448 464.001V384.001H496C504.875 384.001 512 376.876 512 368.001V288.001H560C568.875 288.001 576 280.876 576 272.001V144.001C576 135.126 568.875 128.001 560 128.001ZM240 432.001V464.001H144V384.001H176V432.001H240ZM432 464.001H336V432.001H400V384.001H432V464.001ZM560 272.001H496V368.001H80V272.001H16V144.001H48V240.001H112V176.001H176V80.001H128V48.001H176V80.001H208V144.001H368V80.001H400V48.001H448V80.001H400V176.001H464V240.001H528V144.001H560V272.001ZM208 224.001H176C167.164 224.001 160 231.163 160 240.001V304.001C160 312.837 167.164 320.001 176 320.001H208C216.836 320.001 224 312.837 224 304.001V240.001C224 231.163 216.836 224.001 208 224.001ZM208 304.001H176V240.001H208V304.001ZM400 224.001H368C359.164 224.001 352 231.163 352 240.001V304.001C352 312.837 359.164 320.001 368 320.001H400C408.836 320.001 416 312.837 416 304.001V240.001C416 231.163 408.836 224.001 400 224.001ZM400 304.001H368V240.001H400V304.001Z" })
  }
));
Alien8bitThin.displayName = "Alien8bitThin";
var Alien8bit_default = Alien8bitThin;
