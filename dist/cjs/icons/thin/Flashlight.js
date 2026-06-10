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
var Flashlight_exports = {};
__export(Flashlight_exports, {
  default: () => Flashlight_default
});
module.exports = __toCommonJS(Flashlight_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FlashlightThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M608 96H576C492.328 96 418.262 121.203 371.547 160H64C28.801 160 0 188.797 0 224V288C0 323.199 28.801 352 64 352H371.547C418.262 390.797 492.328 416 576 416H608C625.625 416 640 401.625 640 384V128C640 110.375 625.625 96 608 96ZM544 398.555C479.891 393.203 420.805 372.109 381.77 339.691L377.324 336H64C37.531 336 16 314.469 16 288V224C16 197.531 37.531 176 64 176H377.324L381.77 172.309C420.805 139.891 479.891 118.797 544 113.445V398.555ZM624 384C624 392.824 616.824 400 608 400H576C570.625 400 565.328 399.633 560 399.414V112.586C565.328 112.367 570.625 112 576 112H608C616.824 112 624 119.176 624 128V384ZM288 224H256C238.375 224 224 238.375 224 256S238.375 288 256 288H288C305.625 288 320 273.625 320 256S305.625 224 288 224ZM288 272H256C247.176 272 240 264.824 240 256S247.176 240 256 240H288C296.824 240 304 247.176 304 256S296.824 272 288 272Z" })
  }
));
FlashlightThin.displayName = "FlashlightThin";
var Flashlight_default = FlashlightThin;
