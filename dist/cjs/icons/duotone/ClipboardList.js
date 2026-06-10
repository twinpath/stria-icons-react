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
var ClipboardList_exports = {};
__export(ClipboardList_exports, {
  default: () => ClipboardList_default
});
module.exports = __toCommonJS(ClipboardList_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ClipboardListDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M336 64H256C291.346 64 320 92.652 320 128V144C320 152.836 312.836 160 304 160H80C71.164 160 64 152.836 64 144V128C64 92.652 92.654 64 128 64H48C21.49 64 0 85.49 0 112V464C0 490.51 21.49 512 48 512H336C362.51 512 384 490.51 384 464V112C384 85.49 362.51 64 336 64ZM96 392C82.75 392 72 381.25 72 368S82.75 344 96 344S120 354.75 120 368S109.25 392 96 392ZM96 296C82.75 296 72 285.25 72 272S82.75 248 96 248S120 258.75 120 272S109.25 296 96 296ZM304 384H176C167.199 384 160 376.799 160 368C160 359.199 167.199 352 176 352H304C312.801 352 320 359.199 320 368C320 376.799 312.801 384 304 384ZM304 288H176C167.199 288 160 280.799 160 272C160 263.199 167.199 256 176 256H304C312.801 256 320 263.199 320 272C320 280.799 312.801 288 304 288Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 64C256 28.652 227.346 0 192 0S128 28.652 128 64C92.654 64 64 92.652 64 128V144C64 152.836 71.164 160 80 160H304C312.836 160 320 152.836 320 144V128C320 92.652 291.346 64 256 64ZM192 88C178.746 88 168 77.254 168 64C168 50.744 178.746 40 192 40S216 50.744 216 64C216 77.254 205.254 88 192 88ZM96 344C82.75 344 72 354.75 72 368S82.75 392 96 392S120 381.25 120 368S109.25 344 96 344ZM96 248C82.75 248 72 258.75 72 272S82.75 296 96 296S120 285.25 120 272S109.25 248 96 248Z" })
    ]
  }
));
ClipboardListDuotone.displayName = "ClipboardListDuotone";
var ClipboardList_default = ClipboardListDuotone;
