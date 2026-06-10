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
var Keynote_exports = {};
__export(Keynote_exports, {
  default: () => Keynote_default
});
module.exports = __toCommonJS(Keynote_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const KeynoteThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M509.516 269.156L453.438 157C449.438 148.969 441.375 144 432.422 144H136V96C136 65.125 161.125 40 192 40C192.582 40 192.943 39.5 193.49 39.383C196.902 53.383 208.947 64 224 64H320C337.674 64 352 49.672 352 32S337.674 0 320 0H224C208.947 0 196.902 10.617 193.49 24.617C192.943 24.5 192.582 24 192 24C152.297 24 120 56.312 120 96V144H79.578C70.625 144 62.562 148.969 58.562 157L2.484 269.156C0.859 272.406 0 276.031 0 279.656V328C0 340.969 10.547 351.5 23.5 351.5H248.207C248.193 351.691 248 351.805 248 352V496H136C131.578 496 128 499.594 128 504S131.578 512 136 512H376C380.422 512 384 508.406 384 504S380.422 496 376 496H264V352C264 351.805 263.807 351.691 263.793 351.5H488.5C501.453 351.5 512 340.969 512 328V279.656C512 276.031 511.141 272.406 509.516 269.156ZM224 16H320C328.822 16 336 23.176 336 32S328.822 48 320 48H224C215.178 48 208 40.824 208 32S215.178 16 224 16ZM72.875 164.125C74.156 161.594 76.719 160 79.578 160H432.422C435.281 160 437.844 161.594 439.125 164.125L493.063 272H18.938L72.875 164.125ZM496 328C496 332.125 492.641 335.5 488.5 335.5H23.5C19.359 335.5 16 332.125 16 328V288H496V328Z" })
  }
));
KeynoteThin.displayName = "KeynoteThin";
var Keynote_default = KeynoteThin;
