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
var ClipboardListCheck_exports = {};
__export(ClipboardListCheck_exports, {
  default: () => ClipboardListCheck_default
});
module.exports = __toCommonJS(ClipboardListCheck_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ClipboardListCheckLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M304 336H176C167.156 336 160 343.156 160 352S167.156 368 176 368H304C312.844 368 320 360.844 320 352S312.844 336 304 336ZM304 240H208C199.156 240 192 247.156 192 256S199.156 272 208 272H304C312.844 272 320 264.844 320 256S312.844 240 304 240ZM96 328C82.746 328 72 338.744 72 352C72 365.254 82.746 376 96 376C109.256 376 120 365.254 120 352C120 338.744 109.256 328 96 328ZM320 64C311.156 64 304 71.156 304 80S311.156 96 320 96C337.641 96 352 110.344 352 128V448C352 465.656 337.641 480 320 480H64C46.359 480 32 465.656 32 448V128C32 110.344 46.359 96 64 96C72.844 96 80 88.844 80 80S72.844 64 64 64C28.703 64 0 92.719 0 128V448C0 483.281 28.703 512 64 512H320C355.297 512 384 483.281 384 448V128C384 92.719 355.297 64 320 64ZM112 128H272C280.844 128 288 120.844 288 112S280.844 96 272 96H247.123C252.621 86.555 256 75.717 256 64C256 28.654 227.346 0 192 0S128 28.654 128 64C128 75.717 131.379 86.555 136.877 96H112C103.156 96 96 103.156 96 112S103.156 128 112 128ZM192 32C209.645 32 224 46.355 224 64S209.645 96 192 96S160 81.645 160 64S174.355 32 192 32ZM68.25 229.156C62.25 235.656 62.656 245.75 69.156 251.75L103.812 283.75C106.891 286.594 110.781 288 114.672 288C118.875 288 123.078 286.344 126.219 283.062L187.547 219.062C193.672 212.687 193.453 202.562 187.062 196.438C180.703 190.344 170.578 190.531 164.453 196.938L113.984 249.594L90.844 228.25C84.391 222.25 74.219 222.625 68.25 229.156Z" })
  }
));
ClipboardListCheckLight.displayName = "ClipboardListCheckLight";
var ClipboardListCheck_default = ClipboardListCheckLight;
