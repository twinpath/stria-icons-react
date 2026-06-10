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
var Clipboard_exports = {};
__export(Clipboard_exports, {
  default: () => Clipboard_default
});
module.exports = __toCommonJS(Clipboard_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ClipboardDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 112V464C384 490.51 362.51 512 336 512H48C21.49 512 0 490.51 0 464V112C0 85.49 21.49 64 48 64H128C92.654 64 64 92.652 64 128V144C64 152.837 71.163 160 80 160H304C312.837 160 320 152.837 320 144V128C320 92.652 291.346 64 256 64H336C362.51 64 384 85.49 384 112Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 64C256 28.652 227.346 0 192 0S128 28.652 128 64C92.654 64 64 92.652 64 128V144C64 152.837 71.163 160 80 160H304C312.837 160 320 152.837 320 144V128C320 92.652 291.346 64 256 64ZM192 40C205.254 40 216 50.744 216 64C216 77.254 205.254 88 192 88S168 77.254 168 64C168 50.744 178.746 40 192 40Z" })
    ]
  }
));
ClipboardDuotone.displayName = "ClipboardDuotone";
var Clipboard_default = ClipboardDuotone;
