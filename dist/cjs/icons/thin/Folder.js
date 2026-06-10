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
var Folder_exports = {};
__export(Folder_exports, {
  default: () => Folder_default
});
module.exports = __toCommonJS(Folder_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FolderThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 512 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M464 96H272L217.373 41.373C211.371 35.371 203.232 32 194.745 32H48C21.49 32 0 53.49 0 80V432C0 458.51 21.49 480 48 480H464C490.51 480 512 458.51 512 432V144C512 117.49 490.51 96 464 96ZM496 432C496 449.673 481.673 464 464 464H48C30.327 464 16 449.673 16 432V80C16 62.327 30.327 48 48 48H188.117C196.603 48 204.742 51.371 210.744 57.372L265.371 112H464C481.673 112 496 126.327 496 144V432ZM440 176H72C67.594 176 64 179.594 64 184S67.594 192 72 192H440C444.406 192 448 188.406 448 184S444.406 176 440 176Z" })
  }
));
FolderThin.displayName = "FolderThin";
var Folder_default = FolderThin;
