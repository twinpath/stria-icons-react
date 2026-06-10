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
const MusicNoteThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M321.242 0.986L236.594 25.814C219.68 30.892 208.094 46.462 208.094 64.118V388.024C190.922 366.344 161.5 352 128 352C74.98 352 32 387.817 32 432C32 476.18 74.98 512 128 512S224 476.18 224 432H224.094V162.759L334.766 130.228C344.984 127.228 352 117.853 352 107.204V24.013C352 7.997 336.613 -3.522 321.242 0.986ZM128 496C83.887 496 48 467.289 48 432S83.887 368 128 368S208 396.711 208 432S172.113 496 128 496ZM336 107.192C336 110.743 333.66 113.868 330.258 114.868L224.094 146.063V64.15C224.094 53.486 231.125 44.095 241.359 41.095L325.75 16.337C330.871 14.833 336 18.673 336 24.013V107.192Z" })
  }
));
MusicNoteThin.displayName = "MusicNoteThin";
var MusicNote_default = MusicNoteThin;
