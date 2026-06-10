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
var TrashSlash_exports = {};
__export(TrashSlash_exports, {
  default: () => TrashSlash_default
});
module.exports = __toCommonJS(TrashSlash_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TrashSlashSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M149.189 467C150.751 491.844 172.22 512 197.095 512H442.907C463.495 512 481.566 498.111 488.13 479.266L132.536 200.557L149.189 467ZM630.812 469.102L497.226 364.4L512.001 128H195.607L154.779 96H528.001C536.839 96 544.001 88.836 544.001 80V48C544.001 39.162 536.839 32 528.001 32H416.001L404.423 8.844C401.714 3.424 396.173 0 390.113 0H249.89C243.829 0 238.29 3.424 235.579 8.844L224.001 32H112.001C103.165 32 96.001 39.162 96.001 48V49.932L38.814 5.109C34.407 1.672 29.189 0 24.032 0C16.907 0 9.845 3.156 5.126 9.188C-3.061 19.625 -1.249 34.717 9.189 42.889L601.187 506.883C611.687 515.086 626.749 513.211 634.874 502.805C643.062 492.367 641.249 477.273 630.812 469.102Z" })
  }
));
TrashSlashSolid.displayName = "TrashSlashSolid";
var TrashSlash_default = TrashSlashSolid;
