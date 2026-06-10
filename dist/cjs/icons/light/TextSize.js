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
var TextSize_exports = {};
__export(TextSize_exports, {
  default: () => TextSize_default
});
module.exports = __toCommonJS(TextSize_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TextSizeLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M0 48L0 144C0 152.844 7.156 160 16 160S32 152.844 32 144V64H176V448H112C103.156 448 96 455.156 96 464S103.156 480 112 480H272C280.844 480 288 472.844 288 464S280.844 448 272 448H208V64H352V144C352 152.844 359.156 160 368 160S384 152.844 384 144V48C384 39.156 376.844 32 368 32H16C7.156 32 0 39.156 0 48ZM320 240V304C320 312.844 327.156 320 336 320S352 312.844 352 304V256H464V448H416C407.156 448 400 455.156 400 464S407.156 480 416 480H544C552.844 480 560 472.844 560 464S552.844 448 544 448H496V256H608V304C608 312.844 615.156 320 624 320S640 312.844 640 304V240C640 231.156 632.844 224 624 224H336C327.156 224 320 231.156 320 240Z" })
  }
));
TextSizeLight.displayName = "TextSizeLight";
var TextSize_default = TextSizeLight;
