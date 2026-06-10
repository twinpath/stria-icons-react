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
var SquareParkingSlash_exports = {};
__export(SquareParkingSlash_exports, {
  default: () => SquareParkingSlash_default
});
module.exports = __toCommonJS(SquareParkingSlash_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SquareParkingSlashSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M287.998 352.002C287.998 369.602 273.598 384.002 255.998 384.002H255.998C238.398 384.002 223.998 369.602 223.998 352.002V272.238L95.999 171.915V416.001C95.999 451.347 124.652 480 159.998 480H487.763C487.998 479.317 487.807 479.873 488.042 479.19L287.998 322.399V352.002ZM630.811 469.102L543.997 401.06V96.006C543.997 60.661 515.345 32.007 479.997 32.007H159.999C138.374 32.007 119.46 42.843 107.948 59.296L38.814 5.109C34.407 1.672 29.189 0 24.032 0C16.907 0 9.845 3.156 5.126 9.187C-3.061 19.625 -1.249 34.718 9.189 42.89L601.186 506.883C611.686 515.086 626.749 513.211 634.874 502.805C643.061 492.367 641.249 477.274 630.811 469.102ZM430.111 243.235C426.41 262.1 416.572 278.154 403.396 290.861L352.342 250.844C361.525 245.209 367.998 235.532 367.998 224.004C367.998 206.38 353.623 192.005 335.998 192.005H287.998V200.413L225.707 151.593C229.491 138.139 241.377 128.006 255.998 128.006H335.998C395.164 128.006 442.123 182.003 430.111 243.235Z" })
  }
));
SquareParkingSlashSolid.displayName = "SquareParkingSlashSolid";
var SquareParkingSlash_default = SquareParkingSlashSolid;
