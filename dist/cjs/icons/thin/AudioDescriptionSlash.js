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
var AudioDescriptionSlash_exports = {};
__export(AudioDescriptionSlash_exports, {
  default: () => AudioDescriptionSlash_default
});
module.exports = __toCommonJS(AudioDescriptionSlash_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const AudioDescriptionSlashThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M95.999 464C69.533 464 47.999 442.467 47.999 416V131.771L31.999 119.053V416C31.999 451.346 60.654 480 95.999 480H486.083L465.956 464H95.999ZM543.999 48C570.466 48 591.999 69.533 591.999 96V380.223L607.999 392.941V96C607.999 60.652 579.347 32 543.999 32H153.919L174.048 48H543.999ZM503.433 309.822C513.876 294.459 519.999 275.938 519.999 256C519.999 203.062 476.937 160 423.999 160H359.999C355.593 160 351.999 163.578 351.999 168V189.451L367.999 202.168V176H423.999C468.124 176 503.999 211.891 503.999 256C503.999 272.174 499.099 287.191 490.814 299.791L503.433 309.822ZM180.419 237.031L128.843 340.422C126.874 344.375 128.468 349.188 132.421 351.156C133.577 351.734 134.796 352 135.999 352C138.937 352 141.765 350.375 143.156 347.578L172.876 288H244.54L224.411 272H180.857L193.224 247.209L180.419 237.031ZM636.98 497.734L12.988 1.73C11.525 0.566 9.771 0 8.025 0C5.673 0 3.335 1.029 1.738 3.012C-1.012 6.48 -0.434 11.512 3.019 14.262L627.011 510.266C628.495 511.438 630.245 512 631.995 512C634.339 512 636.683 510.969 638.261 508.984C641.011 505.516 640.433 500.484 636.98 497.734Z" })
  }
));
AudioDescriptionSlashThin.displayName = "AudioDescriptionSlashThin";
var AudioDescriptionSlash_default = AudioDescriptionSlashThin;
