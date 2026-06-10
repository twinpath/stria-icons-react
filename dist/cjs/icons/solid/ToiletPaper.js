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
var ToiletPaper_exports = {};
__export(ToiletPaper_exports, {
  default: () => ToiletPaper_default
});
module.exports = __toCommonJS(ToiletPaper_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ToiletPaperSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M127.981 0C74.978 0 31.977 86 31.977 192V364.125C31.977 405.25 22.226 426.875 0.85 491C-2.65 501.25 5.1 512 15.976 512H296.863C310.739 512 322.864 503.25 327.239 490.125C340.115 451.625 351.99 417.75 351.99 364.125V192C351.99 108.375 375.616 38.5 412.493 0H127.981ZM95.979 224C87.104 224 79.979 216.875 79.979 208S87.104 192 95.979 192S111.98 199.125 111.98 208S104.855 224 95.979 224ZM159.982 224C151.107 224 143.981 216.875 143.981 208S151.107 192 159.982 192S175.983 199.125 175.983 208S168.857 224 159.982 224ZM223.985 224C215.109 224 207.984 216.875 207.984 208S215.109 192 223.985 192C232.86 192 239.986 199.125 239.986 208S232.86 224 223.985 224ZM287.988 224C279.112 224 271.987 216.875 271.987 208S279.112 192 287.988 192S303.988 199.125 303.988 208S296.863 224 287.988 224ZM479.996 0C426.994 0 383.992 86 383.992 192C383.992 298 426.994 384 479.996 384S576 298 576 192C576 86 532.998 0 479.996 0ZM479.996 256C462.37 256 447.994 227.375 447.994 192S462.37 128 479.996 128C497.622 128 511.997 156.625 511.997 192S497.622 256 479.996 256Z" })
  }
));
ToiletPaperSolid.displayName = "ToiletPaperSolid";
var ToiletPaper_default = ToiletPaperSolid;
