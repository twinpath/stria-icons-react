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
var LocationCrosshairsSlash_exports = {};
__export(LocationCrosshairsSlash_exports, {
  default: () => LocationCrosshairsSlash_default
});
module.exports = __toCommonJS(LocationCrosshairsSlash_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const LocationCrosshairsSlashThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M400.763 412.18C376.533 424.766 349.09 432 319.949 432C222.903 432 143.951 353.047 143.951 256C143.951 240.977 146.047 226.469 149.605 212.539L136.558 202.164C132.228 216.93 128.996 232.148 128.348 248.164C128.195 248.156 128.105 248 127.951 248H71.952C67.53 248 63.952 251.594 63.952 256S67.53 264 71.952 264H127.951C128.105 264 128.195 263.844 128.348 263.836C132.385 363.594 212.355 443.566 312.113 447.602C312.106 447.758 311.949 447.844 311.949 448V504C311.949 508.406 315.527 512 319.949 512S327.949 508.406 327.949 504V448C327.949 447.844 327.793 447.758 327.785 447.602C359.082 446.336 387.995 436.914 413.663 422.43L400.763 412.18ZM239.2 99.789C263.413 87.223 290.834 80 319.949 80C416.995 80 495.947 158.953 495.947 256C495.947 271 493.86 285.484 490.313 299.391L503.363 309.766C507.682 295.023 510.904 279.828 511.551 263.836C511.703 263.844 511.793 264 511.947 264H567.947C572.369 264 575.947 260.406 575.947 256S572.369 248 567.947 248H511.947C511.793 248 511.703 248.156 511.551 248.164C507.514 148.406 427.544 68.434 327.785 64.398C327.793 64.242 327.949 64.156 327.949 64V8C327.949 3.594 324.371 0 319.949 0S311.949 3.594 311.949 8V64C311.949 64.156 312.106 64.242 312.113 64.398C280.842 65.664 251.952 75.074 226.298 89.531L239.2 99.789ZM636.981 497.734L12.987 1.734C11.525 0.57 9.771 0.004 8.025 0.004C5.673 0.004 3.335 1.031 1.738 3.016C-1.012 6.484 -0.434 11.516 3.019 14.266L627.013 510.266C628.497 511.438 630.247 512 631.997 512C634.341 512 636.684 510.969 638.262 508.984C641.012 505.516 640.434 500.484 636.981 497.734Z" })
  }
));
LocationCrosshairsSlashThin.displayName = "LocationCrosshairsSlashThin";
var LocationCrosshairsSlash_default = LocationCrosshairsSlashThin;
