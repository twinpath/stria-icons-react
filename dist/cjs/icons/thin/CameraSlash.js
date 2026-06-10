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
var CameraSlash_exports = {};
__export(CameraSlash_exports, {
  default: () => CameraSlash_default
});
module.exports = __toCommonJS(CameraSlash_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CameraSlashThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M112.001 464C94.357 464 80.001 449.645 80.001 432V157.211L64.001 144.492V432C64.001 458.5 85.501 480 112.001 480H486.087L465.958 464H112.001ZM227.24 68.721C231.868 56.326 243.927 48 257.251 48H382.751C396.001 48 408.009 56.326 412.654 68.762L428.927 112H528.001C545.646 112 560.001 126.355 560.001 144V354.791L576.001 367.51V144C576.001 117.5 554.501 96 528.001 96H440.001L427.626 63.125C420.626 44.375 402.751 32 382.751 32H257.251C237.251 32 219.251 44.375 212.251 63.125L207.867 74.893L221.038 85.363L227.24 68.721ZM337.263 177.746L423.847 246.568C409.394 210.482 376.743 183.922 337.263 177.746ZM636.982 497.734L12.988 1.73C11.525 0.566 9.771 0 8.025 0C5.673 0 3.335 1.029 1.738 3.012C-1.012 6.48 -0.434 11.512 3.019 14.262L627.013 510.266C628.497 511.438 630.247 512 631.997 512C634.341 512 636.685 510.969 638.263 508.984C641.013 505.516 640.435 500.484 636.982 497.734ZM211.451 261.697C209.392 270.174 208.001 278.898 208.001 288C208.001 349.756 258.243 400 320.001 400C338.042 400 354.857 395.309 369.968 387.699L356.253 376.797C345.054 381.377 332.843 384 320.001 384C267.001 384 224.001 341 224.001 288C224.001 282.822 224.738 277.84 225.527 272.885L211.451 261.697Z" })
  }
));
CameraSlashThin.displayName = "CameraSlashThin";
var CameraSlash_default = CameraSlashThin;
