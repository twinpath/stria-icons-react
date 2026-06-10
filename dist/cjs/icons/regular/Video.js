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
var Video_exports = {};
__export(Video_exports, {
  default: () => Video_default
});
module.exports = __toCommonJS(Video_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const VideoRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M557.609 102.344C546.078 94.938 531.734 93.953 519.328 99.656L416 147.016V128C416 92.654 387.346 64 352 64H64C28.654 64 0 92.654 0 128V384C0 419.346 28.654 448 64 448H352C387.346 448 416 419.346 416 384V364.984L519.328 412.344C524.672 414.797 530.359 416.016 536.016 416.016C543.547 416.016 551.031 413.875 557.609 409.656C569.125 402.25 576 389.672 576 375.984V136.016C576 122.328 569.125 109.75 557.609 102.344ZM368 384C368 392.822 360.822 400 352 400H64C55.178 400 48 392.822 48 384V128C48 119.178 55.178 112 64 112H352C360.822 112 368 119.178 368 128V384ZM528 363.516L416 312.182V199.818L528 148.484V363.516Z" })
  }
));
VideoRegular.displayName = "VideoRegular";
var Video_default = VideoRegular;
