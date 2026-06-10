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
var PrintSlash_exports = {};
__export(PrintSlash_exports, {
  default: () => PrintSlash_default
});
module.exports = __toCommonJS(PrintSlash_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PrintSlashSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448.001 448H192.001V352H325.765L122.353 192.57C89.697 195.473 64.001 222.59 64.001 256V352C64.001 369.674 78.327 384 96.001 384H128.001V480C128.001 497.674 142.327 512 160.001 512H480.001C492.251 512 502.546 504.881 507.925 494.773L448.001 447.805V448ZM630.812 469.102L522.232 384H544.001C561.675 384 576.001 369.674 576.001 352V256C576.001 220.654 547.347 192 512.001 192H277.263L192.001 125.174V64H421.491L448.001 90.51V160H512.001V77.25C512.001 68.766 508.626 60.625 502.626 54.625L457.376 9.375C451.376 3.375 443.22 0 434.751 0H160.001C142.345 0 128.001 14.328 128.001 32V75.012L38.814 5.109C34.407 1.672 29.189 0 24.032 0C16.907 0 9.845 3.156 5.126 9.188C-3.061 19.625 -1.249 34.719 9.189 42.891L601.187 506.883C611.687 515.086 626.749 513.211 634.874 502.805C643.062 492.367 641.249 477.273 630.812 469.102ZM496.001 296C482.751 296 472.001 285.25 472.001 272C472.001 258.734 482.751 248 496.001 248S520.001 258.734 520.001 272C520.001 285.25 509.251 296 496.001 296Z" })
  }
));
PrintSlashSolid.displayName = "PrintSlashSolid";
var PrintSlash_default = PrintSlashSolid;
