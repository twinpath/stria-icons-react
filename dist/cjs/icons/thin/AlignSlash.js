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
const AlignSlashThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M104 440.003C99.582 440.003 96 443.585 96 448.003S99.582 456.003 104 456.003H455.951L435.822 440.003H104ZM536 312.003H506.23L526.359 328.003H536C540.418 328.003 544 324.421 544 320.003S540.418 312.003 536 312.003ZM536 184.003H345.197L365.326 200.003H536C540.418 200.003 544 196.421 544 192.003S540.418 184.003 536 184.003ZM536 72.003C540.418 72.003 544 68.421 544 64.003S540.418 56.003 536 56.003H184.164L204.295 72.003H536ZM104 200.003H133.885L113.756 184.003H104C99.582 184.003 96 187.585 96 192.003S99.582 200.003 104 200.003ZM104 328.003H294.918L274.789 312.003H104C99.582 312.003 96 315.585 96 320.003S99.582 328.003 104 328.003ZM636.981 497.733L12.987 1.733C11.525 0.569 9.771 0.003 8.025 0.003C5.673 0.003 3.335 1.032 1.738 3.014C-1.012 6.483 -0.434 11.514 3.019 14.264L627.013 510.264C628.497 511.436 630.247 511.999 631.997 511.999C634.341 511.999 636.684 510.968 638.262 508.983C641.012 505.514 640.434 500.483 636.981 497.733Z" })
  }
));
AlignSlashThin.displayName = "AlignSlashThin";
var AlignSlash_default = AlignSlashThin;
