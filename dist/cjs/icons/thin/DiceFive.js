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
var DiceFive_exports = {};
__export(DiceFive_exports, {
  default: () => DiceFive_default
});
module.exports = __toCommonJS(DiceFive_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DiceFiveThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 32H64C28.625 32 0 60.625 0 96V416C0 451.375 28.625 480 64 480H384C419.375 480 448 451.375 448 416V96C448 60.625 419.375 32 384 32ZM432 416C432 442.467 410.467 464 384 464H64C37.533 464 16 442.467 16 416V96C16 69.533 37.533 48 64 48H384C410.467 48 432 69.533 432 96V416ZM128 320C110.375 320 96 334.375 96 352S110.375 384 128 384S160 369.625 160 352S145.625 320 128 320ZM128 368C119.178 368 112 360.822 112 352S119.178 336 128 336S144 343.178 144 352S136.822 368 128 368ZM128 128C110.375 128 96 142.375 96 160S110.375 192 128 192S160 177.625 160 160S145.625 128 128 128ZM128 176C119.178 176 112 168.822 112 160S119.178 144 128 144S144 151.178 144 160S136.822 176 128 176ZM224 224C206.375 224 192 238.375 192 256S206.375 288 224 288S256 273.625 256 256S241.625 224 224 224ZM224 272C215.178 272 208 264.822 208 256S215.178 240 224 240S240 247.178 240 256S232.822 272 224 272ZM320 320C302.375 320 288 334.375 288 352S302.375 384 320 384S352 369.625 352 352S337.625 320 320 320ZM320 368C311.178 368 304 360.822 304 352S311.178 336 320 336S336 343.178 336 352S328.822 368 320 368ZM320 128C302.375 128 288 142.375 288 160S302.375 192 320 192S352 177.625 352 160S337.625 128 320 128ZM320 176C311.178 176 304 168.822 304 160S311.178 144 320 144S336 151.178 336 160S328.822 176 320 176Z " })
  }
));
DiceFiveThin.displayName = "DiceFiveThin";
var DiceFive_default = DiceFiveThin;
