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
var PenFancySlash_exports = {};
__export(PenFancySlash_exports, {
  default: () => PenFancySlash_default
});
module.exports = __toCommonJS(PenFancySlash_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PenFancySlashRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M630.81 469.102L397.466 286.213L547.095 150.75C608.47 96.375 564.095 0 488.845 0C465.345 0 441.97 9.625 425.095 28.75L277.284 192.018L38.814 5.109C34.407 1.672 29.189 0 24.032 0C16.907 0 9.845 3.156 5.126 9.188C-3.061 19.625 -1.249 34.717 9.189 42.889L601.185 506.883C611.685 515.086 626.747 513.211 634.872 502.805C643.06 492.367 641.247 477.273 630.81 469.102ZM315.159 221.701L461.087 60.508C468.204 52.441 478.062 48 488.845 48C508.347 48 520.71 62.35 525.37 74.639C528.681 83.369 531.771 100.199 514.88 115.166L359.134 256.168L315.159 221.701ZM290.952 324.891L290.308 326.82L263.845 406.209L152.997 445.627L198.855 399.77C199.255 399.789 199.593 400 199.999 400C213.255 400 223.999 389.254 223.999 376C223.999 362.744 213.255 352 199.999 352C186.745 352 175.999 362.744 175.999 376C175.999 376.406 176.21 376.744 176.23 377.145L130.339 423.035L169.755 311.998L243.363 287.426L198.083 251.938L148.081 268.629C137.937 272.016 129.978 279.979 126.595 290.125L65.997 460.803C61.337 474.779 64.976 490.189 75.394 500.607C82.806 508.02 92.747 512 102.902 512C107.019 512 111.171 511.346 115.202 510L285.726 449.373C295.874 445.988 303.837 438.023 307.22 427.875L331.111 356.203L290.197 324.133L290.952 324.891Z" })
  }
));
PenFancySlashRegular.displayName = "PenFancySlashRegular";
var PenFancySlash_default = PenFancySlashRegular;
