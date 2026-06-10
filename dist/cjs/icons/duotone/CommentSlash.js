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
var CommentSlash_exports = {};
__export(CommentSlash_exports, {
  default: () => CommentSlash_default
});
module.exports = __toCommonJS(CommentSlash_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CommentSlashDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M64 239.997C64 289.59 85.406 334.996 121 370.699C108.5 421.089 66.688 465.994 66.188 466.494C64 468.791 63.406 472.197 64.688 475.197C66 478.197 68.812 479.994 72 479.994C138.312 479.994 188 448.198 212.594 428.589C245.312 440.901 281.594 447.995 320 447.995C357.391 447.995 392.801 441.331 424.82 429.632L82.926 161.662C70.809 185.853 64 212.263 64 239.997ZM320 32C252.262 32 190.854 53.515 145.07 88.405L512.762 376.597C552.033 340.043 576 292.348 576 239.997C576 125.092 461.406 32 320 32Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M601.187 506.874L9.187 42.879C-1.235 34.723 -3.063 19.63 5.109 9.192C13.296 -1.214 28.343 -3.089 38.812 5.13L630.812 469.124C641.234 477.28 643.062 492.374 634.89 502.811C626.706 513.236 611.599 515.071 601.187 506.874Z" })
    ]
  }
));
CommentSlashDuotone.displayName = "CommentSlashDuotone";
var CommentSlash_default = CommentSlashDuotone;
