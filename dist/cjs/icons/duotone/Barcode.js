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
var Barcode_exports = {};
__export(Barcode_exports, {
  default: () => Barcode_default
});
module.exports = __toCommonJS(Barcode_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BarcodeDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 512 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M200 32H184C170.8 32 160 42.8 160 56V456C160 469.2 170.8 480 184 480H200C213.2 480 224 469.2 224 456V56C224 42.8 213.2 32 200 32ZM112 32C103.2 32 96 39.2 96 48V464C96 472.8 103.2 480 112 480S128 472.8 128 464V48C128 39.2 120.8 32 112 32ZM40 32H24C10.8 32 0 42.8 0 56V456C0 469.2 10.8 480 24 480H40C53.2 480 64 469.2 64 456V56C64 42.8 53.2 32 40 32ZM488 32H472C458.8 32 448 42.8 448 56V456C448 469.2 458.8 480 472 480H488C501.2 480 512 469.2 512 456V56C512 42.8 501.2 32 488 32ZM400 32C391.2 32 384 39.2 384 48V464C384 472.8 391.2 480 400 480S416 472.8 416 464V48C416 39.2 408.8 32 400 32ZM296 32H280C266.8 32 256 42.8 256 56V456C256 469.2 266.8 480 280 480H296C309.2 480 320 469.2 320 456V56C320 42.8 309.2 32 296 32Z", className: "stria-secondary", style: { opacity: 0.4 } })
  }
));
BarcodeDuotone.displayName = "BarcodeDuotone";
var Barcode_default = BarcodeDuotone;
