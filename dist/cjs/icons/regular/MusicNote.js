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
var MusicNote_exports = {};
__export(MusicNote_exports, {
  default: () => MusicNote_default
});
module.exports = __toCommonJS(MusicNote_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MusicNoteRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 384 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M342.375 1.464L198.375 36.841C185.125 41.092 176 53.343 176 67.344V366.49C157.875 357.364 135.875 351.989 112 351.989C50.125 351.989 0 387.866 0 431.994S50.125 512 112 512S224 476.122 224 431.994V195.353L361.625 161.975C375 157.725 384 145.474 384 131.473V31.966C384 21.715 379.125 12.215 370.875 6.214C362.625 0.089 352.125 -1.536 342.375 1.464ZM112 463.997C72.25 463.997 48 443.245 48 431.994C48 420.744 72.25 399.992 112 399.992S176 420.744 176 431.994C176 443.245 151.75 463.997 112 463.997ZM336 119.722L224 144.974V79.094L336 53.843V119.722Z" })
  }
));
MusicNoteRegular.displayName = "MusicNoteRegular";
var MusicNote_default = MusicNoteRegular;
