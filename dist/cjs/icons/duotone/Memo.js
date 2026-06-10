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
var Memo_exports = {};
__export(Memo_exports, {
  default: () => Memo_default
});
module.exports = __toCommonJS(Memo_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MemoDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M320 0H64C28.654 0 0 28.652 0 64V448C0 483.346 28.654 512 64 512H320C355.346 512 384 483.346 384 448V64C384 28.652 355.346 0 320 0ZM208 352H80C71.164 352 64 344.836 64 336S71.164 320 80 320H208C216.838 320 224 327.164 224 336S216.838 352 208 352ZM304 256H80C71.164 256 64 248.836 64 240S71.164 224 80 224H304C312.838 224 320 231.164 320 240S312.838 256 304 256ZM304 160H80C71.164 160 64 152.836 64 144S71.164 128 80 128H304C312.838 128 320 135.164 320 144S312.838 160 304 160Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M208 320H80C71.164 320 64 327.164 64 336S71.164 352 80 352H208C216.838 352 224 344.836 224 336S216.838 320 208 320ZM304 224H80C71.164 224 64 231.164 64 240S71.164 256 80 256H304C312.838 256 320 248.836 320 240S312.838 224 304 224ZM304 128H80C71.164 128 64 135.164 64 144S71.164 160 80 160H304C312.838 160 320 152.836 320 144S312.838 128 304 128Z" })
    ]
  }
));
MemoDuotone.displayName = "MemoDuotone";
var Memo_default = MemoDuotone;
