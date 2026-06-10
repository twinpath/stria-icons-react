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
const RectangleBarcodeRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M512 32H64C28.654 32 0 60.652 0 96V416C0 451.346 28.654 480 64 480H512C547.346 480 576 451.346 576 416V96C576 60.652 547.346 32 512 32ZM528 416C528 424.822 520.822 432 512 432H64C55.178 432 48 424.822 48 416V96C48 87.178 55.178 80 64 80H512C520.822 80 528 87.178 528 96V416ZM120 128H120C106.8 128 96 138.8 96 152V360C96 373.2 106.8 384 120 384H120C133.2 384 144 373.2 144 360V152C144 138.8 133.2 128 120 128ZM192.002 128C183.203 128 176.006 135.199 176.006 143.998V368.002C176.006 376.801 183.203 384 192.004 384C200.803 384 208 376.801 208 368.002V143.998C208 135.199 200.803 128 192.002 128ZM463.998 128C455.199 128 448 135.199 448 143.998V368.002C448 376.801 455.199 384 463.998 384S479.996 376.801 479.996 368.002V143.998C479.996 135.199 472.797 128 463.998 128ZM376.018 128H376.018C362.818 128 352.018 138.8 352.018 152V360C352.018 373.2 362.818 384 376.018 384H376.018C389.218 384 400.018 373.2 400.018 360V152C400.018 138.8 389.218 128 376.018 128ZM264.018 128H264.018C250.818 128 240.018 138.8 240.018 152V360C240.018 373.2 250.818 384 264.018 384H264.018C277.218 384 288.018 373.2 288.018 360V152C288.018 138.8 277.218 128 264.018 128Z" })
  }
));
RectangleBarcodeRegular.displayName = "RectangleBarcodeRegular";
var RectangleBarcode_default = RectangleBarcodeRegular;
