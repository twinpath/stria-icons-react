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
var RectangleBarcode_exports = {};
__export(RectangleBarcode_exports, {
  default: () => RectangleBarcode_default
});
module.exports = __toCommonJS(RectangleBarcode_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const RectangleBarcodeSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M528 32H48C21.5 32 0 53.5 0 80V432C0 458.5 21.5 480 48 480H528C554.5 480 576 458.5 576 432V80C576 53.5 554.5 32 528 32ZM128 368C128 376.799 120.801 384 112 384H80C71.199 384 64 376.799 64 368V144C64 135.199 71.199 128 80 128H112C120.801 128 128 135.199 128 144V368ZM192 368C192 376.799 184.801 384 176 384S160 376.799 160 368V144C160 135.199 167.199 128 176 128S192 135.199 192 144V368ZM256 368C256 376.799 248.801 384 240 384S224 376.799 224 368V144C224 135.199 231.199 128 240 128S256 135.199 256 144V368ZM384 368C384 376.799 376.801 384 368 384H336C327.199 384 320 376.799 320 368V144C320 135.199 327.199 128 336 128H368C376.801 128 384 135.199 384 144V368ZM512 368C512 376.799 504.801 384 496 384H464C455.199 384 448 376.799 448 368V144C448 135.199 455.199 128 464 128H496C504.801 128 512 135.199 512 144V368Z" })
  }
));
RectangleBarcodeSolid.displayName = "RectangleBarcodeSolid";
var RectangleBarcode_default = RectangleBarcodeSolid;
