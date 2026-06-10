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
var VideoSlash_exports = {};
__export(VideoSlash_exports, {
  default: () => VideoSlash_default
});
module.exports = __toCommonJS(VideoSlash_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const VideoSlashThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M460.438 179.891L556.657 116C563.782 111.141 572.532 110.609 580.219 114.641C587.594 118.531 592.001 125.734 592.001 133.922V377.984C592.001 378.641 591.557 379.141 591.503 379.781L605.485 390.898C606.965 386.82 608.001 382.555 608.001 377.984V133.922C608.001 119.688 600.407 107.188 587.657 100.484C574.907 93.75 559.5 94.625 547.688 102.734L451.563 166.547C447.907 169 446.907 173.969 449.344 177.641C451.782 181.344 456.75 182.281 460.438 179.891ZM368 80C385.645 80 400 94.355 400 112V227.562L416 240.281V112C416 85.492 394.508 64 368 64H194.224L214.353 80H368ZM368 432H79.999C62.355 432 47.999 417.645 47.999 400V131.734L31.999 119.016V400C31.999 426.508 53.492 448 79.999 448H368C387.153 448 403.555 436.703 411.256 420.477L397.988 409.93C393.754 422.652 382.123 432 368 432ZM636.981 497.734L12.988 1.73C11.525 0.566 9.771 0 8.025 0C5.673 0 3.335 1.031 1.738 3.012C-1.012 6.48 -0.434 11.512 3.019 14.262L627.012 510.266C628.497 511.438 630.247 512 631.997 512C634.341 512 636.684 510.969 638.262 508.984C641.012 505.516 640.434 500.484 636.981 497.734Z" })
  }
));
VideoSlashThin.displayName = "VideoSlashThin";
var VideoSlash_default = VideoSlashThin;
