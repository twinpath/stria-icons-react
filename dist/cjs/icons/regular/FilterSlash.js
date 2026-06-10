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
var FilterSlash_exports = {};
__export(FilterSlash_exports, {
  default: () => FilterSlash_default
});
module.exports = __toCommonJS(FilterSlash_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FilterSlashRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M630.812 469.102L410.79 296.654L565.488 106.623C576.751 93.158 579.189 74.734 571.712 58.707C564.025 42.232 547.788 32 529.339 32H110.655C100.726 32 91.581 35.156 83.921 40.463L38.814 5.109C34.407 1.672 29.189 0 24.032 0C16.907 0 9.845 3.156 5.126 9.188C-3.061 19.625 -1.249 34.719 9.189 42.891L601.187 506.883C611.687 515.086 626.749 513.211 634.874 502.805C643.062 492.367 641.249 477.273 630.812 469.102ZM134.413 80.037H525.216L372.993 267.029L134.413 80.037ZM351.997 422.113L287.997 372.725V322.414L183.507 240.518L239.997 309.912V377.619C239.997 390.166 246.175 401.922 256.521 409.066L338.837 472.617C345.999 477.613 353.579 480 361.409 480C382.687 480 399.997 462.807 399.997 441.67V410.197L351.997 372.576V422.113Z" })
  }
));
FilterSlashRegular.displayName = "FilterSlashRegular";
var FilterSlash_default = FilterSlashRegular;
