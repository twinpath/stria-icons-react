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
var DropletSlash_exports = {};
__export(DropletSlash_exports, {
  default: () => DropletSlash_default
});
module.exports = __toCommonJS(DropletSlash_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DropletSlashThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M306.079 26.707C308.966 17.043 316.761 16 319.978 16C325.281 16 331.706 18.732 333.909 26.676C356.966 104.428 391.751 154.133 422.443 197.986C443.802 228.508 461.986 254.855 471.919 284.771L492.73 301.316C475.663 212.404 391.376 164.197 349.249 22.127C345.206 7.539 332.611 0 319.978 0C307.607 0 295.202 7.223 290.749 22.127C280.46 56.848 267.533 85.785 253.718 111.328L266.527 121.51C281.263 94.627 295.058 63.9 306.079 26.707ZM319.999 496C231.775 496 159.999 423.271 159.999 333.875C159.999 298.787 171.128 270.988 187.841 242.932L175.218 232.896C156.786 263.418 143.999 294.316 143.999 333.875C143.999 432.375 222.749 512 319.999 512C372.257 512 419.031 488.875 451.257 452.316L438.32 442.033C409.017 474.92 367.066 496 319.999 496ZM636.98 497.734L12.988 1.73C11.525 0.566 9.771 0 8.025 0C5.673 0 3.335 1.031 1.738 3.012C-1.012 6.48 -0.434 11.512 3.019 14.262L627.011 510.266C628.495 511.438 630.245 512 631.995 512C634.339 512 636.683 510.969 638.261 508.984C641.011 505.516 640.433 500.484 636.98 497.734Z" })
  }
));
DropletSlashThin.displayName = "DropletSlashThin";
var DropletSlash_default = DropletSlashThin;
