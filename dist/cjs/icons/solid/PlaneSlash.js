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
var PlaneSlash_exports = {};
__export(PlaneSlash_exports, {
  default: () => PlaneSlash_default
});
module.exports = __toCommonJS(PlaneSlash_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PlaneSlashSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M32.499 147.873L63.999 255.996L32.499 364.119C29.968 374.213 37.593 383.994 47.999 383.994H87.999C93.03 383.994 97.78 381.619 100.811 377.588L143.999 319.995H246.873L197.842 491.586C194.905 501.805 202.592 511.992 213.217 511.992H278.717C284.436 511.992 289.748 508.914 292.592 503.93L362.824 381.045L41.819 129.451C34.864 132.412 30.513 139.955 32.499 147.873ZM630.811 469.102L440.57 319.995H511.997C547.341 319.995 607.997 291.339 607.997 255.996S547.341 191.997 511.997 191.997H397.717L292.623 8.062C290.061 3.609 283.842 0 278.717 0H213.217C202.592 0 194.905 10.172 197.842 20.39L238.106 161.31L38.814 5.109C34.407 1.672 29.189 0 24.032 0C16.907 0 9.845 3.156 5.126 9.187C-3.061 19.625 -1.249 34.718 9.189 42.89L601.186 506.883C611.686 515.086 626.749 513.211 634.874 502.805C643.061 492.367 641.249 477.274 630.811 469.102Z" })
  }
));
PlaneSlashSolid.displayName = "PlaneSlashSolid";
var PlaneSlash_default = PlaneSlashSolid;
