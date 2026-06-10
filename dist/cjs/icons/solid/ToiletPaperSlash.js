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
var ToiletPaperSlash_exports = {};
__export(ToiletPaperSlash_exports, {
  default: () => ToiletPaperSlash_default
});
module.exports = __toCommonJS(ToiletPaperSlash_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ToiletPaperSlashSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M63.976 191.997V364.119C63.976 405.244 54.226 426.868 32.849 490.992C29.349 501.242 37.099 511.992 47.976 511.992H328.861C342.736 511.992 354.861 503.242 359.236 490.117C369.32 459.97 378.699 432.519 382.334 396.338L66.507 148.8C64.903 162.705 63.976 177.122 63.976 191.997ZM630.811 469.102L521.056 383.078C569.808 373.934 607.997 291.878 607.997 191.997C607.997 85.999 564.995 0 511.993 0S415.99 85.999 415.99 191.997C415.99 241.246 425.353 286.031 440.609 320.026L383.988 275.648V191.997C383.988 108.373 407.615 38.499 444.49 0H159.979C135.235 0 112.762 18.945 95.741 49.728L38.814 5.109C34.407 1.672 29.189 0 24.032 0C16.907 0 9.845 3.156 5.126 9.187C-3.061 19.625 -1.249 34.718 9.189 42.89L601.186 506.883C611.686 515.086 626.749 513.211 634.874 502.805C643.061 492.367 641.249 477.274 630.811 469.102ZM479.992 191.997C479.992 156.623 494.367 127.998 511.993 127.998C529.618 127.998 543.995 156.623 543.995 191.997S529.618 255.996 511.993 255.996C494.367 255.996 479.992 227.372 479.992 191.997Z" })
  }
));
ToiletPaperSlashSolid.displayName = "ToiletPaperSlashSolid";
var ToiletPaperSlash_default = ToiletPaperSlashSolid;
