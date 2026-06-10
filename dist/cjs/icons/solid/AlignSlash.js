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
var AlignSlash_exports = {};
__export(AlignSlash_exports, {
  default: () => AlignSlash_default
});
module.exports = __toCommonJS(AlignSlash_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const AlignSlashSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M127.997 416.002C110.325 416.002 95.997 430.328 95.997 448.002C95.997 465.674 110.325 480 127.997 480H489.077L407.423 416.002H127.997ZM127.997 352.002H325.767L244.113 288.004H127.997C110.325 288.004 95.997 302.33 95.997 320.004C95.997 337.676 110.325 352.002 127.997 352.002ZM630.81 469.102L481.405 352.002H495.999C496.003 352.002 496.005 352 496.009 352H511.999C529.673 352 543.999 337.674 543.999 320S529.673 288 511.999 288H399.745L318.097 224.004H495.999C496.007 224.004 496.011 224 496.019 224H511.999C529.673 224 543.999 209.674 543.999 192S529.673 160 511.999 160H236.433L154.779 96H511.999C529.673 96 543.999 81.674 543.999 64S529.673 32 511.999 32H127.999C114.634 32 103.239 40.215 98.45 51.852L38.814 5.109C34.407 1.672 29.189 0 24.032 0C16.907 0 9.845 3.156 5.126 9.188C-3.061 19.625 -1.249 34.719 9.189 42.891L601.185 506.883C611.685 515.086 626.747 513.211 634.872 502.805C643.06 492.367 641.247 477.273 630.81 469.102ZM127.999 224H159.999V222.092L101.003 175.852C98.111 180.662 95.999 185.979 95.999 192C95.999 209.674 110.325 224 127.999 224Z" })
  }
));
AlignSlashSolid.displayName = "AlignSlashSolid";
var AlignSlash_default = AlignSlashSolid;
