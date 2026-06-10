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
var PlaneUpSlash_exports = {};
__export(PlaneUpSlash_exports, {
  default: () => PlaneUpSlash_default
});
module.exports = __toCommonJS(PlaneUpSlash_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PlaneUpSlashDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 400.008V397.658L168.15 228.48L72.062 283.381C67.609 285.943 64 292.162 64 297.287V362.789C64 373.414 74.172 381.102 84.391 378.164L256 329.131V400.008L198.406 443.197C194.375 446.229 192 450.979 192 456.01V496.01C192 506.418 201.781 514.043 211.875 511.512L320 480.01L428.125 511.512C438.219 514.043 448 506.418 448 496.01V456.01C448 450.979 445.625 446.229 441.594 443.197L384 400.008ZM567.938 283.412L384 178.285V96.002C384 60.656 355.344 0 320 0S256 60.656 256 96.002V175.336L491.371 359.812L555.594 378.164C565.812 381.102 576 373.414 576 362.789V297.287C576 291.568 572.922 286.256 567.938 283.412Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M634.874 502.805C626.749 513.211 611.687 515.086 601.187 506.883L9.189 42.889C-1.249 34.717 -3.061 19.625 5.126 9.188C9.845 3.156 16.907 0 24.032 0C29.189 0 34.407 1.672 38.814 5.109L630.812 469.102C641.249 477.273 643.062 492.367 634.874 502.805Z" })
    ]
  }
));
PlaneUpSlashDuotone.displayName = "PlaneUpSlashDuotone";
var PlaneUpSlash_default = PlaneUpSlashDuotone;
