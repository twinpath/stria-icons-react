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
var LockOpen_exports = {};
__export(LockOpen_exports, {
  default: () => LockOpen_default
});
module.exports = __toCommonJS(LockOpen_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const LockOpenRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M432 0C361.422 0 304 57.422 304 128V192H64C28.654 192 0 220.654 0 256V448C0 483.346 28.654 512 64 512H384C419.346 512 448 483.346 448 448V256C448 220.654 419.346 192 384 192H352V128C352 83.891 387.891 48 432 48S512 83.891 512 128V200C512 213.25 522.75 224 536 224S560 213.25 560 200V128C560 57.422 502.578 0 432 0ZM384 240C392.822 240 400 247.178 400 256V448C400 456.822 392.822 464 384 464H64C55.178 464 48 456.822 48 448V256C48 247.178 55.178 240 64 240H384ZM224 400C237.25 400 248 389.25 248 376V328C248 314.75 237.25 304 224 304S200 314.75 200 328V376C200 389.25 210.75 400 224 400Z" })
  }
));
LockOpenRegular.displayName = "LockOpenRegular";
var LockOpen_default = LockOpenRegular;
