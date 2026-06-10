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
var MusicNoteSlash_exports = {};
__export(MusicNoteSlash_exports, {
  default: () => MusicNoteSlash_default
});
module.exports = __toCommonJS(MusicNoteSlash_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MusicNoteSlashThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M336.094 388.025C318.922 366.345 289.5 352.001 256.001 352.001C202.982 352.001 160.002 387.818 160.002 432.001C160.002 476.181 202.982 512.001 256.001 512.001S352 476.181 352 432.001H352.093V373.452L336.094 360.734V388.025ZM256.001 496.001C211.888 496.001 176.001 467.29 176.001 432.001S211.888 368.001 256.001 368.001S336 396.712 336 432.001S300.113 496.001 256.001 496.001ZM352.093 162.759L462.764 130.228C472.983 127.228 479.998 117.853 479.998 107.204V24.013C479.998 7.997 464.612 -3.522 449.241 0.986L364.593 25.814C347.679 30.892 336.094 46.462 336.094 64.118V176.769L352.093 189.488V162.759ZM352.093 64.15C352.093 53.486 359.125 44.095 369.359 41.095L453.749 16.337C458.87 14.833 463.999 18.673 463.999 24.013V107.193C463.999 110.743 461.659 113.868 458.256 114.868L352.093 146.064V64.15ZM636.981 497.736L12.987 1.736C11.525 0.572 9.771 0.005 8.025 0.005C5.673 0.005 3.335 1.035 1.738 3.017C-1.012 6.486 -0.434 11.517 3.019 14.267L627.013 510.267C628.497 511.439 630.247 512.001 631.997 512.001C634.341 512.001 636.684 510.97 638.262 508.986C641.012 505.517 640.434 500.486 636.981 497.736Z" })
  }
));
MusicNoteSlashThin.displayName = "MusicNoteSlashThin";
var MusicNoteSlash_default = MusicNoteSlashThin;
