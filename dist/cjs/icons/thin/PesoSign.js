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
var PesoSign_exports = {};
__export(PesoSign_exports, {
  default: () => PesoSign_default
});
module.exports = __toCommonJS(PesoSign_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PesoSignThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M376 240H327.83C332.672 224.75 336 208.832 336 192C336 181.043 334.875 170.344 332.766 160H376C380.422 160 384 156.406 384 152S380.422 144 376 144H327.83C307.297 79.318 247.387 32 176 32H88C65.938 32 48 49.938 48 72V144H8C3.578 144 0 147.594 0 152S3.578 160 8 160H48V240H8C3.578 240 0 243.594 0 248S3.578 256 8 256H48V472C48 476.406 51.578 480 56 480S64 476.406 64 472V352H176C241.441 352 297.678 312.406 322.438 256H376C380.422 256 384 252.406 384 248S380.422 240 376 240ZM64 72C64 58.781 74.766 48 88 48H176C238.494 48 291.275 88.25 311.154 144H64V72ZM64 160H316.133C318.494 170.328 320 180.967 320 192C320 208.912 316.533 224.912 311.154 240H64V160ZM176 336H64V256H304.318C280.658 303.209 232.309 336 176 336Z" })
  }
));
PesoSignThin.displayName = "PesoSignThin";
var PesoSign_default = PesoSignThin;
