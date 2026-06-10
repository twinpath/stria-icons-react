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
var MicrophoneLinesSlash_exports = {};
__export(MicrophoneLinesSlash_exports, {
  default: () => MicrophoneLinesSlash_default
});
module.exports = __toCommonJS(MicrophoneLinesSlash_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MicrophoneLinesSlashThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M479.999 256V200C479.999 195.594 476.406 192 471.999 192S463.999 195.594 463.999 200V256C463.999 263.125 462.9 269.953 461.896 276.805L476.554 288.457C478.738 277.969 479.999 267.141 479.999 256ZM239.999 96C239.999 51.891 275.886 16 319.999 16S399.999 51.891 399.999 96V112H327.999C323.577 112 319.999 115.578 319.999 120S323.577 128 327.999 128H399.999V176H335.079L355.208 192H399.999V227.602L415.999 240.32V96C415.999 42.969 373.031 0 319.999 0C269.599 0 228.749 38.945 224.773 88.32L239.999 100.422V96ZM324.486 351.547L302.222 333.852C278.519 328.43 259.001 312.437 248.484 291.133L225.716 273.035C233.779 317.906 272.804 352 319.999 352C321.536 352 322.966 351.621 324.486 351.547ZM439.999 496H327.999V415.191C348.788 414.141 368.517 409.062 386.503 400.844L372.536 389.742C356.216 396.176 338.579 400 319.999 400C240.593 400 175.999 335.406 175.999 256V233.516L159.999 220.797V256C159.999 341.477 227.562 410.922 311.999 415.191V496H199.999C195.593 496 191.999 499.594 191.999 504S195.593 512 199.999 512H439.999C444.406 512 447.999 508.406 447.999 504S444.406 496 439.999 496ZM636.982 497.734L12.988 1.73C11.525 0.566 9.771 0 8.025 0C5.673 0 3.335 1.031 1.738 3.012C-1.012 6.48 -0.434 11.512 3.019 14.262L627.013 510.266C628.497 511.438 630.247 512 631.997 512C634.341 512 636.685 510.969 638.263 508.984C641.013 505.516 640.435 500.484 636.982 497.734Z" })
  }
));
MicrophoneLinesSlashThin.displayName = "MicrophoneLinesSlashThin";
var MicrophoneLinesSlash_default = MicrophoneLinesSlashThin;
