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
var LocationSlash_exports = {};
__export(LocationSlash_exports, {
  default: () => LocationSlash_default
});
module.exports = __toCommonJS(LocationSlash_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const LocationSlashThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M319.999 16C417.046 16 495.999 94.953 495.999 192C495.999 225.652 490.745 247.404 469.872 283.223L482.45 293.221C505.513 254.053 511.999 229.51 511.999 192C511.999 85.969 426.031 0 319.999 0C266.999 0 219.015 21.479 184.271 56.207L197.009 66.332C228.765 35.246 272.156 16 319.999 16ZM326.564 492.562C324.495 495.549 321.564 495.996 319.999 495.996S315.503 495.549 313.45 492.586C287.519 454.996 265.351 423.418 246.431 396.465C168.361 285.256 147.921 255.988 144.589 208.629L128.085 195.51C128.947 270.025 157.259 294.352 300.281 501.672C305.046 508.555 312.523 511.996 319.999 511.996S334.952 508.555 339.718 501.672C363.462 467.254 383.757 438.299 401.581 412.904L389.033 402.93C371.101 428.479 350.495 457.873 326.564 492.562ZM636.98 497.734L12.988 1.73C11.525 0.566 9.771 0 8.025 0C5.673 0 3.335 1.029 1.738 3.012C-1.012 6.48 -0.434 11.512 3.019 14.262L627.011 510.266C628.495 511.438 630.245 512 631.995 512C634.339 512 636.683 510.969 638.261 508.984C641.011 505.516 640.433 500.484 636.98 497.734Z" })
  }
));
LocationSlashThin.displayName = "LocationSlashThin";
var LocationSlash_default = LocationSlashThin;
