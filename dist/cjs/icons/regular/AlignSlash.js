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
var AlignSlash_exports = {};
__export(AlignSlash_exports, {
  default: () => AlignSlash_default
});
module.exports = __toCommonJS(AlignSlash_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const AlignSlashRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M119.999 344H315.54L254.298 296H119.999C106.745 296 95.999 306.744 95.999 320C95.999 333.254 106.745 344 119.999 344ZM119.999 424C106.745 424 95.999 434.744 95.999 448C95.999 461.254 106.745 472 119.999 472H478.853L417.611 424H119.999ZM630.81 469.102L471.197 344H519.999C533.253 344 543.999 333.254 543.999 320C543.999 306.744 533.253 296 519.999 296H409.954L307.884 216H519.999C533.253 216 543.999 205.254 543.999 192C543.999 178.744 533.253 168 519.999 168H246.642L144.572 88H519.999C533.253 88 543.999 77.254 543.999 64C543.999 50.744 533.253 40 519.999 40H119.999C110.982 40 103.421 45.178 99.32 52.531L38.814 5.109C34.407 1.672 29.189 0 24.032 0C16.907 0 9.845 3.156 5.126 9.188C-3.061 19.625 -1.249 34.717 9.189 42.889L601.185 506.883C611.685 515.086 626.747 513.211 634.872 502.805C643.06 492.367 641.247 477.273 630.81 469.102Z" })
  }
));
AlignSlashRegular.displayName = "AlignSlashRegular";
var AlignSlash_default = AlignSlashRegular;
