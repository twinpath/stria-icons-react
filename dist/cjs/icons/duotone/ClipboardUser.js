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
var ClipboardUser_exports = {};
__export(ClipboardUser_exports, {
  default: () => ClipboardUser_default
});
module.exports = __toCommonJS(ClipboardUser_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ClipboardUserDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M336 64H256C291.346 64 320 92.652 320 128V144C320 152.836 312.836 160 304 160H80C71.164 160 64 152.836 64 144V128C64 92.652 92.654 64 128 64H48C21.49 64 0 85.49 0 112V464C0 490.51 21.49 512 48 512H336C362.51 512 384 490.51 384 464V112C384 85.49 362.51 64 336 64ZM192 192C227.346 192 256 220.654 256 256S227.346 320 192 320S128 291.346 128 256S156.654 192 192 192ZM288 448H96C87.164 448 80 440.836 80 432C80 387.816 115.816 352 160 352H224C268.184 352 304 387.816 304 432C304 440.836 296.836 448 288 448Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 64C256 28.652 227.346 0 192 0S128 28.652 128 64C92.654 64 64 92.652 64 128V144C64 152.836 71.164 160 80 160H304C312.836 160 320 152.836 320 144V128C320 92.652 291.346 64 256 64ZM192 88C178.746 88 168 77.254 168 64C168 50.744 178.746 40 192 40S216 50.744 216 64C216 77.254 205.254 88 192 88ZM224 352H160C115.816 352 80 387.816 80 432C80 440.836 87.164 448 96 448H288C296.836 448 304 440.836 304 432C304 387.816 268.184 352 224 352ZM256 256C256 220.654 227.346 192 192 192S128 220.654 128 256S156.654 320 192 320S256 291.346 256 256Z" })
    ]
  }
));
ClipboardUserDuotone.displayName = "ClipboardUserDuotone";
var ClipboardUser_default = ClipboardUserDuotone;
