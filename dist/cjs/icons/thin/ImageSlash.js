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
var ImageSlash_exports = {};
__export(ImageSlash_exports, {
  default: () => ImageSlash_default
});
module.exports = __toCommonJS(ImageSlash_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ImageSlashThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M527.999 48C545.644 48 559.999 62.355 559.999 80V294.062L464.968 199.031C455.593 189.687 440.406 189.687 431.031 199.031L401.368 228.693L413.974 238.713L442.343 210.344C445.468 207.219 450.531 207.219 453.656 210.344L559.999 316.688V354.787L575.999 367.506V80C575.999 53.49 554.507 32 527.999 32H153.919L174.048 48H527.999ZM188.687 464L311.48 341.207L298.874 331.187L287.999 342.062L208.968 263.031C199.593 253.688 184.406 253.688 175.031 263.031L79.999 358.062V157.209L63.999 144.49V432C63.999 458.51 85.492 480 111.999 480H486.085L465.956 464H188.687ZM111.999 464C94.355 464 79.999 449.645 79.999 432V380.688L186.343 274.344C189.468 271.219 194.531 271.219 197.656 274.344L276.687 353.375L166.062 464H111.999ZM636.98 497.734L12.988 1.73C11.525 0.566 9.771 0 8.025 0C5.673 0 3.335 1.027 1.738 3.012C-1.012 6.48 -0.434 11.512 3.019 14.262L627.011 510.266C628.495 511.438 630.245 512 631.995 512C634.339 512 636.683 510.969 638.261 508.984C641.011 505.516 640.433 500.484 636.98 497.734Z" })
  }
));
ImageSlashThin.displayName = "ImageSlashThin";
var ImageSlash_default = ImageSlashThin;
