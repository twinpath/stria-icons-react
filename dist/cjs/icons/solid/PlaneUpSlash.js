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
const PlaneUpSlashSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M630.812 469.102L491.372 359.812L555.595 378.164C565.814 381.102 576.001 373.414 576.001 362.789V297.287C576.001 291.568 572.923 286.256 567.939 283.412L384.001 178.285V96.002C384.001 60.658 355.345 0 320.001 0S256.001 60.658 256.001 96.002V175.336L38.814 5.109C34.407 1.672 29.189 0 24.032 0C16.907 0 9.845 3.156 5.126 9.188C-3.061 19.625 -1.249 34.719 9.189 42.891L601.187 506.883C611.687 515.086 626.749 513.211 634.874 502.805C643.062 492.367 641.249 477.273 630.812 469.102ZM72.064 283.381C67.611 285.943 64.001 292.162 64.001 297.287V362.789C64.001 373.414 74.173 381.102 84.392 378.164L256.001 329.133V400.01L198.407 443.197C194.376 446.229 192.001 450.979 192.001 456.01V496.012C192.001 506.418 201.782 514.043 211.876 511.512L320.001 480.012L428.126 511.512C438.22 514.043 448.001 506.418 448.001 496.012V447.801L168.165 228.471L72.064 283.381Z" })
  }
));
PlaneUpSlashSolid.displayName = "PlaneUpSlashSolid";
var PlaneUpSlash_default = PlaneUpSlashSolid;
