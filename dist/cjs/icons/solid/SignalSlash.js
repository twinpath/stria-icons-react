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
var SignalSlash_exports = {};
__export(SignalSlash_exports, {
  default: () => SignalSlash_default
});
module.exports = __toCommonJS(SignalSlash_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SignalSlashSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M191.999 287.996C174.325 287.996 159.999 302.322 159.999 319.994V479.992C159.999 497.664 174.325 511.992 191.999 511.992C209.671 511.992 223.999 497.664 223.999 479.992V319.994C223.999 302.322 209.671 287.996 191.999 287.996ZM63.999 383.994C46.325 383.994 31.999 398.32 31.999 415.994V479.992C31.999 497.664 46.325 511.992 63.999 511.992C81.671 511.992 95.999 497.664 95.999 479.992V415.994C95.999 398.32 81.673 383.994 63.999 383.994ZM287.999 480C287.999 497.672 302.325 512 319.999 512S351.999 497.672 351.999 480V372.574L287.999 322.414V480ZM630.812 469.102L607.997 451.221V32C607.997 14.326 593.671 0 575.997 0S543.997 14.326 543.997 32V401.059L479.999 350.898V128C479.999 110.326 465.673 96 447.999 96S415.999 110.326 415.999 128V300.736L351.999 250.576V224C351.999 206.326 337.673 192 319.999 192C309.347 192 300.37 197.547 294.554 205.551L38.814 5.109C34.407 1.672 29.189 0 24.032 0C16.907 0 9.845 3.156 5.126 9.188C-3.061 19.625 -1.249 34.717 9.189 42.889L601.187 506.883C611.687 515.086 626.749 513.211 634.874 502.805C643.062 492.367 641.249 477.273 630.812 469.102ZM415.999 480C415.999 497.672 430.325 512 447.999 512S479.999 497.672 479.999 480V472.898L415.999 422.736V480Z" })
  }
));
SignalSlashSolid.displayName = "SignalSlashSolid";
var SignalSlash_default = SignalSlashSolid;
